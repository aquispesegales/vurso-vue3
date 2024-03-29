import axios from "axios";

import { defineStore } from "pinia";
import { registrarToken } from '@/composable/tokenComposable'
const api_backend = import.meta.env.VITE_API_BACKEND;

export const useLoginStore = defineStore("LoginStore", () => {
   
    //const api_icei = import.meta.env.VITE_API_ICEI;

    const autentication = async (obj) =>{
        let r =  await axios.post(`${api_backend}/auth/login`,obj);
        registrarToken(r.data.token);
        return r;
    };
    const registrar = async (obj) =>{
        console.log("ingresando  store")
        let r =  await axios.post(`http://localhost:2024/auth/register`,obj);
        return r;
    };

    return {
        autentication,registrar
      }

});