import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCategory = createAsyncThunk('category/getCategory',async () =>{


    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
    };
    const response = await fetch(`http://localhost:4000/public/category`, requestOptions);
    const category = await response.json();
    return category;

});

const categorySlice = createSlice({
  name: 'category',
  initialState : {
    isLoading : false,
    category : []
  },
  extraReducers :{
    [getCategory.pending] : (state, action) =>{
      state.isLoading = true
    },
    [getCategory.fulfilled] : (state, action) =>{
      state.isLoading = false;
      state.category = action.payload.category;
    },
    [getCategory.rejected] : (state, action) =>{
      state.isLoading = false;
      state.isError = action.error;
    },
  }
})

export default categorySlice.reducer