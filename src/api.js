// const BASE_URL = 'https://api.rawg.io/api/';

// Getting the dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();
const thisYear = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;

// URLS
const POPULAR_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${thisYear}&ordering=-rating&page_size=10`;
const NEW_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${thisYear}&ordering=-released&page_size=10`;
const UPCOMING_GAMES = `games?key=${process.env.REACT_APP_API_KEY}&dates=${thisYear},${nextYear}&ordering=-added&page_size=10`;

// Exports
export const popularGamesUrl = () => `/api/${POPULAR_GAMES}`;
export const newGamesUrl = () => `/api/${NEW_GAMES}`;
export const upcomingGamesUrl = () => `/api/${UPCOMING_GAMES}`;

// Game details
export const gameDetailsUrl = (gameId) => `/api/games/${gameId}?key=${process.env.REACT_APP_API_KEY}`;

// Game screenshots
export const gameScreensUrl = (gameId) =>
  `/api/games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

// Game search
export const searchedGamesUrl = (gameName) =>
  `/api/games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=9`;
