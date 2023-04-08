import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCountries } from '../api/countries';
import { Country } from '../types/country';

type Question = {
  countries: Country[];
  variants: Country[];
  rightAnswer: Country | null;
  typeOfQuestion: number;
  visibleButton: boolean;
  answer: string;
};

const initialState: Question = {
  countries: [],
  variants: [],
  rightAnswer: null,
  typeOfQuestion: 0,
  visibleButton: false,
  answer: '',
};

export const initCountries = createAsyncThunk('countries/Fethc', async () => {
  const value = await getCountries();

  return value;
});

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addVariants: (state) => {
      const countries = state.countries;
      const newArray = [];

      for (let i = 0; i < 4; i++) {
        const number = Math.floor(Math.random() * (countries.length - 1));
        const country = countries[number];

        newArray.push(country);
      }

      const country = newArray[Math.floor(Math.random() * 3)];

      state.variants = newArray;
      state.rightAnswer = country;
    },
    deleteVariants: (state) => {
      state.variants = [];
      state.rightAnswer = null;
    },
    setTypeOfQuestion: (state) => {
      const number = Math.round(Math.random() * 9);

      state.typeOfQuestion = number;
    },
    addAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visibleButton = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(initCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});
export const { addVariants, deleteVariants, setTypeOfQuestion, addAnswer, setVisible } =
  questionSlice.actions;
export default questionSlice.reducer;
