import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'target',
  initialState: {},

  reducers: {
    changeTarget(state, { payload }) {
      return { currentTarget: payload };
    }
  }
});

export const { changeTarget } = slice.actions;

export const targetCity = (state) => state.target;

export default slice.reducer;
