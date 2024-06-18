import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";
const Addarea = () => {
  const [area, setarea] = useState("");
  const [pincode, setpincode] = useState("");
  const submitdata = () => {
    const value = { area: area, pincode: pincode };
    axios
      .post("http://localhost:5000/forenics/insertarea", value)
      .then((res) => {
        alert("success");
        setarea("");
        setpincode("");
      });
  };
  return (
    <>
      <Nav />
      <div
        style={{
          backgroundImage:
            "url('https://www.livelaw.in/h-upload/2022/09/26/1500x900_436574-forensic-evidence-and-right-to-privacy.jpg')",
          height: "100vh",
        }}
      >
        <div  style={{
            width: "50%",
            backgroundColor: "green",
            color: "black",
            textAlign: "center",
            marginLeft: "25%",
            position: "relative",
            top: "25%",
            borderRadius: "50px",
          }}>
          <h1>Add area</h1>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setarea(e.target.value)}
              value={area}
              placeholder="Enter area"
            />
            <label htmlFor="area">area</label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setpincode(e.target.value)}
              value={pincode}
              placeholder="Enter pincode"
            />
            <label htmlFor="pincode">pincode</label>
          </div>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={submitdata}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </>
  );
};
export default Addarea;
