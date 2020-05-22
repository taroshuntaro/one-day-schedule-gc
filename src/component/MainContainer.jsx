import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';
/** Custom module */
import ScheduleListWrap from './ScheduleListWrap';

const uiStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: grey[200],
    minHeight: '100vh',
    paddingTop: '16px',
  },
}));

export default function MainContainer() {
  const classes = uiStyle();

  return (
    <Container maxWidth='md' className={classes.container}>
      <ScheduleListWrap />
    </Container>
  );
}
