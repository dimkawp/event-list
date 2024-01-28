import React from 'react';
import { message, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const ButtonRemoveEvent = (props) => {
    const { data, setData, event } = props;

    const confirm = () => {
      const updateData = data.filter(({ id }) => id !== event.id );

      setData(updateData);
      localStorage.setItem('data', JSON.stringify(updateData));
    };

    const cancel = () => {
      message.error('Click on No');
    };

 return (
    <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
    >
      <DeleteOutlined />
    </Popconfirm>
 )
};
export default ButtonRemoveEvent;