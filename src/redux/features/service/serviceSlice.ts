
import { RootState } from "@/redux/store";
import { ServiceRequest } from "@/redux/types/service.type";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type ServicePayload =  ServiceRequest & {price:number , serviceName :string , slotTime:string ,bookingDate:string}
type ServiceState = {
    selectService : ServicePayload | null
}
const initialState: ServiceState = {
    selectService: null,
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        selectService: (state, action:PayloadAction<ServicePayload >) =>{
            state.selectService = action.payload
        } ,
 
    }
})

export default serviceSlice.reducer
export const {selectService} = serviceSlice.actions
export const useSelectedSerivce = (state:RootState) => state.service.selectService
