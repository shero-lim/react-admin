import "./index.less"
import logo from "../../assets/images/logo11.svg"
import { Link } from "react-router-dom"
import {
    AppstoreOutlined,
    ContainerOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('首页', '1', <PieChartOutlined />),
    getItem('商品', 'sub1', <DesktopOutlined />, [
        getItem('品类管理', '2', <DesktopOutlined />),
        getItem('商品管理', '3', <DesktopOutlined />),
    ]),
    getItem('用户管理', '4', <ContainerOutlined />),
    getItem('角色管理', '5', <MailOutlined />),
    getItem('图形图表', 'sub2', <AppstoreOutlined />, [
        getItem('柱形图', '6', <AppstoreOutlined />),
        getItem('折线图', '7', <AppstoreOutlined />),
        getItem('饼图', 'sub3', <AppstoreOutlined />),
    ]),
];

const LeftNav = () => {
    const [collapsed] = useState(false);

    return (
        <div className="left-nav">
            <Link to="/" className="left-nav-header">
                <img src={logo} alt="logo"></img>
                <h1>管理后台</h1>
            </Link>
            <div className="left-nav-menu">
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>
        </div>
    )
}

export default LeftNav