import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../Hooks/Api";



const ProductoView = ()=>{

    const [product,setProduct] = useState([]);

    const {id} = useParams();

    const api = Api();

    useEffect(()=>{
        api.get(`/productos/${id}`)
        .then(response =>{
            setProduct(response.data[0 ]);
        })
        .catch(error => console.log(error))
    },[])

    return(
        <div className="container">
            <h1>
                Su producto - {product.producto_name}
            </h1>
            <div>
                <dt>Nombre</dt>
                <dd>{product.producto_name}</dd>
                <dt>Description</dt>
                <dd>{product.producto_description}</dd>
                <dt>Price</dt>
                <dd>{product.precio}</dd>
            </div>

            <Link to="/productos">Back to Home</Link>
        </div>
    )

}

export default ProductoView;