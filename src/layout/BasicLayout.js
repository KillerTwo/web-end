import React from 'react';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TopNavMenu from '../components/NavTop';
import NavLeftMenu from '../components/NavLeft';
import CustomConfirm from '../components/ConfirmCop';

import FooterComp from '../components/Footer';

import ContentPage from '../pages/ContentPage';
import ContentRouter from '../router/router';

class BasicLayout extends React.Component {

    handleLogout = (values) => {
        console.log("");
    }

    render() {
        return (
            <Router>
                {/* <Switch> */}
                <div>

                    <Row type="flex" align="middle" style={{ backgroundColor: 'rgb(63, 154, 225)', width: '100%', }}>
                        {/* 头部导航栏 */}
                        <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                            <div style={{ backgroundColor: 'rgb(63, 154, 225)', width: "100%", }}>
                                {/* 菜单 */}
                                <TopNavMenu />
                            </div>

                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                            <div style={{ backgroundColor: 'rgb(63, 154, 225)', width: '100%', color: '#fff', fontSize: 18, cursor: 'pointer' }}>
                                <CustomConfirm title="你确定要退出吗？" confirm={this.handleLogout} />
                                {/* 退出登录操作 */}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={4} xl={4}>
                            <div style={{ backgroundColor: '#333', width: '100%', }}>
                                {/* 左侧导航栏 */}
                                <Switch>
                                    <NavLeftMenu />
                                </Switch>

                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={20} xl={20}
                            style={{
                                background: "rgb(240, 242, 245)",
                                padding: 16,
                                
                            }}
                        >
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div style={{ backgroundColor: 'rgb(240, 242, 245)', width: '100%', }}>
                                        {/* 内容区 */}
                                        <ContentRouter />
                                        {/* <ContentPage /> */}
                                        {/* <InformPage /> */}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <div style={{ width: '100%',}}>
                                        {/* 页脚 */}
                                        <FooterComp />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                {/* </Switch> */}
            </Router>
        );
    }
}
export default BasicLayout;