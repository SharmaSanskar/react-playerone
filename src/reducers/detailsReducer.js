const initState = { gameDetails: {}, gameScreens: {}, isLoading: true };

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS':
      return {
        ...state,
        gameDetails: action.payload.gameDetails,
        gameScreens: action.payload.gameScreens,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
