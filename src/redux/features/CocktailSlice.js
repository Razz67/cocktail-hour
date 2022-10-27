import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails", async () => {
    return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=`)
            .then((res) => res.json()); 
    }
);

export const fetchOneCocktail = createAsyncThunk("cocktails/fetchOneCocktails", async ({id}) => {
    return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${id}`)
            .then((res) => res.json()); 
    }
);

const cocktailSlice = createSlice({
	name: "cocktails",
	initialState: {
		cocktails: [],
		cocktail: [],
		loading: false,
		error: null,
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
			state.error = action.payload;
		},

		// One Cocktail
		[fetchOneCocktail.pending]: (state, action) => {
			state.loading = true;
		},

		[fetchOneCocktail.fulfilled]: (state, action) => {
			state.loading = false;
			state.cocktail = action.payload.drinks;
		},

		[fetchOneCocktail.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default cocktailSlice.reducer;

