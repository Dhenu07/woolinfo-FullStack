import React from "react";
import Shop from "./shop";
import '../styles/buywool.css';
// import axios from 'axios';
import WoolBuyList from "../../components/woolbuylist";
import { useState,useEffect } from "react";
export default function Buywool(){
    const [forms, setForms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/forms')
            .then(response => response.json())
            .then(data => setForms(data))
            .catch(error => console.error('Error fetching forms:', error));
    }, []);
    // console.log(image1);
    return(
        <><Shop activeItem="1"></Shop>
        <div className="product_list">
        <div className="product_head">
        <h3>Fresh Wools</h3>
        </div>
         <div className="product_inlist">
                {forms.map(form => (
                    <WoolBuyList
                    //    key={form.id}
                         wools={form.wools}
                         available={form.available}
                         cost={form.cost}
                       length={form.length}
                      Vm={form.Vm}
                       Micorns={form.Microns}
                      Country={form.Country}
                        Address={form.Address}
                        PostalCode={form.PostalCode}
                       Email={form.Email}
                        Phone={form.Phone}
                     farmname={form.farmname}
                     description={form.description}
                     image={form.image}
                    />
                ))}
         </div>
        </div>
        </>
    );
}