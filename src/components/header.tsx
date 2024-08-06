import { ArrowRight2, Notification } from "iconsax-react";

export const Header = () => {
  return (
    <header className="z-[999] sticky top-0 flex justify-center bg-white">
      <div className="md:py-5 py-2 top-0 md:px-20 px-4 flex justify-between items-center w-full border-b-2 border-b-gray-200">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-xl">LOGO</h4>
        </div>
        <div className="flex items-center gap-5">
          <span>
            <Notification size={24} />
          </span>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h6>FirstName LastName</h6>
              <small className="text-gray05">Business Owner</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
