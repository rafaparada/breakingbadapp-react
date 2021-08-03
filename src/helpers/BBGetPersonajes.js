const BBGetPersonajes = async() =>{
   const url = 'https://www.breakingbadapi.com/api/characters';
   const request    = await fetch(url);
   const personajes = await request.json();

    const allPersonajes = personajes.map(personaje=>{
       const {char_id,name} = personaje;
       return {
          id:char_id,
          nombre:name,
       };
    });

   return allPersonajes;
}

export default BBGetPersonajes;