import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id: '0',name :'Yossph Sileshi'},
    {id: '1',name :'Yalmework Sileshi'},
    {id: '2',name :'Antenhe Sileshi'}
]

const usersSlice=createSlice({
    name:'users',
    initialState,
   reducers:{}
})


export const selectAllUsers =(state) =>state.users;
export default usersSlice.reducer