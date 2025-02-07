import Link from "next/link";

const NavLogo: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <Link
        href="/"
        className="font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        aria-label="Homepage"
      >
        <div className="flex">
          LOGO
          <span className="text-xs text-blue-700">showcase</span>
        </div>
      </Link>
    </div>
  );
};

export default NavLogo;
