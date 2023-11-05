import { Card, Button, Table, Select, Input } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import LinkButton from "../../components/link-button";

const Option = Select.Option;

const Product = () => {
    const title = (
        <span>
            <Select defaultValue={"0"}>
                <Option value="0">按名字搜索</Option>
                <Option value="1">按描述搜索</Option>
            </Select>
            <Input placeholder="关键字" style={{ width: 150, margin: "0 15px" }} />
        </span>
    )
    const extra = (
        <Button type="primary">
            <PlusOutlined />
            搜索
        </Button>
    )
    const dataSource = [
        {
            key: '1',
            name: '联想ThinkPad 翼480',
            des: "年度重量级新品,X390、T490全新登场 更加轻薄机身设计",
            price: '66000',
        },
        {
            key: '2',
            name: '华硕(ASUS)飞行堡垒',
            des: "15.6英寸窄边框游戏笔记本电脑",
            price: '6799',
        },
    ];

    const columns = [
        {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '商品描述',
            dataIndex: 'des',
            key: 'des',
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            render: price => `￥${price}`
        },
        {
            width: 80,
            title: '状态',
            render: () => {
                return (
                    <span>
                        <Button type="primary">下架</Button>
                        <span>在售</span>
                    </span>
                )
            }
        },
        {
            width: 80,
            title: '操作',
            render: () => {
                return (
                    <span>
                        <LinkButton>详情</LinkButton>
                        <LinkButton>操作</LinkButton>
                    </span>
                )
            }
        },
    ];
    return (
        <Card title={title} extra={extra}>
            <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                size="middle"
            />
        </Card>
    )
}

export default Product;