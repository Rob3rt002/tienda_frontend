import { useEffect } from "react";
import Api from "../../Hooks/Api";

const Products = ()=>{

    const api = Api();

    useEffect(()=>{
        api.get("/products");
    },[])

    return (
        <div className="container">
            <h1>Products</h1>
        </div>
    )
}

export default Products;