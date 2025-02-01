export interface INavBarActionButtons {
  navBarActionButtonsLabels: string[];
}

const NavBarActionButtonWrapper = ({ label }: { label: string }) => {
  return (
    <div className="hidden w-full min-w-20 md:flex items-center justify-center px-2 rounded cursor-pointer hover:bg-slate-100 duration-300 ease-in-out">
      <div className="font-semibold">{label}</div>
    </div>
  );
};

const NavBarActionButtons: React.FC<INavBarActionButtons> = ({
  navBarActionButtonsLabels,
}) => {
  return (
    <div className="w-1/4 flex items-center justify-between">
      {navBarActionButtonsLabels.map((val, i) => (
        <NavBarActionButtonWrapper key={i} label={val} />
      ))}
    </div>
  );
};

export default NavBarActionButtons;
