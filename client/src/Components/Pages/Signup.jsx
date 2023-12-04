import  {React, useState} from "react";
import { Link } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd";

function Signup() {
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

// -----------------------------Register-user------------------------------------------------------
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const registerUser = (e) => {
   e.preventDefault()
  } 

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
        onSubmit={registerUser}
        initialValues={{
          prefix: "86"
        }}
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          {...formItemLayout}
          name="Name"
          label="Name"
          value ={data.name}
          onChange = {(e) => setData({...data, name: e.target.value})}
          rules={[
            {
              required: true,
              message: "Please input your name.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="email"
          label="E-mail"
          value ={data.email}
          onChange = {(e) => setData({...data, email: e.target.value})}
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
          value = {data.password}
          onChange = {(e) => setData({...data, password: e.target.value})}
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
        <Button>
          <i className="fab fa-google"></i> Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default Signup;
