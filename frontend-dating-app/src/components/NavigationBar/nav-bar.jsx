import { Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dating-app-logo.png";

export default function NavigationBar() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/chats" style={{ marginLeft: 20, color: "black" }}>
          Chats
        </Link>
      </div>
      <div>
        <img src={logo} alt="logo" style={{ height: 75 }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/filter" style={{ marginRight: 20, color: "black" }}>
          Filter
        </Link>
        <Link to="/explore" style={{ marginRight: 20, color: "black" }}>
          Explore
        </Link>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar style={{ backgroundColor: "#1890ff", cursor: "pointer" }}>
            P
          </Avatar>
        </Dropdown>
      </div>
    </div>
  );
}
