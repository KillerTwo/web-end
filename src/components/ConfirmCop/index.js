import React from 'react'

import { Layout, Menu, Icon, Popconfirm, message } from "antd";

class CustomConfirm extends React.Component {

    confirm = (e)=>{
        // message.success('你一点击确认');
        this.props.confirm(e);
    }
    cancel = (e)=>{
        //message.error('Click on No');
        if(this.props.cancel){
            this.props.cancel(e);
        }
    }

    render() {
        return (
            <div>
                <Popconfirm title={this.props.title}
                    cancelText="取消"
                    okText="确定"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                >
                    <Icon type="poweroff" theme="outlined" />
                </Popconfirm>
            </div>
        );
    }
}
export default CustomConfirm;