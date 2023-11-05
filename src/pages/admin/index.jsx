import React from "react";
import memoryUtils from "../../utils/memoryUtils";
import { Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import Home from "../home";
import Category from "../category";
import Product from "../product";
import Role from "../role";
import User from "../user";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import ProductAddUpdate from "../product/productAddUpdate";
import ProductDetail from "../product/productDetail";

const { Footer, Sider, Content } = Layout;

const Admin = () => {
    const user = memoryUtils.user;

    if (!user || !user._id) {
        return <Navigate to="/login"></Navigate>
    }

    return (
        <Layout style={{ height: "100%" }}>
            <Sider>
                <LeftNav></LeftNav>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content style={{ margin: 20, backgroundColor: "#fff" }}>
                        <Routes>
                            <Route path="home" Component={Home}></Route>
                            <Route path="category" Component={Category}></Route>
                            <Route path="product" Component={Product}></Route>
                            <Route path="product/addupdate" Component={ProductAddUpdate}></Route>
                            <Route path="product/detail" Component={ProductDetail}></Route>
                            <Route path="role" Component={Role}></Route>
                            <Route path="user" Component={User}></Route>
                            <Route path="charts/bar" Component={Bar}></Route>
                            <Route path="charts/line" Component={Line}></Route>
                            <Route path="charts/pie" Component={Pie}></Route>
                            <Route path="*" element={<Navigate to="home" replace={true}/>} />
                        </Routes>
                </Content>
                <Footer style={{ textAlign: "center", color: "#cccccc" }}>推荐使用较新版谷歌浏览器，可以获得更佳页面操作</Footer>
            </Layout>
        </Layout>
    )
}

export default Admin