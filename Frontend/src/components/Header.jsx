import React from "react";
import { useAuthContext } from "../context/authContext";
import useLogout from "../hooks/useLogout";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  const nav = useNavigate()
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a onClick={()=>(nav("/home"))} className="btn text-xl">Civic Connect</a>
      </div>
      <div className="flex-none gap-2">
        <button onClick={()=>{nav("/home/post")}} className=" mx-4">Post</button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={avatar} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <button onClick={()=>(nav("/home/profile"))}>
              <a className="justify-between">Profile</a>
            </button>
            </li>
            

            <li>
              <button className="text-red-700 " onClick={() => logout()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
