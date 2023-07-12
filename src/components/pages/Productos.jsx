import { useEffect, useState } from "react";
import Api from "../../Hooks/Api";
import { Link } from "react-router-dom";

const Productos = ()=>{

    const api = Api();

    const [producto, setProducto] = useState([]);



    useEffect(()=>{
        api.get("/productos")
        .then(response=>{
            if (response) {
                setProducto(response.data );
            }else{
                console.log("Hubo un error")
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
        //console.log(productos); 
    },[])

    return (
        <div className="container">
            <h1>Products</h1>
            <Link to="/productos/create">Crear Producto</Link>
            {
                producto.map(producto=>{
                    return <li key={producto.producto_id}><Link to={"/productos/"+producto.producto_id}>{producto.producto_name} = ${producto.precio  } <Link to={"/productos/update/"+producto.producto_id}>Update</Link></Link></li>
                })
            }


        </div>
    )

    
}

export default Productos;