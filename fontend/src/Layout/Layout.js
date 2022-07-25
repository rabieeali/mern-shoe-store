const Layout = ({ children }) => {
  const style = {
    minHeight: "100vh",
  };
  return (
    <div style={style} className="d-flex flex-column justify-content-between">
      {children}
    </div>
  );
};

export default Layout;
