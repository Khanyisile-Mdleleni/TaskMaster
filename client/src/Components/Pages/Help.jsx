import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What is TaskMaster ?",
    children: (
      <p>
        It is a computer program that facilitates project planning,
        organization, and management. It can be used to manage resources, assign
        tasks, monitor progress, and establish communication with stakeholders
        in addition to creating project plans. It assists project teams in
        staying on course, ensuring that deadlines are met, and achieving
        objectives.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Does TaskMaster integrate with other  task management softwares ?",
    children: <p>No, it deosn't</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "What are the benefits of using TaskMaster Tool ?",
    children: (
      <p>
        By leveraging TaskMater software, teams can enhance their organization,
        efficiency, collaboration, and visibility, leading to more successful
        project outcomes.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Can we try TaskMaster for free ?",
    children: (
      <p>
        Absolutely! The free Basic version allows unlimited project creation, so
        you can create as many projects as you need.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: " How many members can be added to a project ?",
    children: <p>A maximum of 4</p>,
    style: panelStyle,
  },
];
function Help() {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <>
      <h1 className="title">F.A.Qs</h1>
      <div className="help">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
            width: "1150px",
          }}
          items={getItems(panelStyle)}
        />
        <div>
          <h6>Didn't find the answer</h6> <br />
          <div>
            <Link to="/contact">
              <Button type="button">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
