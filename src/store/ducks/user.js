import { USER_STORAGE_NAME } from '../../constants/variables';

//ACTION TYPES
export const Types = {
  SET_USER_DATA: 'user/SET_USER_DATA',
};

//reducer
const initialState = {
  user: JSON.parse(localStorage.getItem(USER_STORAGE_NAME)),
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USER_DATA:
      return {
        ...state,
        user: action.payload.data,
      };

    default:
      return state;
  }
};

export default user;

//Action Creators
export const Creators = {
  setUserData: (data) => ({
    type: Types.SET_USER_DATA,
    payload: { data },
  }),
};
