import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { reduceImage } from '../util';
import { motion } from 'framer-motion';
// Import Platform icons
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Import Star icons
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = () => {
  // Get game details from redux store
  const { gameDetails, gameScreens, isLoading } = useSelector(
    (state) => state.details
  );

  // Exit Modal when clicked outside and go to home
  const history = useHistory();
  const exitDetails = (e) => {
    if (e.target.classList.contains('modal')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  // Get platform icons from platform names
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  // Get star rating
  const getStarRating = () => {
    const stars = [];
    const rating = Math.round(gameDetails.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt='star' />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt='star' />);
      }
    }
    return stars;
  };

  return (
    <>
      {/* Display modal only when fully loaded */}
      {!isLoading && (
        <Modal className='modal' onClick={(e) => exitDetails(e)}>
          <Detail layoutId={gameDetails.id}>
            <Title>
              <div className='rating'>
                <motion.h3 layoutId={`title ${gameDetails.id}`}>
                  {gameDetails.name}
                </motion.h3>
                <p>Rating: {gameDetails.rating}</p>
                {getStarRating()}
              </div>

              <Platform>
                <h3>Platforms</h3>
                <Icons>
                  {gameDetails.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatformIcon(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Icons>
              </Platform>
            </Title>

            <Media>
              {gameDetails.background_image && (
                <motion.img
                  layoutId={`image ${gameDetails.id}`}
                  src={reduceImage(gameDetails.background_image, 1280)}
                  alt={gameDetails.name}
                />
              )}
            </Media>

            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>

            <div className='gallery'>
              {gameScreens.map((screen) => (
                <img
                  src={reduceImage(screen.image, 1280)}
                  key={screen.id}
                  alt='screenshot'
                />
              ))}
            </div>
          </Detail>
        </Modal>
      )}
    </>
  );
};

// Styles
const Modal = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #D65FFB;
  }
`;

const Detail = styled(motion.div)`
  position: absolute;
  left: 10%;
  width: 80%;
  border-radius: 1rem;
  padding: 3rem 6rem;
  background: white;
  color: black;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    padding: 1rem 0rem;
  }
  img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Platform = styled.div`
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Media = styled.div`
  margin-top: 3rem;
`;

const Description = styled.div`
  margin: 2rem 0rem;
`;

export default GameDetails;
