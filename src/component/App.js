import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import { teal } from '@material-ui/core/colors';

const uiStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  todayIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: teal['A700'],
  },
}));

export default function App() {
  const classes = uiStyle();

  return (
    <div className={classes.root}>
      <NavBarComponent></NavBarComponent>
    </div>
  );
}

function NavBarComponent() {
  const classes = uiStyle();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <TodayIcon className={classes.todayIcon}></TodayIcon>
        <Typography variant='h6' className={classes.title}>
          2020年5月11日（月）
        </Typography>
        <Button color='inherit' id='signout_button'>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
