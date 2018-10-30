import React from 'react';

import './index.less';

import { List, Avatar, Modal, Icon } from 'antd';

import ChangePasswdForm from './ChangePasswd';


class PersonSummary extends React.Component {
    state = {
        imgUrl: '/assets/logo-ant.svg',
        data: [
            {
                url: '/assets/person.jpg',
                post: '员工岗位',
                name: '员工姓名'
            }
        ],
        visible: false,
        confirmLoading: false,
        ModalText: 'Content of the modal',
    }

    handleChangePasswd = (values) => {
        console.log("修改密码");
        console.log("handleChangePasswd values: ",values);
        // 提交成功后关闭modal
        this.setState({
            visible: false
        });
    }
    handleShowInfo = () => {
        console.log("显示用户详细信息。");
    }
    // 显示modal
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    // 点击提交回调
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    // 点击取消回调
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }




    render() {
        const { data } = this.state;
        const { visible, confirmLoading, ModalText } = this.state;
        
        return (
            <div>

                <div>
                    <Modal title="修改密码"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                        cancelText="取消"
                        okText="提交"
                        destroyOnClose={true}
                        footer={null}
                    >
                        <div>
                            <ChangePasswdForm handleSubmit={this.handleChangePasswd} />
                        </div>
                    </Modal>
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.url} shape="square" size={80}
                                        style={{
                                            width: 83,
                                            height: 104,
                                            marginRight: 2
                                        }}
                                    />
                                }
                                //title={<a href="https://ant.design">{item.post}</a>}
                                description={
                                    <div>
                                        <ul className="ul-style">
                                            <li>
                                                <span style={{ marginLeft: 16 }}>
                                                    姓名： 岗位名
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ marginLeft: 16 }}>
                                                    岗位： 岗位名称岗位名称
                                                </span>
                                            </li>
                                            <li>
                                                <span
                                                    onClick={this.showModal}
                                                    style={{ marginRight: 10, cursor: 'pointer', color: '#ef6706' }}
                                                >
                                                    <Icon type="lock" theme="filled" />
                                                </span>
                                                <span
                                                    onClick={this.handleShowInfo}
                                                    style={{ marginLeft: 10, cursor: 'pointer', color: '#3a3af5' }}
                                                >
                                                    <Icon type="user" theme="outlined" />
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                }
                                style={{

                                }}
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
export default PersonSummary;