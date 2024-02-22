import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Auth} from "../http/Auth.js";
import {act} from "react-dom/test-utils";

export  const LoginUser = createAsyncThunk(
    'user/loginUser',
    async (data,{rejectWithValue}) => {
        try {
            const {email, password} = data
            const response = await Auth.signIn(email,password)

            return response.data
        }catch (e) {
            return  rejectWithValue(e?.response?.data)
        }

    }
)


const initialState = {
    email:null,
    id:null,
    token:null,
    isLoading: false,
    error:null
}
const UserSlice = createSlice({
    name :'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state,action) =>{
         state.isLoading= true
     })
        builder.addCase(LoginUser.fulfilled,(state, action) => {
            console.log(action.payload)
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
            state.token = action.payload.accessToken;
            state.isLoading= false
        })
        builder.addCase(LoginUser.rejected,(state, action) => {
          state.error = action.payload
        })
    }

})

export default  UserSlice.reducer