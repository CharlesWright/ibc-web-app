import { styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import logo from '../logo.svg';

import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export const Home = () => {

  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_HOME} | {APP_TITLE}
        </title>
      </Helmet>
      <Typography variant="h4" color="orange">What is Interröbang Cartel?</Typography>
      <Typography>Founded on Usenet in April of 2003 by Jacob Haller, Interröbang Cartel is the world's first and greatest international
        Internet punk band, or perhaps it's a zydeco or New Wave band. No one's really sure. In any case, humorous posturing by the
        various band members eventually lead to people actually writing songs, and (wonder of wonders) recording them.
      </Typography>
      <p></p>
      <Typography>
        The band now has two full albums and a couple half-completed albums, a total of 5+ hours of music and rising. Musical styles
        are all over the map. Sometimes, one song gets recorded with two different melodies, or in a few cases, winds up with two 
        incompatible sets of lyrics. No biggie. It's song fighting. Musical stone soup. It's everyone contributing a little something 
        to the artistic pot or taking what's already been contributed and polishing it up a little.
      </Typography>
      <p></p>
      <Typography>We hope you enjoy our madness.</Typography>
      <LogoWrapper>
        <StyledLogo src={logo} alt="logo" />
      </LogoWrapper>
    </>
  );
};

const LogoWrapper = styled('div')`
  text-align: center;
  margin-top: 6rem;
`;

const StyledLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 15s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;