import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../Hooks/Api";




const UpDate = ()=>{

    const [producto,setProducto] = useState({});

    const {id} = useParams();

    const api = Api();

    useEffect(()=>{
        api.get(`/productos/${id}`)
        .then(response =>{
            setProducto(response.data[0]);
        })
        .catch(error => console.log(error))
    },[])


    // const [data, setData] = useState({
    //     producto_stock:"",
    //     producto_name:"",
    //     producto_description:"",
    //     precio:"",
    //     producto_active:""
    // });
    

    return(
        <div>
            
            <h1>Update{producto.prodcuto_name}</h1>

            <form>
                Stock: <input
                type="text" 
                name="producto_stock"
                value={producto.producto_stock}
                  /> <br /><br />
                Producto: <input 
                type="text" 
                name="producto_name"
                value={producto.producto_name}
                 /> <br /><br />
                Description: <input 
                type="text" 
                name="producto_description"
                value={producto.producto_description}
                 /> <br /><br />
                Precio: <input 
                type="text" 
                name="precio"
                value={producto.precio}
                 /> <br /><br />
                Active: <input 
                type="text" 
                name="producto_active"
                value={producto.producto_active}
                 /> <br /><br />
            </form>

            <button >update</button>

            <Link to="/productos">Back to Home</Link>
        </div>
    )



};

export default UpDate;