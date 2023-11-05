import React, { Component } from "react";
import { Form, Select, Input } from "antd";

const Item = Form.Item
const Option = Select.Option
export default class AddForm extends Component {
    constructor(props){
        super(props)
        this.parentId = props.parentId
        this.categories = props.categories
    }
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
                    defaultValue={this.parentId}
                >
                    <Option value="0">一级分类</Option>
                    {
                        this.categories.map(c=><Option value={c._id}>{c.name}</Option>)
                    }
                </Select>
                <Input placeholder="请输入分类名称" style={{width: 470, margin: "5px 0"}}/>
            </Form>
        )
    }
}