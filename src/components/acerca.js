import CV from '../documents/ArisOsorio.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPython, faGitAlt, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'



export default function Acerca() {
    return (
        <section id="acerca">
            <div className="bg-black">
                <div className="vh-100 p-5">
                    <div className="col-12 d-flex justify-content-center p-3">
                        <h1>Acerca de</h1>
                    </div>
                    <div className="row d-flex m-0">
                        <div className="col-sm-6 mb-3">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <h2>¿Quien soy?</h2>
                            </div>
                            <h3 className="mt-2">Soy Aris Osorio, desarrollador de aplicaciones web.</h3>
                            <p className="mt-2 text-justify">
                                Actualmente resido en Gudalajara - Mexico y en el ultimo año me he dedicado a la
                                construccion de aplicaciones web utilizando las ultimas tecnologias de desarrollo
                                con las cuales puedo transformar las ideas en productos significativos y útiles.
                            </p>
                            <div className="col-sm-12 d-flex justify-content-center">
                                <a class="btn btn-primary mt-2" href={CV} download="Aris_Osorio_CV.pdf" role="button">
                                    Descargar CV
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="col-sm-12 d-flex justify-content-center">
                                <h2>Habilidades</h2>
                            </div>
                            <div className="col-sm-12 d-flex justify-content-center">
                                <div className="">
                                    <div className="d-flex">
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faHtml5} className="fa-4x" />
                                        </div>
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faCss3Alt} className="fa-4x" />
                                        </div>
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faJs} className="fa-4x" />
                                        </div>
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faBootstrap} className="fa-4x" />
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faGitAlt} className="fa-4x" />
                                        </div>
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faReact} className="fa-4x" />
                                        </div>
                                        <div className="p-4">
                                            <svg fill="currentColor" height="64" width="64" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m27.724 0h10.476v48.44c-5.368 1.02-9.3 1.427-13.6 1.427-12.776 0-19.435-5.776-19.435-16.853 0-10.67 7.068-17.6 18.008-17.6 1.7 0 3 .135 4.553.543zm0 24.383c-1.223-.407-2.242-.543-3.533-.543-5.3 0-8.36 3.262-8.36 8.97 0 5.573 2.922 8.63 8.3 8.63 1.155 0 2.106-.068 3.6-.27zm27.113-8.223v24.26c0 8.36-.612 12.368-2.446 15.833-1.7 3.33-3.942 5.436-8.562 7.747l-9.718-4.62c4.62-2.174 6.863-4.076 8.3-7 1.495-3 1.97-6.456 1.97-15.56v-20.66zm-10.465-16.104h10.465v10.737h-10.465z" />
                                            </svg>
                                        </div>
                                        <div className="p-4">
                                            <FontAwesomeIcon icon={faPython} className="fa-4x" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}