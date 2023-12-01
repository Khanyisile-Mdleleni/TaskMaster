import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const { TextArea } = Input;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Message sent successfully");
    form.resetFields(); // Reset the form fields
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <>
      <h1 className="title">Contact Us</h1>
      <div className="contact">
        <p>Need assistance? Submit a request below and we will get to work!</p>
      </div>
      <div className="form">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          {...formItemLayout}
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address.",
            },
            {
              required: true,
              message: "Please input your E-mail.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please input your message.",
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
}

export default Contact;