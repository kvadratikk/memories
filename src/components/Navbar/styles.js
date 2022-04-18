import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    overflow: 'hidden',
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {},
  toolbar: {},
  profile: {
    display: 'flex',
  },
  logout: {
    marginLeft: '100px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: '10px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    appBar: {
      padding: '10px 20px',
    },
    heading: {
      display: 'none',
    },
    userName: {
      display: 'none',
    },
    image: {
      marginLeft: '16px',
    },
    toolbar: {},
    profile: {
      width: 'auto',
      justifyContent: 'center',
    },
    logout: {
      marginLeft: '20px',
    },
    logo: {
      display: 'none',
    },
  },
}));
