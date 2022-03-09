import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'city',
  initialState: {
    name: '',
    temperature: '',
    min: '',
    max: '',
    image: ''
  },
  reducers: {
    changeCity(state, { payload }) {
      //consume weather api bellow

      return { ...state, name: payload };
    }
  }
});

export const { changeCity } = slice.actions;

export const selectCity = (state) => state.city;

export default slice.reducer;
