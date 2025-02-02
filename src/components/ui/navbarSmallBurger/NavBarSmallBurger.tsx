import { useState } from "react";

export interface INavBarSmallBurger {
  sampleTextProp: string;
}

const NavBarSmallBurger: React.FC<INavBarSmallBurger> = () => {
  const [burger, setBurger] = useState(false);

  return (
    <div className="visible sm:hidden flex items-center justify-end">
      <div
        className="px-4 cursor-pointer font-bold text-4xl"
        onClick={() => setBurger(!burger)}
      >
        &equiv;
      </div>
      {burger ? (
        <div className="absolute top-1/4 w-4/6">
          <div className="cursor-pointer py-4 text-2xl font-semibold">Lorem</div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">ipsum</div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">dolor</div>
          <div className="cursor-pointer py-4 text-2xl font-semibold">sit</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBarSmallBurger;
