/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-27 15:29:05
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 15:57:29
 */
import { ADD_NUMBER, MINUS_NUMBER } from "./countActions";

const defaultState = {
  number: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, number: state.number + 1 };
    case MINUS_NUMBER:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
};
