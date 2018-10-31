import React from 'react'
import { Card, Row, Col, List, Skeleton, Avatar } from 'antd';


const data = [
    {
        content: 'Racing car sprays burning fuel into crowd.',
        date: '2018-10-30 11:11:11'
    },
    {
        content: 'Japanese princess to wed commoner.',
        date: '2018-10-30 19:19:19'
    },
    {
        content: 'Australian walks 100km after outback crash.',
        date: '2018-10-30 10:10:10'
    },

];

class InformPage extends React.Component {

    state = {

    }
    render() {
        return (
            <div>
                <Row type='flex'>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}  >
                        <Card
                            title="通知公告"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <span style={{ color: '#000' }}>
                                            {item.content}
                                        </span>

                                        <span style={{
                                            marginLeft: '8%'
                                        }}
                                        >
                                            <a href="#">{item.date}</a>
                                        </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                        <Card
                            title="工作日程"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <span style={{ color: '#000' }}>
                                            {item.content}
                                        </span>

                                        <span style={{
                                            marginLeft: '8%'
                                        }}
                                        >
                                            <a href="#">{item.date}</a>
                                        </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            title="会议纪要"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <span style={{ color: '#000' }}>
                                            {item.content}
                                        </span>

                                        <span style={{
                                            marginLeft: '8%'
                                        }}
                                        >
                                            <a href="#">{item.date}</a>
                                        </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            title="代办事项"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <span style={{ color: '#000' }}>
                                            {item.content}
                                        </span>

                                        <span style={{
                                            marginLeft: '8%'
                                        }}
                                        >
                                            <a href="#">{item.date}</a>
                                        </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            title="员工去向"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                            <span style={{ color: '#000' }}>
                                                {item.content}
                                            </span>
                                            <span style={{
                                                marginLeft: '8%'
                                            }}
                                            >
                                                <a href="#">{item.date}</a>
                                            </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card
                            title="规章制度"
                            extra={<a href="#">更多</a>}
                            style={{ width: '100%', textAlign: 'left', height: '100%' }}
                            headStyle={{ textAlign: 'left' }}
                        >
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <span style={{ color: '#000' }}>
                                            {item.content}
                                        </span>

                                        <span style={{
                                            marginLeft: '8%'
                                        }}
                                        >
                                            <a href="#">{item.date}</a>
                                        </span>
                                    </List.Item>
                                )
                                }
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default InformPage;