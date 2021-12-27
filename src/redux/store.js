/*
 * @Description: 
 * @version: 
 * @Author: yuanlijian
 * @Date: 2021-12-27 11:39:16
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 15:30:30
 */

import { configureStore } from '@reduxjs/toolkit';
import { countSlice } from './functionCount/slice';
import countReducer from "./classCount/countReducer";

export default configureStore({
    reducer: {
        functionCount: countSlice.reducer,
        classCount: countReducer,
    },
})

