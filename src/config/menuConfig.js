import { Link } from "react-router-dom"
import {
    AppstoreOutlined,
    ContainerOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export const items = [
    getItem(<Link to="/home">首页</Link>, '1', <PieChartOutlined />),
    getItem("商品", 'sub1', <DesktopOutlined />, [
        getItem(<Link to="/category">品类管理</Link>, '2', <DesktopOutlined />),
        getItem(<Link to="/product">商品管理</Link>, '3', <DesktopOutlined />),
    ]),
    getItem(<Link to="/user">用户管理</Link>, '4', <ContainerOutlined />),
    getItem(<Link to="/role">角色管理</Link>, '5', <MailOutlined />),
    getItem("图形图表", 'sub2', <AppstoreOutlined />, [
        getItem(<Link to="/charts/bar">柱形图</Link>, '6', <AppstoreOutlined />),
        getItem(<Link to="/charts/line">折线图</Link>, '7', <AppstoreOutlined />),
        getItem(<Link to="/charts/pie">饼图</Link>, '8', <AppstoreOutlined />),
    ]),
];