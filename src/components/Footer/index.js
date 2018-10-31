import React from 'react'
import { Layout } from 'antd';
const { Footer } = Layout;
class FooterComp extends React.Component {
    render() {
        return (
            <div>
                <Layout style={{  }}>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        );
    }
}
export default FooterComp;