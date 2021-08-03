import { useState,useEffect } from "react";
import BBGetPersonajes from "../helpers/BBGetPersonajes";

const useAllPersonajes = () =>{
    const [state,setState] = useState(
        {
            data:[],
            loading:true,
        }
    );
    useEffect(()=>{
        BBGetPersonajes().then(personajes=>{
            setState(
                {
                    data:personajes,
                    loading:false,
                }
            );
        });
    },[]);

    return state;
       
    
}

export default useAllPersonajes;