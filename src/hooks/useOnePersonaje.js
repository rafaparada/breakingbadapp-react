import {useState,useEffect} from 'react';
import BBGetPersonajeById from '../helpers/BBGetPersonajeById';
const useOnePersonaje = () =>{
    const [state,setState] = useState({
        data1:[],
    }); 
    const [idPersonaje,setIdpersonaje] = useState(1);
    const [loading1,setLoading] = useState(true);
    useEffect(()=>{
        if(idPersonaje !== null){
        setLoading(true);
        BBGetPersonajeById(idPersonaje).then(personaje=>{
            setState(
                {
                data1:personaje,
                } 
            )
            setLoading(false);
            });
        }
    },[idPersonaje]);

    const changeIdPersonaje = (id) =>{
        setIdpersonaje(id);
    }

    return {state,changeIdPersonaje,loading1};
}

export default useOnePersonaje;