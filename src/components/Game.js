import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchDetails } from '../actions/detailsAction';
import { Link } from 'react-router-dom';
import { reduceImage } from '../util';
import { motion } from 'framer-motion';
import { popup } from '../animations';

const Game = ({ game }) => {
  // Dispatch action to fetch game details into redux store
  const dispatch = useDispatch();
  const loadDetails = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchDetails(game.id));
  };

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={game.id}
      onClick={() => loadDetails()}
    >
      <Link to={`/game/${game.id}`}>
        <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
        <p>{game.released}</p>

        {game.background_image && (
          <motion.img
            layoutId={`image ${game.id}`}
            src={reduceImage(game.background_image, 640)}
            alt={game.name}
          />
        )}
      </Link>
    </StyledGame>
  );
};

// Styles
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  h3 {
    padding-top: 1rem;
  }
  p {
    padding: 0.8rem;
  }
  img {
    display: block;
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
