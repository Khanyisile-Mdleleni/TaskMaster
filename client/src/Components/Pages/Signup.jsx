import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  // --------------------------SignUp with Google (Firebase)--------------------------------------------------

  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  // ---------------------------Form Fields---------------------------------------------------------

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
    vertical: true,
  };

  return (
    <div className="signup">
      <h4>Sign Up for TaskMaster</h4>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "10px",
        }}
      >
        Create an account or
        <div style={{ marginLeft: "8px" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            login
          </Link>
        </div>
      </p>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        onSubmit={handleSubmit}
        initialValues={{
          prefix: "86",
        }}
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          {...formItemLayout}
          name="email"
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
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
          name="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please input your password.",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The passwords do not match.");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("You must accept the agreement."),
            },
          ]}
        >
          <Checkbox>
            I agree to TaskMaster's user agreement and privacy policy.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <hr style={{ flex: 1, borderTop: "2px solid #333" }} />
        <p style={{ margin: "0 10px", color: "#333" }}>OR</p>
        <hr style={{ flex: 1, borderTop: "2px solid #333" }} />
      </div>

      <div className="auth-btn">
        <Button onClick={handleClick}>
          <i className="fab fa-google"></i> Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default Signup;