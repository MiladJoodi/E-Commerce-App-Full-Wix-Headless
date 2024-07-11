import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 2xl:px-64 bg-red-100 relative">
      <div className="h-full flex items-center justify-between bg-blue-100">
        {/* Mobile */}
        <Link href="/">
        <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
