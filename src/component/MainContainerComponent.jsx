import React from 'react';
/** Material-UI module */
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';

export default function MainContainerComponent() {
  //const classes = uiStyle();

  return (
    <Container
      maxWidth='md'
      style={{ backgroundColor: grey[200], minHeight: '100vh' }}
    >
      sample
    </Container>
  );
}
