import React from 'react'
import { Layout, Menu, Icon, Popconfirm, message, Row, Col } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecursiveMenu from '../../utils/menuRender';
import leftMenu from '../../router/LeftNavMenuConfig';
import CustomConfirm from '../ConfirmCop';

class TopNavMenu extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Menu
                            mode="horizontal"
                            style={{
                                lineHeight: "64px",
                                backgroundColor: "#3F9AE1",
                                color: "#fff",
                                //display: 'inline-block',
                            }}
                        >
                            {/* <RecursiveMenu menuData={menuList} /> */}
                            {
                                // leftMenu为从后端返回的菜单列表
                                RecursiveMenu.renderMenu(leftMenu)
                            }
                        </Menu>
                    </Col>
                </Row>


                {/* 退出登陆 */}

                {/* <div style={{
                  display: 'inline-block',
                  float: 'right',
                  fontSize: 20,
                  color: '#fff',
                  cursor: 'pointer'
                }}>
                  <CustomConfirm title="你确定要退出吗？" confirm={this.handleLogout} />     
                </div> */}
            </div>
        );
    }
}
export default TopNavMenu;