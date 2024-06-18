import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./Nav";
const Requestcase = () => {
  const [caseid, setcaseid] = useState("");
  const data = JSON.parse(window.localStorage.getItem("data"));

  const [value, setvalue] = useState([]);
  const id = window.localStorage.getItem("id");
  useEffect(() => {
    axios.post("http://localhost:5000/forenics/casewise").then((response) => {
      const flatArray = response.data.flat();
      setvalue(flatArray);
    });
  }, []);
  console.log(value)
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
        <div
          style={{
            width: "50%",
            backgroundColor: "green",
            color: "black",
            textAlign: "center",
            marginLeft: "25%",
            position: "relative",
            top: "25%",
            borderRadius: "50px",
          }}
        >
          <h1>Request Access</h1>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setcaseid(e.target.value)}
              value={caseid}
              placeholder="Enter caseid"
            />
            <label htmlFor="caseid">caseid</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              if (value.includes(caseid)) {
                axios
                  .post("http://localhost:5000/forenics/requestforcase", { caseid: caseid,userid:id })
                  .then((response) => {
                    alert("request success")
                    setcaseid("")
                  });
              }
              else
              {
                alert("wrong case id")
              }
            }}
          
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};
export default Requestcase;
