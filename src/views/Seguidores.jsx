import { useState } from "react";
import { useEffect } from "react";
import { Link }  from "react-router-dom";

const Seguidores = (props) => {
    const {informacionUsuario} = props;
    const [seguidores,setSeguidores] = useState([]);
    const getSeguidores = async () => {
        const response = await fetch(`https://api.github.com/users/${informacionUsuario.login}/followers`);  
        const data = await response.json();
    
        setSeguidores([...data]);
    };

    useEffect(() => {
        getSeguidores();
      },[]);

    return (
        <div className="row">
            <div className="col-12">
                <h4>Seguidores</h4>
            </div>
            <div className="col-12">
                <Link to="/">Volver al principal</Link>
            </div>            
            <div className="col-12">
                <ul className="list-group">
                    {seguidores.map( seguidor => 
                        <li key={seguidor.login} className="list-group-item">
                            <img src={seguidor.avatar_url} alt={seguidor.login} className="img-fluid" style={{height:150}} />  
                            <span>{seguidor.login}</span>                          
                            <a class="btn btn-link text-center" href={`https://github.com/${seguidor.login}`} target="_blank">{`https://github.com/${seguidor.login}`}</a>
                        </li>
                        )}
                </ul>
            </div>
        </div>
    )
};

export default Seguidores;