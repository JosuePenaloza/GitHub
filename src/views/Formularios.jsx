import useFormulario from "../hooks/useFormulario";

const FormularioUsuarios = ({setUsuario}) => {
    const [formulario, handleChange, reset] = useFormulario({ usuario: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsuario(formulario);
        reset();
    }

    return (
        <div className="row">
            <div className="col-12 col-md-4"></div>
            <div className="col-12 col-md-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="txtUsuario" className="form-label">Usuario:</label>
                        <input 
                        id="txtUsuario"
                        name="usuario" 
                        type="text"
                        className="form-control"
                        placeholder="Usuario" 
                        value={formulario.usuario} 
                        onChange={handleChange}
                        />        
                    </div>               
                </form> 
            </div>
            <div className="col-12 col-md-4"></div>
        </div>
    )
}

export default FormularioUsuarios;