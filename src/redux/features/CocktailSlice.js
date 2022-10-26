import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk("cocktail/fetchCocktails", async () => {
    return fetch(
			"https://www.thecocktaildb.com/api/json/v2/9973533/recent.php?s=")
            .then((res) => res.json()); 
    }
);

const cocktailSlice = createSlice({
    name: "cocktails",
    initialState: {
        cocktails: [],
        cocktail: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload;
        }
    }
});

export default cocktailSlice.reducer;

