const { createSlice, configureStore } = require("@reduxjs/toolkit");

const poketReducer = createSlice({
  name: "pokeApi",
  initialState: [
    { like: 0, dislike: 0 },
    { likeactive: false, dislikeactive: false },
  ],

  reducers: {
    likefunc: (state, action) => {
      if (state.likeactive) {
        state.likeactive = false;
        state.like = [state.like - 1, action.payload];
      } else {
        state.likeactive = true;
        state.like = [state.like + 1, action.payload];
        if (state.dislikeactive) {
          state.dislikeactive = false;
          state.like = [state.like + 1, action.payload];
          state.dislike = [state.dislike - 1, action.payload];
        }
      }
    },
  },
});

export const { likefunc } = poketReducer.actions;

export default poketReducer.reducer;
