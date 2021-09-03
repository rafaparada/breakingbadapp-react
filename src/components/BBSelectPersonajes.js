import BBCardPersonaje from './BBCardPersonaje';
import useAllPersonajes from '../hooks/useAllPersonajes';
import useOnePersonaje from '../hooks/useOnePersonaje';
import Loading from './Loading';
const BBSelectPersonajes = () =>{
    const {data,loading}= useAllPersonajes();
    const {state:{data1},changeIdPersonaje,loading1}=useOnePersonaje();
    const setIdPersonaje = e =>{
        changeIdPersonaje(e.target.value);
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 text-center mt-4">
                        <h2>PERSONAJES DE BREAKING BAD</h2>
                        { loading ? <Loading /> :
                            <select onChange={setIdPersonaje} className="form-select">
                                {
                                    data.map(p=>(
                                        <option value={p.id} key={p.id}>{p.nombre}</option>
                                    ))
                                }
                            </select>
                        }
                        <hr />
                        {loading1 ? <Loading /> : <BBCardPersonaje info={data1}  />}
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    );
}

export default BBSelectPersonajes;