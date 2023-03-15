import { Button, Col, Form, Input, Row } from 'antd';
import { Link } from 'gatsby';
import React from 'react';
import { ROUTES } from '../../../constants';

const Signup = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}>
        <Form.Item label="email">
          <Form.Item name={'email'} rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="OTP" />
          </Form.Item>
          {
            <Row gutter={10}>
              <Col>
                <Form.Item name={'otp'} rules={[{ required: true }]}>
                  <Input placeholder="OTP" />
                </Form.Item>
              </Col>
              <Col>
                <Button>verify</Button>
              </Col>
            </Row>
          }
        </Form.Item>
        <Form.Item
          validateStatus="success"
          hasFeedback
          name={'fullname'}
          rules={[{ required: true, whitespace: true }]}
          label="Full name">
          <Input />
        </Form.Item>
        <Form.Item
          validateStatus="error"
          hasFeedback
          name={'username'}
          rules={[{ required: true, whitespace: true }]}
          label="Username">
          <Input />
        </Form.Item>
        <Form.Item name={'phoneNumber'} label="Phone number">
          <Input />
        </Form.Item>
        <Form.Item
          name={'password'}
          rules={[{ required: true, whitespace: true }]}
          label="Password">
          <Input type="password" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to={ROUTES.login}>Login</Link>
      </Button>
    </>
  );
};

export default React.memo(Signup);
