const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
  isLoading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popularGames,
        newGames: action.payload.newGames,
        upcomingGames: action.payload.upcomingGames,
        isLoading: false,
      };
    case 'LOADING_GAMES':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH_GAMES':
      return {
        ...state,
        searchedGames: action.payload.searchedGames,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
