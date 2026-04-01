import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGoogleLogin, apiLogout } from './authService';

export interface User {
  id?: string;
  firebase_id: string;
  email: string;
  fullname?: string | null;
}

interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};


export const googleLogin = createAsyncThunk(
  'googleLogin',
  async (user: any, { rejectWithValue }) => {
    try {
      return await apiGoogleLogin(user);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'logoutUser',
  async (undefined, { rejectWithValue }) => {
    try {
      return await apiLogout();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },

    handleCurrentUser: (state, action) => {
      state.currentUser = action.payload

    }

  },
  extraReducers: (builder) => {
    builder
     

      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        console.log("data is in google payload", action.payload)
        state.loading = false;
        state.isLoggedIn = true;
        state.currentUser = action.payload.user;
        state.error = null;
      })
      .addCase(googleLogin.rejected, (state, action: any) => {
        console.log("data is in google rejected", action.payload)
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentUser = null
        state.isLoggedIn = false
      })
      .addCase(logoutUser.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;