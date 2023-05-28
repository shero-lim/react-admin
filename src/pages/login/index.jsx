import React, { Component } from "react";
import "./index.less"
import logo from "./images/logo11.svg"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { reqLogin } from "../../api";
import { useNavigate } from 'react-router-dom';
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

const Login = () => {

    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const { username, password } = values;
        const result = await reqLogin(username, password)
        // if(result.status === 0){
        if (true) {
            message.success("登录成功");
            const user = result.data;
            memoryUtils.user = user;
            storageUtils.saveUser(user);
            navigate("/", { replace: true });
        } else {
            //登录失败，用户名或密码错误
            message.error(result.message)
        }
    };

    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log("validate failed: ", errorFields, values, outOfDate)
    }

    const validatePwd = (_, value) => {
        if (!value) {
            return Promise.reject(new Error('密码必须输入'))
        } else if (value.length < 4) {
            return Promise.reject(new Error('密码长度不能小于4位'))
        } else if (value.length > 12) {
            return Promise.reject(new Error('密码长度不能大于12位'))
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            return Promise.reject(new Error('密码必须是英文、数字或下划线组成'))
        } else {
            return Promise.resolve()
        }
    }

    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"></img>
                <h1>后台管理系统</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        //声明式验证： 直接使用别人定义好的验证规则进行验证
                        rules={[
                            { required: true, message: '用户名必须输入' },
                            { min: 4, message: '用户名至少4位' },
                            { max: 12, message: '用户名最多12位' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },
                        ]}
                        initialValue={"admin"}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                validator: validatePwd,
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
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}

export default Login