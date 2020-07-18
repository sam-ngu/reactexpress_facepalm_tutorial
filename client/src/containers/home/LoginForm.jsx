import React  from 'react';
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
function LoginForm(){

  const onFinish = async (values) => {
      console.log("Success:", values);
      // call api to login

        fetch('')
      



  };

  const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
  };

 return (
     <Form
         {...layout}
         name="basic"
         initialValues={{
             remember: true,
         }}
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
     >
         <Form.Item
             label="Email"
             name="username"
             rules={[
                 {
                     required: true,
                     message: "Please enter your email!",
                 },
             ]}
         >
             <Input  />
         </Form.Item>

         <Form.Item
             label="Password"
             name="password"
             rules={[
                 {
                     required: true,
                     message: "Please input your password!",
                 },
             ]}
         >
             <Input.Password />
         </Form.Item>

         <Form.Item {...tailLayout} name="remember" valuePropName="checked">
             <Checkbox>Remember me</Checkbox>
         </Form.Item>

         <Form.Item {...tailLayout}>
             <Button type="primary" htmlType="submit">
                 Submit
             </Button>
         </Form.Item>
     </Form>
 );

}

export default LoginForm;