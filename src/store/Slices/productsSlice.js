import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=c94b800b13b9b455a5d91c9b54e821a3'
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  'products/fetchProductDetails',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c94b800b13b9b455a5d91c9b54e821a3`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c94b800b13b9b455a5d91c9b54e821a3&query=${query}`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],          
    product: null,    
    status: 'idle',    
    detailsStatus: 'idle', 
    error: null,
    searchResults: [],  
    searchStatus: 'idle' 
  },
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.searchStatus = 'idle';
    },
    resetProductDetails: (state) => {
      state.product = null;
      state.detailsStatus = 'idle';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      .addCase(fetchProductDetails.pending, (state) => {
        state.detailsStatus = 'loading';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.detailsStatus = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.detailsStatus = 'failed';
        state.error = action.payload;
      })
      
      .addCase(searchProducts.pending, (state) => {
        state.searchStatus = 'loading';
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.searchStatus = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.searchStatus = 'failed';
        state.error = action.payload;
      });
  }
});

export const { clearSearchResults, resetProductDetails } = productsSlice.actions;
export default productsSlice.reducer;