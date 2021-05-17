import axios from 'axios';
import { gameDetailsUrl, gameScreensUrl } from '../api';

export const fetchDetails = (gameId) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAILS',
  });

  const gameDetailsData = await axios.get(gameDetailsUrl(gameId));
  const gameScreensData = await axios.get(gameScreensUrl(gameId));

  dispatch({
    type: 'FETCH_DETAILS',
    payload: {
      gameDetails: gameDetailsData.data,
      gameScreens: gameScreensData.data.results,
    },
  });
};
