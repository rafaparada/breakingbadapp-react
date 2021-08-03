import React from 'react';
const BBCardPersonaje = ({info}) =>{
    return(
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={info.img} className="card-img-top" alt={info.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{info.nombre}</h5>
                    <p className="card-text">Fecha Nacimiento: {info.birthday}</p>
                    <p className="card-text">Apodo: {info.apodo}</p>
                    <p className="card-text">Estado: {info.estado}</p>
                </div>
            </div>
        </>
    );
}

export default BBCardPersonaje;