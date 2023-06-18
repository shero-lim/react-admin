import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Item = Form.Item
const Option = Select.Option
export default class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.categoryName = props.categoryName
    }

    render() {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };
        return (
            <Form>
                <Input placeholder="请输入分类名称" style={{ width: 470, margin: "5px 0" }} defaultValue={this.categoryName}/>
            </Form>
        )
    }
}