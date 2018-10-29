import React from "react";
import { Layout, Menu, Icon } from "antd";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";

import NavLeft from "../../components/NavLeft";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class HomeLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            {/* 头部导航栏 */}
            <Header
              className="header"
              style={{ backgroundColor: "rgb(32, 122, 211)" }}
            >
              <div className="logo" />
              <Menu
                //theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{
                  lineHeight: "64px",
                  backgroundColor: "rgb(32, 122, 211)",
                  color: "#fff"
                }}
              >
                <Menu.Item key="1">
                  <Link to="/sub1" style={{ color: "#fff" }}>
                    首页
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/sub2"> 详情页 </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/sub3"> 个人页 </Link>
                </Menu.Item>
              </Menu>
            </Header>

            <Layout>
              {/* 侧边导航栏 */}
              <Sider width={200} style={{ background: "#fff" }}>
                <div className="logo">
                  <img
                    style={{ width: 120, height: 100 }}
                    src="/assets/logo-ant.svg"
                    alt="this is logo"
                  />
                  <h1>Imooc MS</h1>
                </div>
                <Route
                  path="/sub1"
                  render={() => (
                    <Menu
                      mode="inline"
                      style={{ height: "100%", borderRight: 0 }}
                    >
                      <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="user" /> subnav 1
                          </span>
                        }
                      >
                        <Menu.Item key="1"> option1 </Menu.Item>
                        <Menu.Item key="2"> option2 </Menu.Item>
                        <Menu.Item key="3"> option3 </Menu.Item>
                        <Menu.Item key="4"> option4 </Menu.Item>
                      </SubMenu>
                    </Menu>
                  )}
                />
                <Route
                  path="/sub2"
                  render={() => (
                    <Menu
                      mode="inline"
                      style={{ height: "100%", borderRight: 0 }}
                    >
                      <SubMenu
                        key="sub2"
                        title={
                          <span>
                            <Icon type="user" /> subnav 2
                          </span>
                        }
                      >
                        <Menu.Item key="1"> option1 </Menu.Item>
                        <Menu.Item key="2"> option2 </Menu.Item>
                        <Menu.Item key="3"> option3 </Menu.Item>
                        <Menu.Item key="4"> option4 </Menu.Item>
                      </SubMenu>
                    </Menu>
                  )}
                />
                <Route
                  path="/sub3"
                  render={() => (
                    <div>
                      <Menu
                        mode="inline"
                        style={{ height: "100%", borderRight: 0 }}
                      >
                        <SubMenu
                          key="sub3"
                          title={
                            <span>
                              <Icon type="user" /> subnav 3
                            </span>
                          }
                        >
                          <Menu.Item key="1"> option1 </Menu.Item>
                          <Menu.Item key="2"> option2 </Menu.Item>
                          <Menu.Item key="3"> option3 </Menu.Item>
                          <Menu.Item key="4"> option4 </Menu.Item>
                        </SubMenu>
                      </Menu>
                    </div>
                  )}
                />
                {/* <NavLeft /> */}
              </Sider>
              {/* 内容区 */}
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content
                  style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280
                  }}
                >
                  <p>
                    Scripts are a great way of automating tasks related to your
                    package, such as simple build processes or development
                    tools.Using the "scripts" field, you can define various
                    scripts to be run as yarn run For example, the build -
                    project script above can be invoked with yarn run build -
                    project and will run node build - project.js. Certain script
                    names are special.If defined, the preinstall script is
                    called by yarn before your package is installed. For
                    compatibility reasons, scripts called install, postinstall,
                    and prepublish will all be called after your package has
                    finished installing. The start script value defaults to node
                    server.js.
                  </p>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default HomeLayout;
