import React from 'react';

function Contactanos() {
    return (
        <div>
            <div class="pres">
                <img src="imagenes/cachorrin.png" class="perrito"></img>
                <div>
                    <h1>¡Contáctanos!</h1><br/>
                    <p>Si tienes dudas sobre el proceso de adopción,<br/> o quieres saber más acerca de nuestros animalitos, <br/>
                    no dudes en contactarte con nosotros.</p>
                </div>
                    <img src="imagenes/gatin.png" class="gatito"></img>
            </div>
                <div class="divsig">
                    <table id="siguenos">
                        <tr>
                            <td colspan="3" id="top">
                                <h1>Síguenos en nuestras redes sociales</h1>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">
                                    <a href="https://www.facebook.com/profile.php?id=100090408035860&mibextid=ZbWKwL" target="_blank">
                                        <img src="imagenes/FbW.png" alt="facebook" />
                                    </a>
                            </td>
                            <td align="center">
                                    <a href="https://instagram.com/patitaamigaa?igshid=YmMyMTA2M2Y=" target="_blank">
                                        <img src="imagenes/instW.png" alt="instagram" />
                                    </a>
                            </td>
                            <td align="left">
                                    <a href="https://www.tiktok.com/@patitaamigaa?_t=8ZpRmPxRqjO&_r=1" target="_blank">
                                        <img src="imagenes/tiktok.png" alt="tiktok" id="tik" />
                                    </a>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <section id="secc">
                        <fieldset id="cuentanos">
                            <legend><h1>Cuéntanos tus dudas</h1></legend>
                            <form>
                                <table>
                                    <tr>
                                        <td>
                                            <input type="name" class="escrib" placeholder="Nombre" />
                                        </td>
                                        <td>
                                            <input type="email" class="escrib" placeholder="Correo" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <input type="text" class="asunto" placeholder="Asunto" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <input type="text" class="mensaje" placeholder="Escribe tu mensaje..." />
                                        </td>
                                    </tr>
                                </table>
                                <input type="submit" id="envio" />
                            </form>
                            <br/>
                        </fieldset>
                    </section>
                    <br />
                    <section class="mapa">
                        <h1>Visítanos</h1>
                        <br />
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127673.53385893838!2d-78.62618853750003!3d-0.18316420000000175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a89584c1703%3A0x81c749ec87204742!2sPAE%20(Protecci%C3%B3n%20Animal%20Ecuador)!5e0!3m2!1ses!2sec!4v1676097351051!5m2!1ses!2sec" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </section>
                </div>
                <br />
            </div>
    );
}

export default Contactanos;