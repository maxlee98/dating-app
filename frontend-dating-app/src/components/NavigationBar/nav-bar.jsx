import { Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/images/dating-app-logo.png";
import "./nav-bar.css";

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
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <Link to="/chats" className="navbar-link">
          Chats
        </Link>
      </div>
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="navbar-menu-container">
        <Link to="/filter" className="navbar-link">
          Filter
        </Link>
        <Link to="/explore" className="navbar-link">
          Explore
        </Link>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar className="navbar-avatar">P</Avatar>
        </Dropdown>
      </div>
    </div>
  );
}
