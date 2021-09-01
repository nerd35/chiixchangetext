import React from 'react'
import { GigsCategoryContainer, GigsCategoryColumn, GigsText, GigsCategoryActiveColumn, GigsActiveText} from './main.element'
import Keyword from '../../assets/keywordicon.png'
import Location from '../../assets/locationicon.png'
import Design from '../../assets/designicon.png'
import Contact from '../../assets/contacticon.png'
import Remote from '../../assets/remoteicon.png'

const GigsCategory = () => {
    return (
        <>
        <div className="d-none d-xl-block">
        <GigsCategoryContainer className="px-5 py-5 row ">
            <GigsCategoryColumn className="px-2 text-center me-3 col-md-2">
                <GigsText className="mt-3">
                Freelance
                </GigsText>
            </GigsCategoryColumn>
            <GigsCategoryColumn className="px-2 col-md-2 me-3">
                <GigsText className="mt-3 ">
                <img src={Keyword} alt="" className="pe-2"/>
                Keywords
                <i className="fas fa-angle-down ms-5"></i>
                </GigsText>
            </GigsCategoryColumn>
            <GigsCategoryColumn className="px-2 col-md-2 me-3">
                <GigsText className="mt-3 ">
                <img src={Location} alt="" className="pe-2"/>
                Location &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-angle-down ms-5"></i>
                </GigsText>
            </GigsCategoryColumn>
            <GigsCategoryActiveColumn className="px-2 col-md-2 me-3">
                <GigsActiveText className="mt-3">
                <img src={Design} alt="" className="pe-2"/>
                Design &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-check ms-5"></i>
                </GigsActiveText>
            </GigsCategoryActiveColumn>
            <GigsCategoryColumn className="px-2 col-md-2 me-3">
                <GigsText className="mt-3">
                <img src={Contact} alt="" className="pe-2"/>
                Contact
                </GigsText>
            </GigsCategoryColumn>
            
        </GigsCategoryContainer>
        </div>
        <div className="px-5 py-5 d-block d-xl-none" >
        
            <div class="dropdown">
                <button class="btn btn-transparent  text-warning text-start w-100" style={{outline: 'none', borderRadius: '10px', color: '#E18700', border: '2px solid #EEEEEE'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={Design} alt="" className="me-2"/>
                Design
                </button>
                <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                
                    <li><span class="dropdown-item" > Freelance</span></li>
                    <li><span class="dropdown-item" ><img src={Keyword} alt="" className="me-2"/> Keyword</span></li>
                    <li><span class="dropdown-item" ><img src={Location} alt="" className="me-2"/>
                Location</span></li>
                <li><span class="dropdown-item" ><img src={Remote} alt="" className="me-2"/>
                Remote Friendly</span></li>
                    <li><span class="dropdown-item" style={{color: '#E18700'}} ><img src={Design} alt="" className="me-2"/>
                Design</span></li>
                <li><span class="dropdown-item" ><img src={Contact} alt="" className="me-2"/>
                Contact</span></li>
                </ul>
                </div>
        </div>
        </>
    )
}

export default GigsCategory
