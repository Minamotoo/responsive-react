const Navbar: React.FC = () => {
  return (
    <>
      <div className="lg:hidden flex absolute flex-col bg-amber-500 w-60 h-screen gap-y-4 p-4">sdf</div>
      <div className="hidden lg:flex px-4 h-20 w-full items-center gap-x-4">
        <span>Home</span>
        <span>Products</span>
        <span>Contact Us</span>
      </div>
    </>
  );
};

export default Navbar;

