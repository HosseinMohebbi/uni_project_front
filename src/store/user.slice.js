import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: undefined,
  nickName: undefined,
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
        state.isLogin = true;
        state.email = action.payload.email;
    },
    setLogout: (state, action) => {
        state.isLogin = false;
        state.email = undefined;
    },
    setRegister: (state, action) => {
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
    }
  },
})


export const { setLogin, setLogout, setRegister } = userSlice.actions

export const userReducer = userSlice.reducer