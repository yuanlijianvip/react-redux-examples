/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-27 15:28:44
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 15:34:35
 */

export const ADD_NUMBER = "add_number";
export const MINUS_NUMBER = "minus_number";

export const addActionCreator = () => {
  return {
    type: ADD_NUMBER,
  };
};

export const minusActionCreator = () => {
  return {
    type: MINUS_NUMBER,
  };
};
