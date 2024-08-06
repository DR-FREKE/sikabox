import React from "react";
import { clsx } from "clsx";

type ButtonPropsType = {
  name?: string;
  onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: JSX.Element;
  className?: string;
};

export const AppButton = ({
  name,
  onPress,
  icon,
  className,
}: ButtonPropsType) => {
  return (
    <button
      className={clsx(
        `py-2 px-5 cursor-pointer rounded-md disabled:bg-opacity-50 flex items-center justify-center bg-white shadow-md text-black`,
        className
      )}
      onClick={onPress}
    >
      {icon} {name}
    </button>
  );
};
