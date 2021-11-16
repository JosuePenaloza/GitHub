import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Swal from 'sweetalert2';
import FormularioUsuarios from './Formularios';
import InformacionUsuario from "./InformacionUsuario";
import Repositorios from "./Repositorios";
import Seguidores from "./Seguidores";


const Principal = () => {
    const [informacionUsuario,seInformacionUsuario] = useState(null);
    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    const setUsuario = async ({usuario}) => {       
        if(usuario != null && usuario != "" ) {
            const response = await fetch(`https://api.github.com/users/${usuario}`);  
            const data = await response.json();

            seInformacionUsuario(data);
            setMostrarInformacion(true);
        }else {
          alert("Usuario no encontrado")  
           
            seInformacionUsuario(null);
            setMostrarInformacion(false);
        }
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <header>
              <div className="row">
                <div className="col-12">
                  <h3 className="text-center">Buscandor Github</h3>
                </div>
              </div>
              <FormularioUsuarios setUsuario={setUsuario} />
            </header>
          </div>
        </div>
        <hr/>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BrowserRouter>
                <Routes>
                    { mostrarInformacion ? <Route path="/" exact element={<InformacionUsuario informacionUsuario={informacionUsuario} />}/> : null }
                    { mostrarInformacion ? <Route path="/Repositorios" exact element={<Repositorios informacionUsuario={informacionUsuario} />}/> : null }
                    { mostrarInformacion ? <Route path="/seguidores" element={<Seguidores informacionUsuario={informacionUsuario} />}/> : null }
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Principal;