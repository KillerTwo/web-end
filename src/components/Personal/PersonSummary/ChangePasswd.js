import React from 'react';

import { List, Avatar, Modal, Icon, Form, Input, Button } from 'antd';

const FormItem = Form.Item;


const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

class ChangePasswdForm extends React.Component {

    state = {

    };

    check = (e) => {
        console.log(e.target);
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.info('success');
                }
            },
        );
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        console.log("点击提交");
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.handleSubmit(values);
            } else {
                console.log("验证不通过");
            }
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem {...formItemLayout} label="旧密码">
                        {getFieldDecorator('oldPasswd', {
                            rules: [{
                                required: true,
                                message: 'Please input your name',
                            }],
                        })(
                            <Input placeholder="Please input your password" />
                        )}
                    </FormItem>


                    <FormItem {...formItemLayout} label="新密码">
                        {getFieldDecorator('newPasswd', {
                            rules: [{
                                required: this.state.checkNick,
                                message: 'Please input your nickname',
                            }],
                        })(
                            <Input placeholder="Please input your nickname" />
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label="确认密码">
                        {getFieldDecorator('passwdAgain', {
                            rules: [{
                                required: this.state.checkNick,
                                message: 'Please input your nickname',
                            }],
                        })(
                            <Input placeholder="Please input your nickname" />
                        )}
                    </FormItem>

                    <FormItem {...formTailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

// const WrappedDynamicRule = Form.create()(DynamicRule);
export default Form.create()(ChangePasswdForm);