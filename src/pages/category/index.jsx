import { Card, Button, Table, Space, message, Modal } from "antd";
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons';
import "./index.less"
import { Component } from "react";
import { reqCategories } from "../../api";
import LinkButton from "../../components/link-button";
import AddForm from "./addForm";
import UpdateForm from "./updateForm";
export default class Category extends Component {
    state = {
        loading: false,
        categories: [], //一级分类列表
        subCategories: [], //二级分类列表
        parentId: "0",
        parentName: "",
        showStatus: 0,
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
                render: (category) => (
                    <Space size="middle">
                        <a onClick={() => this.showUpdate(category)}>修改分类</a>
                        {this.state.parentId === "0" ? <a onClick={() => { this.showSubCategories(category) }}>查看子分类</a> : null}
                    </Space>
                ),
            },
        ];
    }

    /**
     * 
     * 显示一级分类对象的二级子列表
     */
    showSubCategories = (category) => {
        //更新状态
        this.setState({
            parentId: category._id,
            parentName: category.name
        }, () => { //在状态更新且重新render()后执行
            console.log(this.state.parentId)
            this.getCategories()
        })
    }

    showCategories = (category) => {
        //更新状态
        this.setState({
            parentId: "0",
            parentName: "",
            subCategories: [],
        })
    }

    getCategories = async () => {
        this.setState({ loading: true })
        const { parentId } = this.state
        const { data: result } = await reqCategories(parentId);
        this.setState({ loading: false })
        if (result.status === 0) {
            const categories = result.data;
            if (parentId === "0") {
                this.setState({ categories })
            } else {
                this.setState({ subCategories: categories })
            }
        } else {
            message.error("获取分类列表失败")
        }
    }

    showAdd = () => {
        this.setState({
            showStatus: 1
        })
    }

    showUpdate = (category) => {
        this.category = category
        this.setState({
            showStatus: 2
        })
    }

    addCategory() {

    }

    updateCategory = ()=> {
        this.setState({
            showStatus: 0
        })
         const categoryId = this.category._id;
    }

    handleCancel = () => {
        this.setState({
            showStatus: 0
        })
    }

    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getCategories()
    }

    render() {
        const { parentId, parentName, categories, subCategories, loading, showStatus } = this.state
        const category = this.category;
        const title = parentId === "0" ? "一级分类列表" : (<span>
            <LinkButton onClick={this.showCategories}>一级分类列表</LinkButton>
            <ArrowRightOutlined style={{ marginRight: 5 }} />
            <span style={{ fontSize: 14 }}>{parentName}</span>
        </span>);
        const extra = (
            <Button type="primary" onClick={this.showAdd}>
                <PlusOutlined />
                添加
            </Button>
        )
        return (
            <Card title={title} extra={extra} className="card">
                <Table columns={this.columns} dataSource={parentId === "0" ? categories : subCategories} bordered rowKey="_id" className="table" pagination={{ pageSize: 6 }} loading={loading} />
                <Modal title="添加分类" open={showStatus === 1} onOk={this.addCategory} onCancel={this.handleCancel}>
                    <AddForm></AddForm>
                </Modal>
                <Modal title="更新分类" open={showStatus === 2} onOk={this.updateCategory} onCancel={this.handleCancel}>
                    <UpdateForm categoryName={category?.name}></UpdateForm>
                </Modal>
            </Card>
        )
    }
}