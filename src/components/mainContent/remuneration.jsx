import React from 'react'
import "./style.css";
const Remuneration = ({addgigs, setAddGigs, pages, setPages}) => {
    return (
        <div className="py-3 ">
      <div className="row">
        <div className="mb-3 col-md-3">
          <div className="px-3 py-3 addGigSideContainer">
            <h5 onClick={() => setAddGigs(!addgigs)} className="py-2 GigLinknon ms-3">Basic Data</h5>
            <h5 className="py-2 GigLink">
              <i
                className="far fa-circle me-2"
                style={{
                  color: "#E18700",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              ></i>{" "}
              Renumeration
            </h5>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-4 py-5 addGigMainContainer">
            <form className="form-group">
              <div class="row">
                <div className="mb-3 col-md-6">
                  <label className="mb-2 labelText">Salary</label>
                  <input
                    type="text"
                    className="form-control inputcontrol1"
                    placeholder="Minimun"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="mb-2 labelText text-light">Company</label>
                  <input
                    type="text"
                    className="form-control inputcontrol1"
                    placeholder="Maximum"
                    aria-label="Last name"
                  />
                </div>
              </div>
            
            <div className="mt-3 col-12 text-end">
                      <span onClick={() => setAddGigs(!addgigs)} className="cancel-text me-3">Back</span> <span onClick={() => setPages(!pages)} className="px-3 py-2 continue-btn text-light">Add gig</span>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Remuneration
