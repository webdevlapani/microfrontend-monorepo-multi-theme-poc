import { makeStyles } from '@mui/styles';

const appBarHeight = 64;

export const useStyles = theme => ({
  main: {
    background: theme.palette.primary.main,
    height: `calc(100vh - ${appBarHeight}px)`
  }
});
