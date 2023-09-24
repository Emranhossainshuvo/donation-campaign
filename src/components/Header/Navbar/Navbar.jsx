import { NavLink } from "react-router-dom";
import NavLogo from "./NavLogo";


const Navbar = () => {
    return (
        <div className="py-5">
            <nav className="flex justify-between items-center">
                <NavLogo></NavLogo>
                <ul className="flex gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;