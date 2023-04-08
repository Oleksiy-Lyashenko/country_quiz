import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCountries } from "../api/countries";
import { Country } from "../types/country"

type Countries = {
  countries: Country[];
  loader: boolean;
  error: boolean;
};

const initialState: Countries = {
  countries: [],
  loader: false,
  error: false,
};

export const initCountries = createAsyncThunk(
  'countries/Fethc',
  async () => {
    const value = await getCountries();

    return value;
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(initCountries.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(initCountries.fulfilled, (state, action) => {
      state.loader = false;
      state.countries = action.payload;
    });

    builder.addCase(initCountries.rejected, (state) => {
      state.loader = false;
      state.error = true;
    });
  },
});

export default countriesSlice.reducer;

