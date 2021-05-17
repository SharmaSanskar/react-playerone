import { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { useDispatch } from 'react-redux';
import { searchGames } from '../actions/gamesAction';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Nav = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  // Dispatch action to fetch searched games into redux store
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchGames(search));
    setSearch('');
  };

  // Clear searched games array
  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={() => clearSearch()}>
        <img src={logo} alt='logo' />
        <h1>Player<span>One</span></h1>
      </Logo>

      <form onSubmit={(e) => submitSearch(e)}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </StyledNav>
  );
};

// Styles
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #8646FA;
    color: white;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 0.8rem;
  }

  h1 {
    color: #D65FFB;
  }

  span {
    color: #8646FA;
  }
`;

export default Nav;
