import { createSlice } from '@reduxjs/toolkit';
import { handleFirebase } from '../firebase/utils';

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
      const currentCityData = { name: payload.name, cityId: payload.id, ...payload.main };
      handleFirebase(currentCityData);
      return currentCityData;
    }
  }
});

export const { changeCity } = slice.actions;

export const selectCity = (state) => state.city;

export default slice.reducer;
