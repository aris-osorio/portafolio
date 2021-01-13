import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contactame() {
    return (
        <section id="contactame">
            <div className="bg-black">
                <div className="vh-100 p-5">
                    <div className="col-12 d-flex justify-content-center p-3">
                        <h1>Contactame</h1>
                    </div>
                    <div className="row d-flex m-0">
                        <div className="col-sm-6 mb-3">
                            <label for="inputName">Tu nombre</label>
                            <input id="inputName" className="form-control form-control-lg" type="text" placeholder="Ingresa tu nombre aqui" />
                        </div>
                        <div className="col-sm-6 mb-3">
                            <label for="inputEmail">Tu correo</label>
                            <input type="email" className="form-control form-control-lg" id="inputEmail" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="p-3">
                        <label for="inputMensaje">Tu mensaje</label>
                        <textarea className="form-control  mb-3" id="inputMensaje" rows="3" />
                        <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                    <div className="col-12 d-flex justify-content-center p-2">
                        <div className="p-4">
                            <FontAwesomeIcon icon={faLinkedinIn} className="fa-4x" />
                        </div>
                        <div className="p-4">
                            <FontAwesomeIcon icon={faGithub} className="fa-4x" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}