import React from "react";
import { Menu, Icon, Divider } from "antd";
import "./index.less";
import { Link } from "react-router-dom";
import { switchMenu } from "../../redux/action";
import { connect } from "react-redux";
import menuList from "./../../router/menuConfig";

const SubMenu = Menu.SubMenu;
class RecursiveMenu extends React.Component {
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
    return <div>{this.renderMenu()}</div>;
  }
}
