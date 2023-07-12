import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../Hooks/Api";




const UpDate = ()=>{

    const [producto,setProducto] = useState({});

    const [stock,setStock] = useState(0)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [precio,setPrecio] = useState(0)
    const [active,setActive] = useState(0)

    const {id} = useParams();

    const api = Api();

    useEffect(()=>{
        api.get(`/productos/${id}`)
        .then(response =>{
            setProducto(response.data[0]);
            setStock(response.data[0].producto_stock);
            setName(response.data[0].producto_name);
            setDescription(response.data[0].producto_description);
            setPrecio(response.data[0].precio);
            setActive(response.data[0].producto_active);
            
        })
        .catch(error => console.log(error))
    },[])

    const submit = ()=>{
        console.log("enviando")
        // console.log(
        //     {
        //         producto_stock:stock,
        //         producto_name:name,
        //         producto_description:description,
        //         precio:precio,
        //         producto_active:active
        //     }
        // )
        api.update(`/productos/${id}`,{
            producto_stock:stock,
            producto_name:name,
            producto_description:description,
            precio:precio,
            producto_active:active
        })
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{console.log(error)
        })
    };




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
                defaultValue={producto.producto_stock}
                onChange={(e) => setStock(e.target.value)}
                  /> <br /><br />
                Producto: <input 
                type="text" 
                name="producto_name"
                defaultValue={producto.producto_name}
                onChange={(e) => setName(e.target.value)}
                 /> <br /><br />
                Description: <input 
                type="text" 
                name="producto_description"
                defaultValue={producto.producto_description}
                onChange={(e) => setDescription(e.target.value)}
                 /> <br /><br />
                Precio: <input 
                type="text" 
                name="precio"
                defaultValue={producto.precio}
                onChange={(e) => setPrecio(e.target.value)}
                 /> <br /><br />
                Active: <input 
                type="text" 
                name="producto_active"
                defaultValue={producto.producto_active}
                onChange={(e) => setActive(e.target.value)}
                 /> <br /><br />
            </form>

            <button onClick={submit} >update</button>

            <Link to="/productos">Back to Home</Link>
        </div>
    )



};

export default UpDate;