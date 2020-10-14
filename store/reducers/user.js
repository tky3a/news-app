const initialState = {
  clips: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLIP":
      console.log("ADD_CLIPアクションが呼ばれた");
      return {
        ...state,
        clips: [...state.clips, action.clip],
      };
    case "DELETE_CLIP":
      console.log("DELETE_CLIPアクションが呼ばれた");
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;
