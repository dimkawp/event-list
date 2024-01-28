import React, { useState } from 'react';
import { Button, Modal, Input, Select, DatePicker, Form, Row, Col } from 'antd';
import moment from 'moment';
import api from '../../../api';
import { STATUS_OPTIONS } from '../../../consts';
// styles
import './style.scss';

const ButtonCreateEvent = (props) => {
  const { setData } = props;
  const [date, setDate] = useState(moment().format('DD/MM/YYYY'));
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

  const handleChange = (value) => {
    //console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  const onFinish = (values) => {
    const request = { ...values, date: date, id: Date.now() };
    api.createEvent(() => {
      setData(current => {
        localStorage.setItem('data', JSON.stringify([...current, request])); 
        return [...current, request]
      });
      setIsModalOpen(false);
 
    });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Created
      </Button>
      <Modal title="Created Ticket" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false} destroyOnClose>
        <Form onFinish={onFinish} initialValues={{date: moment().format('DD/MM/YYYY')}} className='create-form' preserve={false}>
            <Form.Item
              label="title"
              name="title"
              rules={[
                {
                  required: true,
                  message: 'Please input your title!',
                },
              ]}
            >
            <Input />
          </Form.Item>
          <Form.Item
            label="content"
            name="content"
            rules={[
              {
                required: true,
                message: 'Please input your content!',
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Row style={{ columnGap: '5px'}}>
            <Col>
              <Form.Item 
                initialValue="success"
                label="status" 
                name="status"
                rules={[
                  {
                    required: true,
                    message: 'Please choice status!',
                  },
                ]}
              >
                <Select
                  defaultValue="success"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={STATUS_OPTIONS}
                />
              </Form.Item>
            </Col>
            <Col>
              <DatePicker
                label={'date'}
                format='DD/MM/YYYY'
                placeholder='DD/MM/YYYY'
                allowClear={false}
                onChange={onChange}
              />
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ButtonCreateEvent;