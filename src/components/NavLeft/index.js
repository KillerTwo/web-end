import React from "react";

import { Menu, Icon } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
// import { switchMenu } from "../../redux/action";
// import { connect } from "react-redux";
import menuList from "./../../router/menuConfig";

const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  state = {
    currentKey: ""
  };
  componentDidMount() {}
  componentWillMount() {
    // let { dispatch } = this.props;
    // dispatch(switchMenu("首页"));
    //console.log("+++", this.props);
    // let currentKey = window.location.hash.replace(/#|\?.*$/, "");
    const menuTreeNode = this.renderMenu(menuList);

    this.setState({
      menuTreeNode
      //currentKey
    });
  }

  handlerClick = ({ item, key }) => {
    console.log("navleft", item);
    // let { dispatch } = this.props;
    // console.log("=====", item.props.title);
    // dispatch(switchMenu(item.props.title));
    // this.setState({
    //   currentKey: key
    // });
  };
  // 递归渲染菜单
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img
            style={{ width: 120, height: 100 }}
            src="/assets/logo-ant.svg"
            alt="this is logo"
          />
          <h1>Imooc MS</h1>
        </div>
        <Menu
          theme="light"
          mode="inline"
          onClick={this.handlerClick}
          selectedKeys={[this.state.currentKey]}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

//const MyNavLeft = connect()(NavLeft);
//export default connect()(NavLeft);
// export default MyNavLeft;
export default NavLeft;
