import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";

const Login = () => {
   const [form] = Form.useForm();

   const navigate = useNavigate();

   const onFormSubmit = (content) => {
      login(content)
         .then(({ token }) => {
            if (token) {
               localStorage.setItem("jwt-token", token);
               navigate("/");
               navigate(0);
            }
         })
         .catch(() => {
            message.error("Username/Password does not match!");
         });
   };

   return (
      <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
         <Form.Item label="Username" name="username" required>
            <Input placeholder="Enter username" />
         </Form.Item>
         <Form.Item label="Password" name="password">
            <Input required placeholder="Enter password" type="password" />
         </Form.Item>
         <Form.Item>
            <Button icon={<ArrowRightOutlined />} type="primary" htmlType="submit">
               Login
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Login;
