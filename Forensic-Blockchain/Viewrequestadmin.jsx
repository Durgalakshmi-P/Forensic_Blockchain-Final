import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Viewrequestadmin = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [value, setvalue] = useState([]);

  const id = window.localStorage.getItem("id");
  useEffect(() => {
    axios
      .post("http://localhost:5000/forenics/caserequestapprove")
      .then((response) => {
        setData(response.data);
        setvalue(response.data);
      });
  }, []);

  const searchdata = (e) => {
    const r = [];

    for (var k of value) {
      var v = 0;

      for (var n of k) {
        n = "" + n;
        if (n.toLowerCase().indexOf(e) !== -1) {
          v = 1;
          break;
        }
      }
      if (v === 1) {
        r.push(k);
      }
    }
    setData(r);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.livelaw.in/h-upload/2022/09/26/1500x900_436574-forensic-evidence-and-right-to-privacy.jpg')",
        height: "100vh",
      }}
    >
      <Nav />
      <h3 style={{ color: "white", textAlign: "center" }}>View Case</h3>
      <input
        type="search"
        onChange={(e) => searchdata(e.target.value)}
        className="form-select"
        placeholder="Search"
      />
      <div className="table-responsive">
        <table className="table table-bordered" id="table_id">
          <thead>
            <tr>
              {/* <th>keyvalue</th> */}
              <th>Rid</th>
              <th>Caseid</th>
              <th>Approve</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d[0]}>
                  <td>{d[0]}</td>
                  <td>{d[1]}</td>
                  <td>
                    {d[2] === 0 ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          axios
                            .post("http://localhost:5000/forenics/approverequest", {
                              id: d[0],
                              approve:1
                            })
                            .then((response) => {
                                alert("approved")
                                axios
                                .post("http://localhost:5000/forenics/caserequestapprove")
                                .then((response) => {
                                  setData(response.data);
                                  setvalue(response.data);
                                });
                            });
                        }}
                      >
                        Approve
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                  <td>
                    {d[2] === 0 ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          axios
                            .post("http://localhost:5000/forenics/approverequest", {
                              id: d[0],
                              approve:-1
                            })
                            .then((response) => {
                                alert("rejected")
                                axios
                                .post("http://localhost:5000/forenics/caserequestapprove")
                                .then((response) => {
                                  setData(response.data);
                                  setvalue(response.data);
                                });
                            });
                        }}
                      >
                        Rejected
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Viewrequestadmin;
