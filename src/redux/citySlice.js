import { createSlice } from '@reduxjs/toolkit';
import { handleFirebase } from '../firebase/utils';

export const slice = createSlice({
  name: 'city',
  initialState: {},

  reducers: {
    changeCity(state, { payload }) {
      // console.log(payload);
      // const currentCityData = {
      //   name: payload.name,
      //   cityId: payload.id,
      //   icon: payload.weather[0].icon,
      //   iconId: payload.weather[0].id,
      //   country: payload.sys.country,
      //   temp: payload.main.temp,
      //   temp_min: payload.main.temp_min,
      //   temp_max: payload.main.temp_max
      // };
      handleFirebase(payload);
      // return { ...state, [payload.cityId]: payload };
      return { ...state, list: { ...state.list, [payload.cityId]: payload } };
    },
    setCityId(state, { payload }) {
      return { ...state, cityId: payload };
    },
    changeCityLocal(state, { payload }) {
      console.log(payload);
      return { ...state, list: { ...state.list, [payload.cityId]: payload } };
    }
  }
});

export const { changeCity, setCityId, changeCityLocal } = slice.actions;

export const selectCity = (state) => state.city;

export default slice.reducer;
