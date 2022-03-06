import axios from 'axios';
import { API_URL } from '../constants';

export const getData = async pageCount => {
  try {
    const { data } = await axios.get(
      '/api' + `${API_URL}&perPage=10&currentPage=${pageCount}`,
    );
    console.log(pageCount);
    if (data.body.length) {
      if (typeof data === 'string' && data.includes('SERVICE ERROR')) {
        console.log('너무많은 데이터 요청');
        return {
          result: 'error',
        };
      } else {
        console.log('데이터 로드중', data);
        return data;
      }
    } else {
      console.log('데이터가 존재하지 않습니다');
      return {
        result: 'error2',
      }
    }
  } catch (err) {
    console.log(err);
  }
};
