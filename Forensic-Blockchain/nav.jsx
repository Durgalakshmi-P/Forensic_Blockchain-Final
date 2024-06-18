import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const nav = useNavigate();
  const role = JSON.parse(window.localStorage.getItem("data"))[6];
  const check = () => {
    if (role === "admin") {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewdata">
              View File
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewarea">
              View Area
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addarea">
              Add Area
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/adddata">
              Upload Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewusers">
              View Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewcase">
              View case
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewrequestadmin">
              View case Request
            </NavLink>
          </li>
        </>
      );
    } else if (role === "Police") {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewdatabyid">
              View File
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Viewdatacasebyid">
              View case
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reqcasedetails">
              Request case details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewrequestcase">
              Veiw Approved case
            </NavLink>
          </li>

        </>
      );
    } else if (role === "Forensic") {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewdatabyid">
              View File
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/adddatauser">
              Upload Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Viewdatacasebyid">
              View case
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reqcasedetails">
              Request case details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/viewrequestcase">
              Veiw Approved case
            </NavLink>
          </li>
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {check()}

            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  axios
                    .post("http://localhost:5000/forenics/endofall")
                    .then((res) => {
                      nav("/");
                    });
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
