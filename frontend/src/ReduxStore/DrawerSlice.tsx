import { createSlice } from "@reduxjs/toolkit";

export const DrawerSlice = createSlice({
    name:"Open",
    initialState:{
        open: false
    },
    reducers:{
        showDrawer: (state) => {
            state.open = true
        },
        hideDrawer: (state) => {
            state.open = false
        }
    }
});

export const {showDrawer, hideDrawer} = DrawerSlice.actions;
export default DrawerSlice.reducer;