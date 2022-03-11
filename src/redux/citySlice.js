import { createSlice } from '@reduxjs/toolkit';
import { handleFirebase } from '../firebase/utils';

export const slice = createSlice({
  name: 'city',
  initialState: {},

  reducers: {
    changeCity(state, { payload }) {
      handleFirebase(payload);
      return { ...state, list: { ...state.list, [payload.cityId]: payload } };
    },
    setCityId(state, { payload }) {
      return { ...state, cityId: payload };
    },
    changeCityLocal(state, { payload }) {
      return { ...state, list: { ...state.list, [payload.cityId]: payload } };
    }
  }
});

export const { changeCity, setCityId, changeCityLocal } = slice.actions;

export const selectCity = (state) => state.city;

export default slice.reducer;
