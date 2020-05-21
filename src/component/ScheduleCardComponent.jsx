import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const uiStyle = makeStyles((theme) => ({
  accessTimeIcon: {
    marginRight: theme.spacing(1),
    verticalAlign: 'middle',
  },
  card: {
    padding: '10px',
  },
  span: {},
}));

export default function ScheduleCardComponent() {
  const classes = uiStyle();

  return (
    <React.Fragment>
      <Box pb={2}>
        <Card className={classes.card}>
          <AccessTimeIcon fontSize='small' className={classes.accessTimeIcon} />
          <time>12:00〜13:00</time>
          <Typography>お昼ご飯</Typography>
        </Card>
      </Box>
      <Box pb={2}>
        <Card className={classes.card}>content</Card>
      </Box>
    </React.Fragment>
  );
}
