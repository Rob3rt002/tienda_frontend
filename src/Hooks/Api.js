import axios from "axios";


export const Api = ()=>{

    const instance =  axios.create({
        baseURL: 'http://localhost:8000/',
        timeout: 60000,
        headers: {
          "Authorization":""
        }
      });

    const get = async (url)=>{
        // instance.get(url)
        // .then(data=>{

        // })
        // .catch(error=>{

        // })

        const respuesta = await instance.get(url);
        console.log(respuesta.data);
    }

    // post 

    // update 

    // delete 

    return {get}

}

export default Api;