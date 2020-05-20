import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
/** Custom module */
import NavBarComponent from './NavBarComponent';
import MainContainerComponent from './MainContainerComponent';

const uiStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = uiStyle();

  return (
    <div className={classes.root}>
      <NavBarComponent></NavBarComponent>
      <MainContainerComponent></MainContainerComponent>
    </div>
  );
}
