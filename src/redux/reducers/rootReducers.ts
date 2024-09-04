import authReducers from "@/redux/features/auth/authSlice";
import { baseApi } from "../api/baseApi";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import serviceReducers from '@/redux/features/service/serviceSlice'
const persistAuthConfig =  {
  key: 'auth',
  storage,
}

const persistSelectServiceConfig = {
  key:'service' ,
  storage
}
const persistedAuthReducer = persistReducer(persistAuthConfig , authReducers)
const persistedSelectServiceReducer = persistReducer(persistSelectServiceConfig , serviceReducers)



export const rootReducer = {
  auth: persistedAuthReducer,
  service: persistedSelectServiceReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
