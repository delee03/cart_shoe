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
            content: "Đại lý",
        },
        {
            to: "/page",
            content: "Chính sách",
        },
        {
            to: "/page",
            content: "Điều khoản",
        },
    ];
    return (
        <Layout>
            <Header
                style={{
                    padding: "30px",
                    minHeight: "10vh",
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

                <div className="nav-link text-center">
                    {/* render các nav-link từ mảng arrNavLink là các obj chứa to, content */}
                    {arrNavLink.map((item, index) => {
                        return (
                            <NavLink
                                to={item.to}
                                //router dom navlink cung cấp thuộc tính isActive, isPending để ktra active class
                                className={({ isActive, isPending }) => {
                                    return `" text-lg me-10 " ${
                                        isActive
                                            ? "text-sky-500 font-semibold "
                                            : "text-white"
                                    }`;
                                }}
                            >
                                {item.content}
                            </NavLink>
                        );
                    })}
                </div>
                <div
                    className="text-white text-2xl"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                >
                    <ShoppingCartOutlined />
                </div>
            </Header>
            <Content
                style={{
                    padding: "30px 48px",
                }}
            >
                <div
                    className="min-h-screen"
                    style={{
                        padding: 24,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/* thẻ outlet dùng để render nội dung các thẻ component con kế thừa hometemplate */}
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
