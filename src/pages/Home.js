import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../actions/gamesAction';
import styled from 'styled-components';
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';

const Home = () => {
  // Dispatch action to fetch games data into redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  // Get games data from redux store
  const {
    popularGames,
    newGames,
    upcomingGames,
    searchedGames,
    isLoading,
  } = useSelector((state) => state.games);

  // Get game id from path, undefined if home
  const { pathname } = useLocation();
  const pathId = pathname.split('/')[2];

  return (
    <>
      {/* Rendering Loader while fetching games */}
      {isLoading ? (
        <Loader />
      ) : (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
          <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>{pathId && <GameDetails />}</AnimatePresence>

            {/* Rendering Search Results only if array contains games */}
            {searchedGames.length ? (
              <>
                <h2>Search Results</h2>
                <Games>
                  {searchedGames.map((game) => (
                    <Game key={game.id} game={game} />
                  ))}
                </Games>
              </>
            ) : (
              ''
            )}

            <h2>Upcoming Games</h2>
            <Games>
              {upcomingGames.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
              {popularGames.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>

            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
};

// Styles
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
`;
const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
`;

export default Home;
