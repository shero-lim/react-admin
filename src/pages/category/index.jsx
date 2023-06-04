import { Card, Button, Table, Space, Tag, message } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import "./index.less"
import { Component } from "react";
import { reqCategories } from "../../api";

export default class Category extends Component {
    state = {
        loading: false,
        categories: [] //一级分类列表
    }

    initColumns = () => {
        this.columns = [
            {
                title: '分类名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width: 300,
                render: () => (
                    <Space size="middle">
                        <a>修改分类</a>
                        <a>查看子分类</a>
                    </Space>
                ),
            },
        ];
    }

    getCategories = async () => {
        this.setState({ loading: true })
        const { data: result } = await reqCategories("0");
        this.setState({ loading: false })
        if (result.status === 0) {
            const categories = result.data;
            this.setState({ categories })
        } else {
            message.error("获取分类列表失败")
        }
    }

    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getCategories()
    }

    render() {
        const title = "一级分类列表";
        const extra = (
            <Button type="primary">
                <PlusOutlined />
                添加
            </Button>
        )
        return (
            <Card title={title} extra={extra} className="card">
                <Table columns={this.columns} dataSource={this.state.categories} bordered rowKey="_id" className="table" pagination={{ pageSize: 6 }} loading={this.state.loading} />
            </Card>
        )
    }
}