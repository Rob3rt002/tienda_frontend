import { useState } from "react";
import Api from "../../Hooks/Api";
import { Link } from "react-router-dom";




const ProductForm =()=>{



    const api = Api();

    const [data, setData] = useState({
        producto_stock:"",
        producto_name:"",
        producto_description:"",
        precio:"",
        producto_active:""
        
    })
    
    const handleInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    // const handleForm = (event) => {
    //     event.preventDefault();
    //     console.log(data);
    // }

    // const [stock, setStock] = useState("");
    // const [Name, setName] = useState("");
    // const [lastName, setEmail] = useState("");
    // const [precio, setPrecio] = useState("");

    const submit = ()=>{
        console.log("enviando");
        api.post("/productos",data)
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{console.log(error)
        })
    };


    



    return(
        <>
            
            <h1>Create</h1>

            <form action="../../Hooks/Api" method="post" >
                Stock: <input
                 type="text" 
                 name="producto_stock"
                 onChange={handleInputChange} /> <br /><br />
                Producto: <input 
                type="text" 
                name="producto_name"
                onChange={handleInputChange} /> <br /><br />
                Description: <input 
                type="text" 
                name="producto_description"
                onChange={handleInputChange} /> <br /><br />
                Precio: <input 
                type="text" 
                name="precio"
                onChange={handleInputChange} /> <br /><br />
                Active: <input 
                type="text" 
                name="producto_active"
                onChange={handleInputChange} /> <br /><br />
            </form>

            <button onClick={submit}>Enviar formulario</button> <br />

            <Link to="/productos">Back to Home</Link>
        </>
    );
}

export default ProductForm;