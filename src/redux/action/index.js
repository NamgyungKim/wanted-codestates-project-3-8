import { getItems, setItems } from '../../utils/LocalStorage';
import { getData } from '../../utils/axios';

export const SAVE_PLACE = 'SAVE_PLACE';
export const UPDATE_PLACE = 'UPDATE_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const GET_DATA = 'GET_DATA';
export const NOTIFY = 'NOTIFY';
export const GET_PAGEDATA = 'GET_PAGEDATA';
export const TURN_OFF_OBSERVE = 'TURN_OFF_OBSERVE';

export const savePlaceItem = item => {
  const placeItems = getItems('placeItems') || [];
  setItems('placeItems', [...placeItems, item]);
  return {
    type: SAVE_PLACE,
    payload: {
      item,
    },
  };
};

export const updatePlaceItem = (memo, index) => {
  const placeItems = getItems('placeItems').map((placeItem, i) => {
    return i === index ? { ...placeItem, message: memo } : placeItem;
  });
  setItems('placeItems', placeItems);
  return {
    type: UPDATE_PLACE,
    payload: {
      placeItems,
    },
  };
};

export const deletePlaceItem = removedIdx => {
  const placeItems = getItems('placeItems').filter(
    (_, idx) => idx !== removedIdx,
  );
  setItems('placeItems', placeItems);
  return {
    type: DELETE_PLACE,
    payload: {
      placeItems,
    },
  };
};

export const getDataFromApi = async (pageCount, isLoaded) => {
  console.log('데이터 요청중');
  const data = await getData(pageCount);

  if (data.result === 'error') {
    alert('너무 많이 데이터를 요청했습니다.');
    return;
  }
  if (data.result === 'error2') {
    alert('더이상 불러온 데이터가 없습니다.');
    return {
      type: TURN_OFF_OBSERVE,
      payload: {
        isLoaded: false,
      }
    }
  }
  const filtered = data.body.map(item => {
    return {
      name: item.NM,
      address: item.ADRES,
      phoneNumber: item.TELNO,
    };
  });
  return {
    type: GET_DATA,
    payload: {
      data: filtered,
      isLoaded,
    },
  };
};

export const notify =
  (message, time = 500) =>
  dispatch => {
    dispatch(showMessage(message, time));
    setTimeout(() => {
      dispatch(deleteMessage());
    }, time);
  };

export const showMessage = (message, time) => {
  return {
    type: SHOW_MESSAGE,
    payload: { message, time },
  };
};

export const deleteMessage = () => {
  return {
    type: DELETE_MESSAGE,
  };
};

export const getPageData = pageCount => {
  return {
    type: GET_PAGEDATA,
    payload: pageCount,
  };
};
