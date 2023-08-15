import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// eslint-disable-next-line react/prop-types
const ProjectCards = ({ cardData }) => {
  // eslint-disable-next-line react/prop-types
  const { home, avatar } = cardData;
  return (
    <div className="text-center my-16 mx-auto max-w-screen-xl">
      <Card
        style={{
          width: 370,
        }}
        cover={<img className="lg:h-80 md:h-80" alt="example" src={home} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
};

export default ProjectCards;
