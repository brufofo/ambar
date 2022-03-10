import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'city',
  initialState: {
    name: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0
  },

  reducers: {
    changeCity(state, { payload }) {
      console.log(payload);
      return { name: payload.name, ...payload.main };
    }
  }
});

export const { changeCity } = slice.actions;

export const selectCity = (state) => state.city;

export default slice.reducer;
