import { Typography } from '@mui/material';
import { useLocation } from 'react-router';
import { PageTitle } from '../PageTitle';

export const PageDefault = () => {
  const location = useLocation();
  return (
    <>
      <PageTitle title={location.pathname.replaceAll('/', ' ').trimStart()} />
      <Typography>Default Page Content</Typography>
    </>
  );
};