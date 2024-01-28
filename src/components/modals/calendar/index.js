import React, { useState } from 'react';
import { Button, Modal } from 'antd';
// components
import CalendarEvents from '../../calendar';

const ButtonCalendarEvents = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Calendar Events
      </Button>
      <Modal title="Calendar Events" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered width={1200}>
        <CalendarEvents data={props.data} />
      </Modal>
    </>
  );
};

export default ButtonCalendarEvents;