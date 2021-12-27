/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-27 14:50:22
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 15:30:35
 */
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countSlice } from "../redux/functionCount/slice";

const FunctionComponent = () => {
    const { number } = useSelector(
        (state) => state.functionCount
    );
    const dispatch = useDispatch();

    const add = () => {
        dispatch(countSlice.actions.add())
    }

    const minus = () => {
        dispatch(countSlice.actions.minus())
    }

    return (
        <div>
            <button onClick={add}>+</button>
            <span>{number}</span>
            <button onClick={minus}>-</button>
        </div>
    );
};
export default FunctionComponent;

