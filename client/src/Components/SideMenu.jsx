import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          { label: "Home", key: "/", icon: <HouseOutlinedIcon /> },
          { label: "Tasks", key: "/tasks", icon: <AssignmentOutlinedIcon /> },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <TableChartOutlinedIcon />,
          },
          { label: "Help", key: "/help", icon: <HelpOutlineOutlinedIcon /> },
          { label: "Logout", key: "/logout", icon: <ExitToAppOutlinedIcon /> },
        ]}
        style={{ backgroundColor: "#C2D9FF", height: "100vh" }}
      ></Menu>
    </div>
  );
}
export default SideMenu;
