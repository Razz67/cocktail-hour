import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
	"cocktails/fetchCocktails",
	async () => {
		return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=`
		).then((res) => res.json());
	}
);

export const PopularCocktails = createAsyncThunk("cocktails/PopularCocktails", async (id) => {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/popular.php?=${id}`)
            .then((res) => res.json()); 
    }
);

export const fetchOneCocktail = createAsyncThunk(
	"cocktails/fetchOneCocktail", 
async ({ id }) => {
    return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${ id }`)
            .then((res) => {
				console.log(res);
				return res.json()
			})
			
			.catch((err) => console.log(err))
    }
);
export const fetchSearchCocktail = createAsyncThunk("cocktails/fetchSearchCocktail", async ({searchText}) => {
    return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${searchText}`)
            .then((res) =>  res.json());
    }
);

export const NonAlcoholCocktails = createAsyncThunk("cocktails/NonAlcoholCocktails", async () => {
    return fetch(
			`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non_Alcoholic`)
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
		// Fetch Cocktials
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

		// Popular Cocktails
		[PopularCocktails.pending]: (state, action) => {
			state.loading = true;
		},

		[PopularCocktails.fulfilled]: (state, action) => {
			state.loading = false;
			state.cocktails = action.payload.drinks;
		},

		[PopularCocktails.rejected]: (state, action) => {
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
			console.log(action);
		},

		[fetchOneCocktail.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		// Non-Alcoholic Cocktails
		[NonAlcoholCocktails.pending]: (state, action) => {
			state.loading = true;
		},

		[NonAlcoholCocktails.fulfilled]: (state, action) => {
			state.loading = false;
			state.cocktails = action.payload.drinks;
		},

		[NonAlcoholCocktails.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

		[fetchSearchCocktail.pending]: (state, action) => {
			state.loading = true;
		},

		[fetchSearchCocktail.fulfilled]: (state, action) => {
			state.loading = false;
			state.cocktails = action.payload.drinks;
		},

		[fetchSearchCocktail.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},

	},
});

export default cocktailSlice.reducer;

