import {Link}  from "react-router-dom";

const InformacionUsuario = (props) => {
    const {informacionUsuario} = props;    

    return (
        <div className="row">
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-center">
                    <div className="card">                                              
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <img src={informacionUsuario.avatar_url} className="img-fluid" alt={informacionUsuario.login} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <h3>{informacionUsuario.name}</h3>
                                    <h5>{informacionUsuario.login}</h5>
                                    <h6>Seguidos <span className="badge bg-secondary">{informacionUsuario.following}</span></h6>
                                    <Link to="/Repositorios">
                                        <h6>Repositorios <span className="badge bg-secondary">{informacionUsuario.public_repos}</span></h6>
                                    </Link> 
                                    <Link to="/seguidores">
                                        <h6>Seguidores <span className="badge bg-secondary">{informacionUsuario.followers}</span></h6>
                                    </Link>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default InformacionUsuario;

