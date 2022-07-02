import { Button, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../services/AuthService";

const Register = () => {
   const [form] = Form.useForm();

   const navigate = useNavigate();

   const onFormSubmit = async ({ username, email, password }) => {
      signup({ username, email, password })
         .then((resp) => {
            navigate("/login");
         })
         .catch((e) => {
            message.error("Something went wrong!");
         });
   };

   return (
      <div className="background-wrap">
         <Form form={form} layout="vertical" onFinish={onFormSubmit} initialValues={{ requiredMarkValue: "Required" }}>
            <Form.Item
               name="username"
               label="Username"
               tooltip="What do you want others to call you?"
               rules={[
                  {
                     required: true,
                     message: "Please input your username!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="password"
               label="Password"
               rules={[
                  {
                     required: true,
                     message: "Please input your password!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}
               hasFeedback>
               <Input.Password />
            </Form.Item>

            <Form.Item
               name="confirm"
               label="Confirm Password"
               dependencies={["password"]}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: "Please confirm your password!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                           return Promise.resolve();
                        }

                        return Promise.reject(new Error("The two passwords that you entered do not match!"));
                     },
                  }),
               ]}>
               <Input.Password />
            </Form.Item>

            <Form.Item
               name="email"
               label="E-mail"
               rules={[
                  {
                     type: "email",
                     message: "The input is not valid E-mail!",
                  },
                  {
                     required: true,
                     message: "Please input your E-mail!",
                  },
                  { max: 255, message: "Max 255 characters allowed." },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit">
                  Register
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default Register;
