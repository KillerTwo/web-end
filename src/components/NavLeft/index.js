import React from "react";

import { Menu, Icon, Layout, Row, Col } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
// import { switchMenu } from "../../redux/action";
// import { connect } from "react-redux";
import menuList from "./../../router/menuConfig";
import PersonSummary from '../Personal/PersonSummary';

import RecursiveMenu from '../../utils/menuRender';
import leftMenu from '../../router/LeftNavMenuConfig';

const SubMenu = Menu.SubMenu;
const { Header, Footer, Sider, Content } = Layout;
class NavLeftMenu extends React.Component {
  state = {
    currentKey: ""
  };
  render() {
    return (
      <div>
        {/* <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          > */}
            {/* 个人头像 */}
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="logo-person">
                  <PersonSummary />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                {
                  RecursiveMenu.renderLeftMenu(leftMenu)
                }
              </Col>
            </Row>


          {/* </Sider>
        </Layout> */}



      </div>
    );
  }
}

export default NavLeftMenu;
