import '../estilos/mystyles.css';
const BBCardPersonaje = ({info:{nombre,birthday,apodo,estado,img}}) =>{
    return(
        <>
            <div className="mycard">
                <div className="mycard-side front">
                    <div>
                        <img src={img} className="myimg" alt={nombre} />
                    </div>
                </div>
                <div className="mycard-side back">
                    <div>
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">Fecha Nacimiento: {birthday}</p>
                        <p className="card-text">Apodo: {apodo}</p>
                        <p className="card-text">Estado: {estado}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BBCardPersonaje;