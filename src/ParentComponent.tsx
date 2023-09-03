import { useState } from 'react';
import Map from './Map';
import axios from 'axios';
import ProductList from './ProductList'
import './ParentComponent.css'

function ParentComponent(){
    const [nettos, setNettos] = useState([]); 
    const [center, setCenter] = useState({ lng: 10.203921,lat: 56.202939  }); 
    const [currentStore,setCurrentStore] = useState(null);
    
    
    axios.get(`https://api.sallinggroup.com/v2/stores?brand=netto&country=DK&geo=${center.lat}%2C${center.lng}&page=1&per_page=10&radius=3`,{
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SALLING_API_KEY}`
      }}).then(response => {
        setNettos(response.data);
     })

    
    return(
        <div className="grid-container">
            <div className="left-column">
                <Map 
                    nettos={nettos} 
                    setCenter={setCenter} 
                    center={center}
                    currentStore={currentStore}
                    setCurrentStore={setCurrentStore}/>
            </div>

            <div className="right-column" >
                {!currentStore ? (<p className="explaination">Click on any shop logo in the map to see the expiring foods in that shop. </p>):null}
                <ProductList currentStore={currentStore}/>
            </div>

        </div>
    )
}

export default ParentComponent;