import React from 'react';
import block from 'bem-cn';

import { DayModifiers } from 'react-day-picker';

import './PickerDay.scss';

const b = block('picker-day');

type Props = {
  date: Date;
  modifiers: DayModifiers;
}

function PickerDay(props: Props) {
  const { date, modifiers } = props;
  return (
    <div
      className={b({ ...modifiers })}
      role="gridcell"
    >
      <div className={b('label', { ...modifiers })}>{date.getDate()}</div>
    </div>
  );
}

export { PickerDay, Props };
      
