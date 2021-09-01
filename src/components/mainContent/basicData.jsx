import React from "react";
import "./style.css";

const BasicData = ({ addgigs, setAddGigs, pages, setPages}) => {
  return (
    <div className="py-3 ">
      <div className="row">
        <div className="mb-3 col-md-3">
          <div className="px-3 py-3 addGigSideContainer">
            <h5 className="py-2 GigLink">
              <i
                className="far fa-circle me-2"
                style={{
                  color: "#E18700",
                  fontSize: "8px",
                  fontWeight: "bold",
                }}
              ></i>{" "}
              Basic Data
            </h5>
            <h5 onClick={() => setAddGigs(!addgigs)} className="py-2 GigLinknon ms-3">Renumeration</h5>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-4 py-5 addGigMainContainer">
            <form className="form-group">
              <div class="row">
                <div className="mb-3 col-md-6">
                  <label className="mb-2 labelText">Role</label>
                  <input
                    type="text"
                    className="form-control inputcontrol1"
                    placeholder="Product Designer"
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-6">
                  <label className="mb-2 labelText">Company</label>
                  <input
                    type="text"
                    className="form-control inputcontrol1"
                    placeholder="TM30"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div className="col-md-6">
                  <label className="mb-2 labelText">Location</label>
                  <select id="inputState" class="form-select selectcontrol" style={{color: '#E5E5E5 !important'}}>
                    <option selected >Country</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="mb-2 text-light labelText">role</label>
                  <select id="inputState" class="form-select selectcontrol">
                    <option selected>State/City</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 col-12">
                <input type="text" class="form-control addressText" id="inputAddress2" placeholder="Address"/>
            </div>
            <div className="mt-3 col-12 ">
                  <label className="mb-2 labelText">Add tags</label>
                  <div className="px-3 py-3 tagsection">
                    <span className="px-3 py-2 removetext">Remove <i className="fas fa-times ps-2"></i></span>
                    <input type="text"  placeholder="Add more tags" className="form-control taginput w-50"/>
                  </div>
                  <div className="mt-3">
                    <span className="sugest-tag ">Suggested tags: </span><span className="sug-tags me-2">fulltime</span><span className="sug-tags me-2">Contract</span><span className="sug-tags ">freelance</span>
                  </div>

            </div>
            <div className="mt-3 col-12 text-end">
                      <span onClick={() => setPages(!pages)} className="cancel-text me-3">Cancel</span> <span onClick={() => setAddGigs(!addgigs)} className="px-3 py-2 continue-btn text-light">Continue</span>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicData;
