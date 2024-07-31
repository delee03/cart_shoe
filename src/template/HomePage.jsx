import React from "react";
import { Layout, Menu, theme } from "antd";
import "./style.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { path } from "../common/path";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const HomePage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const arrNavLink = [
        {
            to: path.homepage,
            content: "Trang chủ",
        },

        {
            to: path.shoepage,
            content: "Shoe Store",
        },

        {
            to: "/about",
            content: "About",
        },
        {
            to: "/page",
            content: "Trang",
        },
    ];
    return (
        <Layout>
            <Header
                style={{
                    padding: "30px",
                    minHeight: "20vh",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <img
                        src="react.svg"
                        className="logo"
                        alt="bai tap cart shoe"
                    />
                </div>

                <div className="nav-link">
                    {arrNavLink.map((item, index) => {
                        return (
                            <NavLink
                                to={item.to}
                                className={({ isActive, isPending }) => {
                                    return `" text-lg me-10 " ${
                                        isActive
                                            ? "text-red-500 font-semibold "
                                            : "text-white"
                                    }`;
                                }}
                            >
                                {item.content}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="text-white text-2xl">
                    Giỏ hàng
                    <ShoppingCartOutlined />
                </div>
            </Header>
            <Content
                style={{
                    padding: "30px 48px",
                }}
            >
                <div
                    className="h-screen"
                    style={{
                        padding: 24,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet></Outlet>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: "center",
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Mạnh Phát
            </Footer>
        </Layout>
    );
};
export default HomePage;
