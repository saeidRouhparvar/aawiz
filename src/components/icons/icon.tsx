import clsx from "clsx";
import React, { memo } from "react";
import icons, { IconName } from "@/components/icons";

export interface IconProps {
  name: IconName;
  w?: number;
  h?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const IconComponent: React.FC<IconProps> = ({
  name,
  w,
  h,
  color = "currentColor",
  onClick,
  className,
}) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <div className={clsx("icon-wrapper", className)} onClick={onClick}>
      <SvgIcon w={w} h={h} color={color} />
    </div>
  );
};

export const Icon = memo(IconComponent);
