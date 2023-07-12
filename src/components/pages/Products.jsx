import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Hooks/Api";

const Product = ()=>{
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const api = Api();

    useEffect(() => {
         api.get(`/productos/${id}`).then((product) => setProduct(product));
    },[])

    return (
        <div className="container">
            <h1>Products</h1>
            <h2>{product?.[0]?.producto_name || "No existe producto"}</h2>
        </div>
    )
}

export default Product;