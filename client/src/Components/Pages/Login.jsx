import {React, useState} from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios'

function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) =>{
    e.preventDefault()
    axios.get('/')
  }

  return (
    <div className="login">
      <h4>
        Welcome Back !
        <span id="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>{" "}
      </h4>
      <div style={{ fontSize: "200px"}}>
        <UserOutlined />
      </div>

      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        onSubmit={loginUser}
      >
        <Form.Item
          name="Email"
          value = {data.email}
          onChange = {(e) => setData({...data, email: e.target.value})}
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          value = {data.password}
          onChange = {(e) => setData({...data, password: e.target.value})}
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Link to="/login" style={{ textDecoration: "none" }}>
            Forgot Password ?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default Login;