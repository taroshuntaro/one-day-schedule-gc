import React from 'react';
/** Material-UI module */
import { makeStyles } from '@material-ui/core/styles';
/** Custom module */
import ScheduleCard from './ScheduleCard';

const uiStyle = makeStyles((theme) => ({
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  },
}));

const scheduleListData = {
  time: '12:00〜13:00',
  title: 'お昼休み',
};

export default function ScheduleListWrap(props) {
  const classes = uiStyle();

  return (
    <ul className={classes.ul}>
      <li>
        <ScheduleCard scheduleListData={scheduleListData} />
      </li>
    </ul>
  );
}
