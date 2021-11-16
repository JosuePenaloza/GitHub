import { useState } from "react";
import { useEffect } from "react";
import { Link }  from "react-router-dom";

const Repositorios = (props) => {
    const {informacionUsuario} = props;
    const [repositorio,setRepositorio] = useState([]);
    const getRepositorio = async () => {
        const response = await fetch(`https://api.github.com/users/${informacionUsuario.login}/repos`);  
        const data = await response.json();
    
        setRepositorio([...data]);
    };

    useEffect(() => {
        getRepositorio();
      },[]);

    return (
        <div className="row">
            <div className="col-12">
                <h4>Repositorio</h4>
            </div>
            <div className="col-12">
                <Link to="/">Volver al principal</Link>
            </div>            
            <div className="col-12">
                <li key={informacionUsuario.login} className="list-group-item">
                            <img src={informacionUsuario.avatar_url} alt={informacionUsuario.login} className="img-fluid" style={{height:150}} />  
                            <span>{informacionUsuario.login}</span>                          
                            <a class="btn btn-link text-center" href={`https://github.com/${informacionUsuario.login}`} target="_blank">{`https://github.com/${informacionUsuario.login}`}</a>
                        </li>
            </div>
        </div>
    )
};

export default Repositorios;