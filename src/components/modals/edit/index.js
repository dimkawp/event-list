import React, { useState } from 'react';
import { Button, Modal, Input, Select, DatePicker, Form, Row, Col } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import api from '../../../api';
import { STATUS_OPTIONS } from '../../../consts';
// styles
import './style.scss';

const ButtonEditEvent = (props) => {
  const { data, setData, event } = props;
  const [date, setDate] = useState(event.date);
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
    const result = data.map((el, idx) => {
        if (el.id === event.id) {
            el = { ...values, date: date }
        }
        return el;
    });

    api.editEvent(() => {
      setData(result);
      setIsModalOpen(false);
      localStorage.setItem('data', JSON.stringify(result));
    });
  };

  return (
    <>
      <EditOutlined onClick={showModal} />
      <Modal title="Created Ticket" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered footer={false}>
        <Form  
            onFinish={onFinish} 
            initialValues={{ ...event }} 
            className='edit-form'>
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

export default ButtonEditEvent;