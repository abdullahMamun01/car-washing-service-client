
import { RootState } from "@/redux/store";
import { TUser } from "@/redux/types/user.type";
import { createSlice } from "@reduxjs/toolkit";



type TAuthState = {
    user: TUser | null,
    token: string | null
}
const initialState: TAuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) =>{
            const { user, token } = action.payload
            state.user = user
            state.token = token
        } ,
        logout : (state) => {
            state.user = null 
            state.token = null
        }
    }
})

export default authSlice.reducer
//dispatch action
export const {setUser,logout} = authSlice.actions
export const useToken = (state:RootState) => state.auth.token
export const selectCurrentUser = (state:RootState) => state.auth.user