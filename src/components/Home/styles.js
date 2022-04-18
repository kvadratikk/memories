import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    control: {
      maxWidth: '60%',
    },
    gridContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
  [theme.breakpoints.down('xs')]: {
    control: {
      maxWidth: '100%',
    },
  },
}));
