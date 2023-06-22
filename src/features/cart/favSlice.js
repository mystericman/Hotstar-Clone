import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favourites: [],
}

const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        addFav: (state, action) => {
            const cnt = state.favourites.findIndex(
                (item) => item === action.payload
            );
            console.log(cnt);
            if(cnt >= 0){
                console.log("init");
                const calc = state.favourites.filter(
                    (mov) => mov !== action.payload
                );
                state.favourites = calc;
            }
            else{
                state.favourites.push(action.payload);
            }
        },
    },
});

export const { addFav } = favSlice.actions;

export const selectFavourite = (state) => state.fav.favourites;
export default favSlice.reducer;