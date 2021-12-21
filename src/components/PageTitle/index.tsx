import { styled, Typography } from '@mui/material';

export const PageTitle = ({ title }: { title: string }) => (
  <StyledPageTitle variant="h4" component="h4" color="orange">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)<{ component: string }>`
  text-transform: uppercase;
`;