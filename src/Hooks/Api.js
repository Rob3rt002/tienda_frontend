import axios from "axios";


export const Api = ()=>{

    const instance =  axios.create({
        baseURL: 'http://localhost:8000/',
        timeout: 60000,
        // headers: {
        //   "Authorization":""
        // }
      });

    const get = async (url)=>{
      // try {
      //   const respuesta = await instance.get(url);
      //   console.log(respuesta.data);
      //   return respuesta.data.data
      // } catch (error) {
      //   console.log(error)
      
      // }


      let respuesta = null;
      try {
        respuesta = await instance.get(url);
      } catch (error) {
        console.log("Error en peticion");
      }
      
      return new Promise((resolve,reject)=>{
        if (respuesta.data) {
          resolve(respuesta.data);
        } else {
          reject("error");
        }
         
      })
      
      

    }


    const post = async (url, data)=>{
      let respuesta = null;
      try {
        respuesta = await instance.post(url,data);
      } catch (error) {
        console.log("error en peticion")
      }
      return new Promise((resolve,reject)=>{
        if (respuesta?.data) {
          resolve(respuesta.data);
        } else {
          reject("error");
        }
      })
    }




    // post 

    // update 

    // delete 

    return {get, post}

}

export default Api;