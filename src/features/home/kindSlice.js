import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNewsBusiness, getNewsEntertainment, getNewsHealth, getNewsScience, getNewsSports,
    getNewsTechnology
} from './HomeAPI';

import business from '../data-news/business.json'
import entertainment from '../data-news/entertainment.json'
import health from '../data-news/health.json'
import science from '../data-news/science.json'
import technology from '../data-news/technology.json'
import source from '../data-news/source-us.json'



const initialState = {
  data: {
    business : business,
    entertainment: entertainment,
    health: health,
    science: business,
    sports: science,
    technology: technology,
    source: source
  },
  status: 'idle',
};
export const NewsBusiness = createAsyncThunk(
  'kind/NewsBusiness',
  async (pageNumber) => {
    const response = await getNewsBusiness(pageNumber)
    const jsonData =  response.json();
    // console.log(jsonData);
    return jsonData;
  }
);

export const NewsEntertainment = createAsyncThunk(
    'kind/NewsEntertainment',
    async (pageNumber) => {
      const response = await getNewsEntertainment(pageNumber)
      const jsonData =  response.json();
     // console.log(jsonData);
      return jsonData;
    }
  );

  export const NewsHealth = createAsyncThunk(
    'kind/NewsHealth',
    async (pageNumber) => {
      const response = await getNewsHealth(pageNumber)
      const jsonData =  response.json();
     // console.log(jsonData);
      return jsonData;
    }
  );

  export const NewsScience = createAsyncThunk(
    'kind/NewsScience',
    async (pageNumber) => {
      const response = await getNewsScience(pageNumber)
      const jsonData =  response.json();
     // console.log(jsonData);
      return jsonData;
    }
  );

  export const NewsSports = createAsyncThunk(
    'kind/NewsSports',
    async (pageNumber) => {
      const response = await getNewsSports(pageNumber)
      const jsonData =  response.json();
     // console.log(jsonData);
      return jsonData;
    }
  );

  export const NewsTechnology = createAsyncThunk(
    'kind/NewsTechnology',
    async (pageNumber) => {
      const response = await getNewsTechnology(pageNumber)
      const jsonData =  response.json();
     // console.log(jsonData);
      return jsonData;
    }
  );

export const kindSlice = createSlice({
    name: 'kindSlice',
    initialState,
  extraReducers: (builder) => {
    builder
      .addCase(NewsBusiness.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsEntertainment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsHealth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsScience.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsSports.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsTechnology.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(NewsBusiness.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.business = action.payload;
      })
      .addCase(NewsEntertainment.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.entertainment = action.payload;
      })
      .addCase(NewsHealth.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.health = action.payload;
      })
      .addCase(NewsScience.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.science = action.payload;
      })
      .addCase(NewsSports.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.sports = action.payload;
      })
      .addCase(NewsTechnology.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.technology = action.payload;
      });
  },
});

export const selectDataBusiness = (state) => state.kindSlice.data.business;
export const selectDataEntertaiment = (state) => state.kindSlice.data.entertainment;
export const selectDataHealth = (state) => state.kindSlice.data.health;
export const selectDataSciene = (state) => state.kindSlice.data.science;
export const selectDataSport = (state) => state.kindSlice.data.sports;
export const selectDataTechnology = (state) => state.kindSlice.data.technology;
export const selectDataSource = (state) => state.kindSlice.data.source;

export default kindSlice.reducer;