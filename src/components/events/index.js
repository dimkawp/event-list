import React from 'react';
import { Avatar, List, Tag } from 'antd';
// components
import ButtonEditEvent from '../modals/edit';
import ButtonRemoveEvent from '../modals/remove';
// styles
import './style.scss';

const Events = (props) => {
  const { data, setData } = props;

  return (
    <List
      className='event-list'
      pagination={{ pageSize: 8, hideOnSinglePage: true }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item key={item.id}>
          <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={`${item.title}`}
            description={item.content}
          />
          <ButtonEditEvent data={data} setData={setData} event={item} />
          <ButtonRemoveEvent data={data} setData={setData} event={item} />
          <div>{item.date}</div>
          <Tag color={item.status}>{item.status}</Tag>
        </List.Item>
      )}
    />
  )
}

// just example for deep compare props and rerender
const areEqual = (prevProps, nextProps) => {
  if (JSON.stringify(prevProps) !== JSON.stringify(nextProps)) {
    return false;
  }
  return true;
}
const EventsMemo = React.memo(Events, areEqual);
export default EventsMemo;