import NavLogo from "./NavLogo";
import NavItems from "./NavItems";


const Navbar = () => {
    return (
        <div className="py-5">
            <nav className="md:flex justify-between items-center">
                <NavLogo></NavLogo>
               <NavItems></NavItems>
            </nav>
        </div>
    );
};

export default Navbar;