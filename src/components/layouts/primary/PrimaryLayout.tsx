export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => {
  return <div className="">{children}</div>;
};

export default PrimaryLayout;
