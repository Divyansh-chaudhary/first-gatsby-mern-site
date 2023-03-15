import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'gatsby';
import { ROUTES } from '../../../constants';

const login = () => {
  const onFinish = useCallback((values) => {
    console.log(values);
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true
            }
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      <Button>
        <Link to={ROUTES.signup}>Register</Link>
      </Button>
    </>
  );
};

export default React.memo(login);
