import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loaderAnimation } from '../animations';

const Loader = () => {
  return (
    <StyledLoader>
      <Bouncy variants={loaderAnimation} animate='bounce'></Bouncy>
      <h3>Loading Games...</h3>
    </StyledLoader>
  );
};

// Styles
const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 40vh;
`;
const Bouncy = styled(motion.div)`
  background: #D65FFB;
  min-height: 1.2rem;
  min-width: 1.2rem;
  /* border-radius: 50%; */
  margin: 1rem;
`;

export default Loader;
