import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import styled from 'styled-components';

const SearchBar = ({
  setSearchTheme,
  setSearchContent,
  options = { name: '이름', address: '주소', message: '메모' },
}) => {
  return (
    <Box>
      <Select
        options={options}
        changeSearchTheme={theme => setSearchTheme(theme)}
      />
      <Input changeSearchContent={content => setSearchContent(content)} />
    </Box>
  );
};

const Box = styled.nav`
  display: flex;
  margin: 20px;
`;

SearchBar.propTypes = {
  options: PropTypes.array,
  setSearchTheme: PropTypes.func,
  setSearchContent: PropTypes.func,
};

export default SearchBar;
