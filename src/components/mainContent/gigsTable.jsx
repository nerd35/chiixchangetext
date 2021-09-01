import React from 'react'
import {GigTableContainer} from './main.element'
import DateIcon from '../../assets/dateicon.png'

const GigsTable = () => {
    return (
        <GigTableContainer className="px-3 mb-5">
            <table class="table table-borderless table-responsive-sm">
  <thead>
    <tr style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6"}}>
      <th scope="col"></th>
      <th scope="col" style={{color: '#514C5D', opacity: "0.5"}}>Role</th>
      <th scope="col" style={{color: '#514C5D', opacity: "0.5"}}>Company</th>
      <th scope="col" style={{color: '#514C5D', opacity: "0.5"}}>Date<img src={DateIcon} alt="" /></th>
      <th scope="col" style={{color: '#514C5D', opacity: "0.5"}}>Salary($)<img src={DateIcon} alt=""/></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr className="py-5" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    <tr className="pt-3 pb-3" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    <tr className="pt-3 pb-3" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    <tr className="pt-3 pb-3" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    <tr className="pt-3 pb-3" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    <tr className="mt-3" style={{boxShadow: "0px 3px 6px #00000003", borderBottom: "1px solid #F6F6F6", padding: " 20px 0px"}}>
      <th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></th>
      <td>Product Manager</td>
      <td>TM30</td>
      <td>20th, June 2020</td>
      <td>20,000 - 30,000</td>
      <td><span className="px-3 py-2" style={{background: "#fdf2e9", color: "#fbb30b"}}>Delete</span></td>

    </tr>
    
    
  </tbody>
</table>
        </GigTableContainer>
    )
}

export default GigsTable
