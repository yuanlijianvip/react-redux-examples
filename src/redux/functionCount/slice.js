/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-27 11:50:30
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 14:56:40
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  number: 0,
};

//异步发送请求
export const signIn = createAsyncThunk("user/signIn", async (paramaters) => {
  const { data } = await axios.post(`http://xxx`, {
    email: paramaters.email,
    password: paramaters.password,
  });
  return data.token;
});

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: (state) => {
      state.number += 1;
    },
    minus: (state) => {
      state.number -= 1;
    },
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
