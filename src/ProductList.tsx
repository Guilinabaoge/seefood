import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList(props:any){
    const [items,setItems] = useState([]);

    useEffect(() => {
        if(props.currentStore!=null){
            axios.get(`https://api.sallinggroup.com/v1/food-waste/${props.currentStore.id}`,{
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_SALLING_API_KEY}`
                }}).then(response => {
                    setItems(response.data.clearances);
                })
        }
    },[props.currentStore]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((item:any,index:any)=>{

                return item.product.categories?.da ?(
                    <div key={index}
                        style={{ width: '33.33%', padding: '10px' ,border: '1px solid black'}}>
                        <Product item={item}/>
                    </div>
                ) : <></>;
            
        }
        )}
        </div>    
    )
}

export default ProductList;