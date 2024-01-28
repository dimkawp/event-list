import React from 'react';
import { Badge, Calendar } from 'antd';
// styles
import './style.scss';

const CalendarEvents = (props) => {
    const { data } = props;

    const dateCellRender = (value) => {
      const stringValue = value.format("DD/MM/YYYY");
      const listData = data.filter(({date})=> date === stringValue);
      return (
        <ul className="events">
          {listData.map((item, idx) => (
            <li key={idx}>
              <Badge status={item.status} text={item.title} />
            </li>
          ))}
        </ul>
      );
    };
  
    return <Calendar cellRender={dateCellRender} mode={'month'} headerRender={() => {}}/>;
  };

export default CalendarEvents;