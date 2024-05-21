// UserSliceupdate.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//Login
export const login = createAsyncThunk(
  'users/login',
  async (userData) =>{
      try{
          const response = await axios.post("http://127.0.0.1:3002/login",{
              remail:userData.email,
              rpassword:userData.password,
          });
          console.log(response.data.User);
          localStorage.setItem('email',JSON.stringify(response.data.User))
          return response.data.User;
      }
      catch(error){
          alert("Invalid User..")
      }
  }
);

//Registration
export const registerUser = createAsyncThunk('users/registerUser', //parameter name
async (userData) =>{
        try{
            console.log(userData);
            const response = await axios.post("http://127.0.0.1:3002/registerUser",{
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
                gender: userData.gender
            });

            const user = response.data.user; //retrieve the response from the server
            return user;
        }
        catch(error){
            console.log(error);
        }
    }
);


// Define the async thunk for adding a babysitter
export const addbabysitter = createAsyncThunk(
  "babysitters/addbabysitter",
  async (babysitterData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3002/addbabysitter", babysitterData);
      return response.data.babysitter;
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === "babysitter with this ID already exists.") {
        console.error("babysitter ID already exists:", error);
        return rejectWithValue("babysitter with this ID already exists.");
      } else {
        console.error("Error adding babysitter:", error);
        return rejectWithValue(error.response ? error.response.data : "Error adding babysitter");
      }
    }
  }
);


// Define the async thunk for deleting a babysitter
export const deletebabysitter = createAsyncThunk(
  "babysitters/deletebabysitter",
  async (babysitterId, { rejectWithValue }) => {
    try {
      console.log("Deleting babysitter with ID:", babysitterId);
      const response = await axios.delete(`http://localhost:3002/flights/${babysitterId}`);
      return response.data.message;
    } catch (error) {
      console.error("Error deleting babysitter:", error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const updatebabysitter = createAsyncThunk(
  'babysitters/updatebabysitter',
  async ({ babysitterId, name, age, price, place,HomeNo }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:3002/updatebabysitter/${babysitterId}`, {
        name,
        age,
        price,
        place,
        HomeNo
      });
      return response.data.babysitter;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


// Define the async thunk for fetching flights
export const getbabysitters = createAsyncThunk(
  'babysitters/getbabysitters',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:3002/api/getAllbabysitters');
      return response.data.babysitters;
    } catch (error) {
      console.error('Error getting babysitters:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initVal = {
  babysitters: [],
  status: 'idle',
  error: null,
};
 
// Create the slice
export const UserSliceupdate = createSlice({
  name: "babysitters",
  initialState: initVal,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addbabysitter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addbabysitter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.babysitters.push(action.payload);
      })
      .addCase(addbabysitter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deletebabysitter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletebabysitter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.babysitters = state.babysitters.filter(babysitter =>
           babysitter.babysitterId !== action.meta.arg);
      })
      .addCase(deletebabysitter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      //-------------------
      .addCase(getbabysitters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getbabysitters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.babysitters = action.payload;
      })
      .addCase(getbabysitters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      //----------------
      .addCase(updatebabysitter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatebabysitter.babysitter, (state, action) => {
        state.status = 'succeeded';
        const index = state.babysitter.findIndex(babysitter => babysitter.babysitterId === action.payload.babysitterId);
        if (index !== -1) {
          state.babysitters[index] = action.payload;
        }
      })
      .addCase(updatebabysitter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
 
export default UserSliceupdate.reducer;
 