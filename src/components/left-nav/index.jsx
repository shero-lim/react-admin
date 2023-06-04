import "./index.less"
import logo from "../../assets/images/logo11.svg"
import { Link } from "react-router-dom"
import { Menu } from 'antd';
import { useState } from 'react';
import { items } from "../../config/menuConfig";

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