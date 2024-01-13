import { createSlice } from "@reduxjs/toolkit";

export interface User {
    value: number
}

const initialState: User = {
    value: 0,
}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
})


export default userSlice.reducer