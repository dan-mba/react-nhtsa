/*
  SelectBox Component
  Groups the Year, Make, & Model components in a responsive way
*/
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import Year from './Year';
import Model from './Model';
import Make from './Make';

const PaddedGrid = styled(Grid)({
  padding: 16
});

function SelectBox() {
  return (
    <Grid container sx={{
      margin: '0 0 16px',
      width: '100%',
      lineHeight: 1.43,
      fontSize: '.875rem'
    }}>
      <PaddedGrid size={{ xs: 4, md: 2 }}>
        <Year/>
      </PaddedGrid>
      <PaddedGrid size={{ xs: 8, md: 4 }} >
        <Make/>
      </PaddedGrid>
      <PaddedGrid size={{ xs: 8, md: 6 }} >
        <Model/>
      </PaddedGrid>
    </Grid>
  );
}

export default SelectBox;
