import { Button, Form } from 'antd';
import FormBuilder from 'antd-form-builder';
import React from 'react';

export default () => {
  const meta = {
    fields: [
      { key: 'username', label: 'User Name' },
      { key: 'password', label: 'Password', widget: 'password' }
    ]
  };

  const handleFinish = React.useCallback((values) => {
    console.log('Submit: ', values);
  }, []);

  return (
    <Form onFinish={handleFinish} className="app-container">
      <FormBuilder meta={meta} />
      <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
