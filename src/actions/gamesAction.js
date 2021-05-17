import axios from 'axios';
import {
  popularGamesUrl,
  newGamesUrl,
  upcomingGamesUrl,
  searchedGamesUrl,
} from '../api';

export const fetchGames = () => async (dispatch) => {
  dispatch({
    type: 'LOADING_GAMES',
  });

  const popularGamesData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesUrl());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popularGamesData.data.results,
      newGames: newGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
    },
  });
};

export const searchGames = (gameName) => async (dispatch) => {
  const searchedGamesData = await axios.get(searchedGamesUrl(gameName));

  dispatch({
    type: 'SEARCH_GAMES',
    payload: {
      searchedGames: searchedGamesData.data.results,
    },
  });
};
