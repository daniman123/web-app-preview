import { useState } from "react";

export interface INavBarSmallBurger {
  sampleTextProp: string;
}

const NavBarSmallBurger: React.FC = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div className="visible sm:hidden flex items-center justify-end">
      <div
        className="relative px-4 cursor-pointer font-bold text-4xl"
        onClick={() => setBurger((value) => !value)}
      >
        &equiv;
      </div>
      {burger ? (
        <div className="absolute top-16 w-4/6">
          <div className="cursor-pointer py-4 text-2xl font-semibold">
            Lorem
          </div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">
            ipsum
          </div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">
            dolor
          </div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">sit</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBarSmallBurger;
