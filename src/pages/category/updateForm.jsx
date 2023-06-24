import React, { Component } from "react";
import { Form, Select, Input } from "antd";

export default class UpdateForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form onChange={(e) => { this.props.onChange(e.target.value) }} >
                <Input placeholder="请输入分类名称" style={{ width: 470, margin: "5px 0" }} defaultValue={this.props.categoryName} />
            </Form>
        )
    }
}