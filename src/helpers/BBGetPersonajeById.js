const BBGetPersonajeById = async(idP=1) =>{

    const url = 'https://www.breakingbadapi.com/api/characters/'+idP;
    const request   = await fetch(url);
    const respuesta = await request.json();
    
    const personaje = {
        id:respuesta[0]?.char_id,
        nombre:respuesta[0]?.name,
        img:respuesta[0]?.img,
        apodo:respuesta[0]?.nickname,
        birthday:respuesta[0]?.birthday,
        estado:respuesta[0]?.status,
    }

    return personaje;
    
}

export default BBGetPersonajeById;