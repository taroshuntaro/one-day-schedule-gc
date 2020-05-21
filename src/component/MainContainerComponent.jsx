import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';
/** Custom module */
import ScheduleCardComponent from './ScheduleCardComponent';

const uiStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: grey[200],
    minHeight: '100vh',
    paddingTop: '16px',
  },
}));

export default function MainContainerComponent() {
  const classes = uiStyle();

  return (
    <Container maxWidth='md' className={classes.container}>
      <ScheduleCardComponent />
    </Container>
  );
}
