import { Button } from "antd";
import { ReactNode } from "react";

interface Props {
  title: string;
  color: string;
  link?: string;
  icon: ReactNode;
  iconPosition?: string;
}
const ButtonComponent = (params: Props) => {
  const { title, color, link, icon, iconPosition } = params;
  return (
    <Button
      htmlType="submit"
      href={link}
      className='bg-primaryGreen hover:bg-primaryGreen border-none rounded-lg text-white p-5 font-extrabold text-sm '
    >
      {iconPosition === "left" && icon}
      {title}
      {iconPosition !== "left" && icon}
    </Button>
  );
};

export default ButtonComponent;
