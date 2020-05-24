import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
/** Custom module */
import NavBar from '../component/NavBar';
import MainContainer from '../component/MainContainer';

const uiStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = uiStyle();

  return (
    <div className={classes.root}>
      <NavBar />
      <MainContainer />
    </div>
  );
}
