import SideBarMain from "./SideBarMain"
import items from "../../../asset/FakeData/SideNavbar.json"
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


export default function SideNavbar() {
  const { loggedUser, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    if (loggedUser.email) {
      logOut()
      .then(()=>{})
      .catch(error =>{
          console.log(error);
      })
    }
  }
  return (
    <div className="sidebar">
      {items.map((item, index) => <SideBarMain key={index} item={item} />)}
      <div onClick={
        handleLogOut
      }
        className="px-2 d-flex align-items-center" >
          <i className='bi bi-person-dash'></i>
        <span className="m-0 p-2"> <Link to='/login' className='sidebar-item plain'>{loggedUser?.email ? 'LogOut' : "LogIn"}</Link> </span>
      </div>
    </div>
  )
}
