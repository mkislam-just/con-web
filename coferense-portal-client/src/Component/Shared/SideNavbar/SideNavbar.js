import SideBarMain from "./SideBarMain"
import items from "../../../asset/FakeData/SideNavbar.json"
import { Link } from "react-router-dom";


export default function SideNavbar() {
  // const { loggedUser, logOut } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <section>
        <div class="dropdown px-2 my-3">
          <i className='bi bi-person-plus ms-2'></i>
          <span
            class="dropdown-toggle ms-1 p-2"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Customize Page
          </span>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link class="dropdown-item" to="admin/customize-homepage">Customize HomePage</Link>
            </li>
            <li>
              <Link class="dropdown-item" to="/admin/customize-date">Customize Date</Link>
            </li>
            <li>
              <Link class="dropdown-item" href="#">Something else here</Link>
            </li>
          </ul>
        </div>
      </section>
      {items.map((item, index) => <SideBarMain key={index} item={item} />)}


    </div>
  )
}
