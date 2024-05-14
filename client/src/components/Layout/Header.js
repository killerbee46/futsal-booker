import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    // <>
    //   <nav className="bg-white">
    //     <div className="">
    //       <div className="" id="">
    //         <Link to="/" className="navbar-brand">
    //           <img src="/images/logo.png" alt="logo" width={200} />
    //         </Link>
    //         <ul className="">
    //           <SearchInput />
    //           <li className="">
    //             <NavLink to="/" className="nav-link ">
    //               Home
    //             </NavLink>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <Link
    //               className=" dropdown-toggle"
    //               to={"/categories"}
    //               data-bs-toggle="dropdown"
    //             >
    //               Categories
    //             </Link>
    //             <ul className="dropdown-menu">
    //               <li>
    //                 <Link className="dropdown-item" to={"/categories"}>
    //                   All Categories
    //                 </Link>
    //               </li>
    //               {categories?.map((c) => (
    //                 <li>
    //                   <Link
    //                     className="dropdown-item"
    //                     to={`/category/${c.slug}`}
    //                   >
    //                     {c.name}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </li>

    //           {!auth?.user ? (
    //             <>
    //               <li className="nav-item">
    //                 <NavLink to="/register" className="nav-link">
    //                   Register
    //                 </NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink to="/login" className="nav-link">
    //                   Login
    //                 </NavLink>
    //               </li>
    //             </>
    //           ) : (
    //             <>
    //               <li className="nav-item dropdown">
    //                 <NavLink
    //                   className="nav-link dropdown-toggle"
    //                   href="#"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   style={{ border: "none" }}
    //                 >
    //                   {auth?.user?.name}
    //                 </NavLink>
    //                 <ul className="dropdown-menu">
    //                   <li>
    //                     <NavLink
    //                       to={`/dashboard/${
    //                         auth?.user?.role === 1 ? "admin" : "user"
    //                       }`}
    //                       className="dropdown-item"
    //                     >
    //                       Dashboard
    //                     </NavLink>
    //                   </li>
    //                   <li>
    //                     <NavLink
    //                       onClick={handleLogout}
    //                       to="/login"
    //                       className="dropdown-item"
    //                     >
    //                       Logout
    //                     </NavLink>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </>
    //           )}
    //           <li className="nav-item">
    //             <NavLink to="/cart" className="nav-link">
    //               <Badge count={cart?.length} showZero offset={[5, -5]}>
    //                 <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
    //               </Badge>
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        <img src="/images/logo.png" alt="logo" width={200} />
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
