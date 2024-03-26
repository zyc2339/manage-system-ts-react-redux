import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number]; //type of index number for ["items"][number]

//getItem function create object
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}
//modifiy the value of key => router path
const items: MenuItem[] = [
  //each element in this array is object
  getItem("Welcome", "/welcome", <PieChartOutlined />),
  getItem("About us", "/about", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "/user/userId"),
    getItem("Bill", "/user/us"),
    getItem("Alex", "/user/u"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Delivery", "/team/teamId"),
    getItem("Marketing", "/team/teamI"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

//we can convert line 16-44 into this: easy to read
// const items: MenuItem[] = [
//     {
//         label: "Welcome",
//         key:"/page1"
//         icon:<PieChartOutlined />
//     },
//     ...
// ]

const MainMenu: React.FC = () => {
  const [subMenuArr, setSubMenuArr] = useState([""]);
  //set up path link navigate
  const navigateTo = useNavigate();
  //set up click function in menu
  const menuClick = (e: { key: string }) => {
    // console.log(e);
    // console.log(e.key);
    navigateTo(e.key);
  };
  //subMenuArr defined which submenu opened
  const handleChange = (keys: string[]) => {
    console.log(keys); //keys is an array of strings
    const openedSubMenu = keys[keys.length - 1];
    //set the submenu array only contain the last index element

    setSubMenuArr([openedSubMenu]);
    console.log([openedSubMenu]);
  };
  return (
    <Menu
      theme="dark"
      // update default👇🏼
      defaultSelectedKeys={["/welcome"]}
      mode="inline"
      //items are the data of menu
      items={items}
      onClick={menuClick}
      //sub menu open/close event👇🏼
      onOpenChange={handleChange}
      //current opened submenu array👇🏼
      openKeys={subMenuArr}
    />
  );
};

export default MainMenu;
