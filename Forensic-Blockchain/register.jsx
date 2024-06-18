import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [addresss, setaddresss] = useState("");
  const [keydata, setkeydata] = useState("");
  const [role, setrole] = useState("Police");
  const [areacode, setareacode] = useState(1);
  const [value, setvalue] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:5000/forenics/viewarea").then((response) => {
      setvalue(response.data);
    });
  }, []);
  console.log(value);
  const submitdata = () => {
    if(name!=="" &&  email !=="" && password!=="" )
    {
    const value = {
      name: name,
      email: email,
      password: password,
      addresss: addresss,
      keydata: keydata,
      role: role,
      areacode: areacode,
    };
    axios
      .post("http://localhost:5000/forenics/insertusers", value)
      .then((res) => {
        alert("success");
        setname("");
        setemail("");
        setpassword("");
        setaddresss("");
        setkeydata("");
      }); 
    }
    else{
      alert("check details") 
    }
    
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ytimg.com/vi/1s1HGc3KJEE/maxresdefault.jpg')",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "green",
          color: "black",
          textAlign: "center",
          marginLeft: "25%",
          position: "relative",
          top: "5%",
          borderRadius: "50px",
        }}
      >
        <h1>Register users</h1>
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setname(e.target.value)}
            value={name}
            placeholder="Enter name"
          />
          <label htmlFor="name">name</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter email"
          />
          <label htmlFor="email">email</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="password"
            className="form-control"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Enter password"
          />
          <label htmlFor="password">password</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setaddresss(e.target.value)}
            value={addresss}
            placeholder="Enter addresss"
          />
          <label htmlFor="addresss">addresss</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setkeydata(e.target.value)}
            value={keydata}
            placeholder="Enter keydata"
          />
          <label htmlFor="keydata">keydata</label>
        </div>
        <div className="form-floating mb-3 mt-3">
        <select
          class="form-select"
          onChange={(e) => setareacode(e.target.value)}
          value={areacode}
        >
          <option>Police</option>
          <option>Forensic</option>
        </select>
        <label htmlFor="keydata">role</label>
        </div>

        <div className="form-floating mb-3 mt-3">
        <select
          class="form-select"
          onChange={(e) => setareacode(e.target.value)}
          value={areacode}
        >
          {value.map((v) => {
            return (
              <option value={v[0]}>
                {v[1]}-{v[2]}
              </option>
            );
          })}
        </select>
        <label htmlFor="keydata">Area</label>
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          onClick={submitdata}
          style={{ width: "100%" }}
        />
        <NavLink to="/" style={{ backgroundColor: "white" }}>
          Login
        </NavLink>
      </div>
    </div>
  );
};
export default Register;
