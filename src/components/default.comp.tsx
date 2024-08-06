import { InfoCircle } from "iconsax-react";

export const DefaultComp = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[400px] gap-3">
      <InfoCircle variant="Bold" color="#9A2333" size={35} />
      <span className="text-[#666666]">Click on any of the countries to view more details</span>
    </div>
  );
};
