import { Avatar } from "@mui/material";
import React, { useEffect, useState, FC } from "react";

// Define prop types using an interface
interface HeaderIconProps {
  id: string;
  title?: string;
  Icon?: React.ComponentType<{ size?: string | number; className?: string }>;
  logo?: string;
  size?: string | number;
  style?: string;
}

// FC (Function Component) type is used for functional components
const HeaderIcon: FC<HeaderIconProps> = ({ id, title, Icon, logo, size, style }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      key={id}
      className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer"
    >
      {/* Render the icon if provided */}
      {Icon && <Icon size={size} className={style} />}
      
      {/* Render the avatar if logo exists and window width is >= 770 */}
      {logo && windowWidth >= 770 ? (
        <Avatar
          src={logo}
          style={{ objectFit: "contain", height: "25px", width: "25px" }}
        />
      ) : null}

      {/* Render the title if window width is >= 770 */}
      {windowWidth >= 770 && title && <p className={`text-xs ${style}`}>{title}</p>}
    </div>
  );
};

export default HeaderIcon;
