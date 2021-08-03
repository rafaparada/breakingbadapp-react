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
            <h2>PERSONAJES DE BREAKING BAD</h2>
            <br /><br/>
            { loading ? <Loading /> :
            <select onChange={setIdPersonaje} className="form-control">
                {
                    data.map(p=>(
                        <option value={p.id} key={p.id}>{p.nombre}</option>
                    ))
                }
            </select>
            }
            <hr />
           {loading1 ? <Loading /> : <BBCardPersonaje info={data1}  />}
        </>
    );
}

export default BBSelectPersonajes;