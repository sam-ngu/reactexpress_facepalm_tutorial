import React, { useState } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

function Navbar(props) {
    const [current, setCurrent] = useState("mail");

    const handleClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item>Facepalm</Menu.Item>
            {/* <SubMenu
                icon={<SettingOutlined />}
                title="Navigation Three - Submenu"
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu> */}
            {/* <Menu.Item key="alipay">
                <a
                    href="https://ant.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Login
                </a>
            </Menu.Item> */}
        </Menu>
    );
}

export default Navbar;
