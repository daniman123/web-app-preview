import Link from "next/link";
import NavBarActionButtons from "../navbarActionButtons/NavBarActionButtons";

export interface INavBar {
  sampleTextProp: string;
}

const NavBar: React.FC<INavBar> = ({ sampleTextProp }) => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all">
      <div className="w-full max-w-full">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            {sampleTextProp}
          </Link>
          <NavBarActionButtons
            navBarActionButtonsLabels={["Lorem", "Ipsum", "Dolor", "Sit"]}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
