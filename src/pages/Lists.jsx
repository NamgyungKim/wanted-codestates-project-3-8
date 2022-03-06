import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import DataList from '../components/DataList';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi, getPageData } from '../redux/action';
import useIntersect from '../utils/useIntersect';

const Lists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { apiData, isLoaded, pageCount } = useSelector(state => ({
    apiData: state.apiData.data,
    isLoaded: state.apiData.isLoaded,
    pageCount: state.pageReducer.pageCount,
  }));

  const page = useRef(pageCount);

  useEffect(() => {
    dispatch(getDataFromApi(pageCount, true));
    dispatch(getPageData(page.current));
  }, []);

  const [_, setRef] = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    await dispatch(getPageData(page.current++));
    await dispatch(getDataFromApi(page.current, true));
    observer.observe(entry.target);
  }, {});

  return (
    <Wrap>
      <Nav>
        <IoIosArrowBack size={24} onClick={() => navigate('/')} />
        <h2>데이터 목록</h2>
      </Nav>
      <ul>
        {apiData.map((item, idx) => {
          return (
            <DataList
              item={item}
              key={idx}
              title={item.name}
              address={item.address}
              tel={item.phoneNumber}
            />
          );
        })}
      </ul>
      {isLoaded && <p ref={setRef}>Loading...</p>}
    </Wrap>
  );
};

const Nav = styled.nav`
  display: flex;
  padding-bottom: 10px;
  margin: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 1.5;
  svg {
    transform: translateX(10px);
    transition: all 0.2s;
    cursor: pointer;
    :hover {
      transform: translateX(0px);
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }
`;

const Wrap = styled.div`
  max-width: 428px;
  margin: 20px auto;
  height: 700px;
  p {
    width: 100%;
    text-align: center;
  }
`;

export default Lists;
