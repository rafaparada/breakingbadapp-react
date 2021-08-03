import React from 'react';
const BBCardPersonaje = ({info:{nombre,birthday,apodo,estado,img}}) =>{
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Fecha Nacimiento: {birthday}</p>
                    <p className="card-text">Apodo: {apodo}</p>
                    <p className="card-text">Estado: {estado}</p>
                </div>
            </div>
        </>
    );
}

export default BBCardPersonaje;