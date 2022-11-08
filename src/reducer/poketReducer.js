import { createSlice } from "@reduxjs/toolkit";

const poketReducer = createSlice({
  name: "pokedex",
  initialState: {
    id: 0,
    like: 0,
    dislike: 0,
    likeactive: false,
    dislikeactive: false,
  },

  reducers: {
    likefunc: (state, action) => {
      //   state.like = action.payload;
      //   state.dislike = action.payload;
      //   state.likeactive = action.payload;
      //   state.dislikeactive = action.payload;
      if (state.likeactive) {
        state.likeactive = false;
        state.like = action.payload;
      } else {
        state.likeactive = true;
        state.like = state.like + 1;
        if (state.dislikeactive) {
          state.dislikeactive = false;
          //   state.like = state.like + 1;
          state.dislike = state.dislike - 1;
        }
      }
      state.id = action.payload;
    },
    dislikefunc: (state, action) => {
      if (state.dislikeactive) {
        state.dislikeactive = false;
        state.dislike = state.dislike - 1;
      } else {
        state.dislikeactive = true;
        state.dislike = state.dislike + 1;
        if (state.likeactive) {
          state.likeactive = false;
          //   state.dislike = state.dislike + 1;
          state.like = state.like - 1;
        }
      }
      state.id = action.payload;
    },
  },
});

export const { likefunc, dislikefunc } = poketReducer.actions;

export default poketReducer.reducer;
