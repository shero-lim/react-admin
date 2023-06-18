import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Item = Form.Item
const Option = Select.Option
export default class AddForm extends Component {
    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        return (
            <Form>
                <Select
                    style={{
                        width: 470,
                        margin: "5px 0"
                    }}
                    defaultValue={"0"}
                >
                    <Option value="0">一级分类</Option>
                    <Option value="1">电脑</Option>
                    <Option value="2">图书</Option>
                </Select>
                <Input placeholder="请输入分类名称" style={{width: 470, margin: "5px 0"}}/>
            </Form>
        )
    }
}