import React from 'react';
import { Table } from 'antd';
import './index.less';
import { replaceResultTransformer } from 'common-tags';


const data = [
    {
        name: '',
        title: '姓名',
    },
    {
        sex: '',
        title: '性别',
    },
    {
        company: '',
        title: '公司名称',
    },
    {
        dept: '',
        title: '部门名称',
    },
    {
        post: '',
        title: '岗位名称',
    },
    {
        id: '',
        title: '工号',
    },
    {
        address: '',
        title: '现居住地址',
    },
    {
        phone: '',
        title: '手机号码',
    },
    {
        email: '',
        title: '邮箱',
    },
    {
        superior: '',
        title: '直接上级',
    },
    {
        category: '',
        title: '员工类型',
    },
    {
        is: '',
        title: '在职状态',
    },
    {
        date1: '',
        title: '入职日期',
    },
    {
        date2: '',
        title: '转正日期',
    },
    {
        person: '',
        title: '面试人',
    },
    {
        sources: '',
        title: '员工来源',
    },
    {
        date: '',
        title: '项目组',
    },

]

class PersonInfoPage extends React.Component {

    render() {
        let n = 0;
        return (
            <div >


                <table border="1" className='t-info'>
                    <caption style={{ captionSide: 'top' }}>我的标题</caption>


                    {/* {
                        data.map(item=>{
                            return (
                                ["",""].map(ele=>{
                                    return (
                                        <th>
                                            {ele.key}
                                        </th>
                                        <td>
                                            {elevalues}
                                        </td>
                                    )
                                })
                            )
                        })
                    } */}

                    <tr>
                            <th className="t-keys">
                                <span>姓名: </span>
                            </th>
                            <td className="t-values">
                                <span>这是姓名</span>
                            </td>
                        <td className="t-keys">
                            <span>性别: </span>
                        </td>
                        <td className="t-values">
                            <span>这是性别</span>
                        </td>
                        <td rowSpan={3}>
                            <img src="/assets/person.jpg" alt="" style={{ width: 99, height: 99 }} />
                        </td>
                    </tr>
                    <tr>
                        <td className="t-keys">
                            <span>姓名: </span>
                        </td>
                        <td className="t-values">
                            <span>这是姓名</span>
                        </td>
                        <td className="t-keys">
                            <span>性别: </span>
                        </td>
                        <td className="t-values">
                            <span>这是性别</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="t-keys">
                            <span>姓名: </span>
                        </td>
                        <td className="t-values">
                            <span>这是姓名</span>
                        </td>
                        <td className="t-keys">
                            <span>性别: </span>
                        </td>
                        <td className="t-values">
                            <span>这是性别</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="t-keys">
                            <span>项目组: </span>
                        </td>
                        <td className="t-values" colSpan={5}>
                            <span>这是姓名</span>
                        </td>

                    </tr>

                </table>
            </div>
        );
    }
}
export default PersonInfoPage;