import React from "react";
import { Menu, Icon, Divider } from "antd";
// import "./index.less";
// import { Link } from "react-router-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class RecursiveMenu {

  // 渲染菜单数组
  static renderMenu = (data) => {
    console.log("渲染菜单/。。。。");
    return data.map(item => {
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key} style={{ color: '#fff' }}>
            <img src={item.img} alt=""
              style={{
                width: 30,
                height: 30,
                position: 'relative',
                top: -9
              }}
            />
            <span style=
              {{
                position: 'absolute',
                top: 17,
                left: 20,
              }}
            >
              {item.title}
            </span>
          </Link>
        </Menu.Item>
      );
    });
  };

  static renderLeftMenu = (data) => {
    console.log("渲染菜单/。。。。");
    return data.map(item => {
      return (
        <Route key={item.key} path={item.key} render={props => (
          <Menu
          >
          {
           item.children && 
           item.children.map(child => {
             return (
              <Menu.Item key={child.key}>
                <img src={child.img} alt="" style=
                {{
                  width: 21,
                  height: 21,
                  marginRight: 5
                }}
                />
                { child.title }
              </Menu.Item>
             );
           })
          } 
          </Menu>
        )}
        />
      );
    })
  };

  // <Link to={item.key} style={{ color: '#fff' }}>
  //           <img src={item.img} alt=""
  //             style={{
  //               width: 30,
  //               height: 30,
  //               position: 'relative',
  //               top: -9
  //             }}
  //           />
  //           <span style=
  //             {{
  //               position: 'absolute',
  //               top: 17,
  //               left: 20,
  //             }}
  //           >
  //             {item.title}
  //           </span>
  //         </Link>

}
export default RecursiveMenu;