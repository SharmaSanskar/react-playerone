import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      PlayerOne &copy; 2021 - All Rights Reserved
    </StyledFooter>
  );
};

// Styles
const StyledFooter = styled.footer`
  padding: 2rem;
  margin-top: 3rem;
  text-align: center;
  background: #8646FA;
  color: white;
  font-size: 1.1rem;
`;

export default Footer;
