import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodayIcon from '@material-ui/icons/Today';
import { teal } from '@material-ui/core/colors';

const uiStyle = makeStyles((theme) => ({
  todayIcon: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
}));

export default function NavBar(props) {
  const classes = uiStyle();

  return (
    <React.Fragment>
      <AppBar position='fixed' style={{ backgroundColor: teal['A700'] }}>
        <Toolbar>
          <TodayIcon className={classes.todayIcon} />
          <Typography variant='h6' className={classes.title}>
            2020年5月11日（月）
          </Typography>
          <Button color='inherit' id='signout_button'>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </React.Fragment>
  );
}
