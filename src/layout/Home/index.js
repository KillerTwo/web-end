import React from "react";
import { Layout, Menu, Icon, Popconfirm, message  } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";

import NavLeft from "../../components/NavLeft";
import PersonSummary from "../../components/Personal/PersonSummary";
import RecursiveMenu from '../../utils/menuRender';
import menuList from '../../router/TopNavMenuConfig';
import leftMenu from '../../router/LeftNavMenuConfig';
import CustomConfirm from '../../components/ConfirmCop';
import InformPage from '../../pages/inform';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class HomeLayout extends React.Component {

  // 处理退出登陆事件
  handleLogout = (e)=>{
    console.log("退出登陆。",e);
    message.success('你已成功退出');
  }
  

  render() {
    return (
      <Router>
        <div>
          <Layout>
            {/* 头部导航栏 */}
            <Header
              className="header"
              style={{ backgroundColor: "#3F9AE1" }}
            >
              <Menu
                mode="horizontal"
                style={{
                  lineHeight: "64px",
                  backgroundColor: "#3F9AE1",
                  color: "#fff",
                  display: 'inline-block',
                }}
              >
                {/* <RecursiveMenu menuData={menuList} /> */}
                {
                  // leftMenu为从后端返回的菜单列表
                  RecursiveMenu.renderMenu(leftMenu)
                }
              </Menu>
              {/* 退出登陆 */}
              <div style={{
                display: 'inline-block',
                float: 'right',
                fontSize: 20,
                color: '#fff',
                cursor: 'pointer'
              }}>
                <CustomConfirm title="你确定要退出吗？" confirm={this.handleLogout} />
                
                
              </div>
            </Header>

            <Layout>
              {/* 侧边导航栏 */}
              <Sider width={200} style={{ background: "#fff" }}>
                {/* 个人头像 */}
                <div className="logo-person">
                  <PersonSummary />
                </div>

                {
                  RecursiveMenu.renderLeftMenu(leftMenu)
                }

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
                  <InformPage />
                 
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
