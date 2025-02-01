import NavBar from "@/components/ui/navbar/NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar sampleTextProp={"LOGO"} />
      {children}
    </>
  );
};

export default Layout;
