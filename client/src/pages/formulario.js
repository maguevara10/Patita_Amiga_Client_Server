import React from 'react';

function Formulario(){
        return (
            <div>
                <br />
                <div class="divsigjj">
                        <section id="secc2">
                            <fieldset id="cuentanos2">
                                <legend><h1>FORMULARIO DE ADOPCIÓN</h1></legend>
                                <form class="formulario">
                                    <table>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h4>Datos del adoptante</h4></legend>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <legend><h5>Nombre:</h5></legend>
                                                <input type="name" class="escrib2" placeholder="Nombre..." />

                                            </td>
                                            <td>
                                                <legend><h5>Apellido:</h5></legend>
                                                <input type="name" class="escrib2" placeholder="Apellido..." />
                                            </td>
                                            <td>
                                                <legend><h5>Fecha de nacimiento:</h5></legend>
                                                <input type="date" class="escrib2" name="datetime"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h5>Dirección de domicilio: </h5></legend>
                                                <input type="text" class="asunto2" placeholder="Barrio, ciudadelas o calles..." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <legend><h5>Número de Cedula:</h5></legend>
                                                <input type="number" class="escrib2" placeholder="CI..." />

                                            </td>
                                            <td>
                                                <legend><h5>Correo electronico:</h5></legend>
                                                <input type="email" class="escrib2" placeholder="...................@hotmail.com" />
                                            </td>
                                        </tr>
                                        <tr >
                                            <td>
                                                <legend><h5>Celular:</h5></legend>
                                                <input type="tel"  class="escrib2" placeholder="(+593)............" />

                                            </td>
                                            <td>
                                                <legend><h5>Operadora:</h5></legend>
                                                <select class="escrib2" name="operadora">
                                                    <option value="Claro">Claro</option>
                                                    <option value="Movistar">Movistar</option>
                                                    <option value="Tuenti">Tuenti</option>
                                                </select>
                                            </td>
                                            <td>
                                                <legend><h5>Número de referencia:</h5></legend>
                                                <input type="tel" class="escrib2" placeholder="(+593)............" />
                                            </td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h4>Información personal</h4></legend>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>
                                                 <legend><h5>¿Por qué desea adoptar una mascota?</h5></legend>
                                                <input type="text" class="mensaje2" placeholder="Explica tu razón por la cúal deseas adoptar a la mascota..." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Has tenido antes otras mascotas ?</h5></legend>
                                                    <input type="radio" name="historial" id="si"/>
                                                    <label for="si"> SI </label> 
                                                    <input type="radio" name="historial" id="no"/>
                                                    <label for="no"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={2}>
                                                 <legend><h5>¿Qué pasó con sus otras mascotas ?</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="Escribe el motivo por el cual ya no estan contigo..." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Tiene otras mascotas actualmente?</h5></legend>
                                                    <input type="radio" name="historial2" id="si2"/>
                                                    <label for="si2"> SI </label> 
                                                    <input type="radio" name="historial2" id="no2"/>
                                                    <label for="no2"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={2}>
                                                 <legend><h5>¿Cuáles?</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="Escribe el motivo por el cual ya no estan contigo..." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Si los tiene, están esterilizados ?</h5></legend>
                                                    <input type="radio" name="historial3" id="si3"/>
                                                    <label for="si3"> SI </label> 
                                                    <input type="radio" name="historial3" id="no3"/>
                                                    <label for="no3"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Por qué ?</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="Escribe el motivo por el cual tus mascotas están o no esterelizados..." />
                                            </td>

                                            <td colSpan={1}>
                                                <legend><h5>¿Hace cuánto tiempo tiene a sus mascotas?</h5></legend>
                                                <select class="escrib2" name="anios">
                                                        <option value="1 año">1 año</option>
                                                        <option value="2 años">2 años</option>
                                                        <option value="3 años">3 años</option>
                                                        <option value="4 años">4 años</option>
                                                        <option value="5 años">5 años</option>
                                                        <option value="6 años">6 años</option>
                                                        <option value="7 años">7 años</option>
                                                        <option value="8 años">8 años</option>
                                                        <option value="9 años">9 años</option>
                                                        <option value="10 o más años">10 o más años</option>
                                                    </select>
                                            </td>
                                        </tr>     
                                        <br></br>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h4>Información sobre su hogar</h4></legend>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Cuántas personas viven en su casa?</h5></legend>
                                                 <select class="escrib2" name="anios">
                                                        <option value="1p">1 persona</option>
                                                        <option value="2p">2 personas</option>
                                                        <option value="3p">3 personas</option>
                                                        <option value="4p">4 o mas personas</option>
                                                    </select>
                                            </td>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Están todos de acuerdo en adoptar?</h5></legend>
                                                    <input type="radio" name="historial4" id="si4"/>
                                                    <label for="si4"> SI </label> 
                                                    <input type="radio" name="historial4" id="no4"/>
                                                    <label for="no4"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Hay alguien  que sea alergico a los animales?</h5></legend>
                                                    <input type="radio" name="historial5" id="si5"/>
                                                    <label for="si5"> SI </label> 
                                                    <input type="radio" name="historial5" id="no5"/>
                                                    <label for="no5"> NO </label> 
                                                </div>
                                            </td>
                                        </tr>
                                        <br></br>
                                        <tr>
                                                <td colSpan={1}>
                                                    <div class="radio">
                                                    <legend><h5>¿Hay niños en casa?</h5></legend>
                                                        <input type="radio" name="historial6" id="si6"/>
                                                        <label for="si6"> SI </label> 
                                                        <input type="radio" name="historial6" id="no6"/>
                                                        <label for="no6"> NO </label> 
                                                    </div>
                                                </td>
                                        </tr>
                                        <tr>
                                             <td colSpan={2}>
                                                 <legend><h5>En caso de vivir en alquiler ¿Sabe si sus arrendadores le permiten tener mascotas?</h5></legend>
                                                 <select class="escrib2" name="anios">
                                                        <option value="1s">Si</option>
                                                        <option value="2s">No</option>
                                                        <option value="3s">Vivo en casa propia</option>
                                                    </select>
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5> ¿Dónde dormira la mascota?</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="Describe el espacio físico que ocupará la mascota para dormir" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Hay espacio sufiente para la mascota?</h5></legend>
                                                    <input type="radio" name="historial11" id="si11"/>
                                                    <label for="si11"> SI </label> 
                                                    <input type="radio" name="historial2" id="no11"/>
                                                    <label for="no11"> NO </label> 
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Cuánto tiempo pasará sola la mascota?</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="horas, días o semanas..." />
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Quién cubrira los gastos del adoptado?</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="Tus padres, tú, un familiar externo..." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div class="radio">
                                                 <legend><h5>¿Está de acuerdo en recibir visitas domiciliarias para conocer el estado de su mascota ?</h5></legend>
                                                    <input type="radio" name="historial7" id="si7"/>
                                                    <label for="si7"> SI </label> 
                                                    <input type="radio" name="historial7" id="no7"/>
                                                    <label for="no7"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Por qué ?</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="Motivo por el cual está o no de acuerdo con las visitas domiciliarias ..." />
                                            </td>
                                        </tr> 
                                        <br></br>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h4>Experiencia con mascotas</h4></legend>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Qué cantidad cree que gasta una mascota al mes?</h5></legend>
                                                 <input type="number" class="escrib2" placeholder="Monto en dólares..." />
                                            </td>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Cuenta con los recursos para cubrir los gastos? Escriba su respuesta en dolares</h5></legend>
                                                    <input type="radio" name="historial8" id="si8"/>
                                                    <label for="si8"> SI </label> 
                                                    <input type="radio" name="historial8" id="no8"/>
                                                    <label for="no8"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5>Escriba en dolares su presupuesto estimado mensual destinado a mantener a su mascota</h5></legend>
                                                 <input type="number" class="escrib2" placeholder="....dolares" />
                                            </td>

                                        </tr>
                                        <tr>
                                            <td colSpan={1}>
                                                 <legend><h5>¿Si el comportamiento de su mascota no es el adecuado, qué medidas tomaria?</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="Escribe qué medidas tomarías..." />
                                            </td>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Tiene un médico veterinario de confianza?</h5></legend>
                                                    <input type="radio" name="historial12" id="si12"/>
                                                    <label for="si12"> SI </label> 
                                                    <input type="radio" name="historial12" id="no12"/>
                                                    <label for="no12"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={1}>
                                                 <legend><h5>Escriba el nombre del Veterinario</h5></legend>
                                                 <input type="text" class="escrib2" placeholder="Dr. ..........................." />
                                            </td>
                                        </tr>    
                                        <tr>
                                            <td colSpan={1}>
                                                <div class="radio">
                                                 <legend><h5>¿Asume el compromiso de esterilizar a su mascota cuando tenga la edad suficiente?  ?</h5></legend>
                                                    <input type="radio" name="historial9" id="si9"/>
                                                    <label for="si9"> SI </label> 
                                                    <input type="radio" name="historial9" id="no9"/>
                                                    <label for="no9"> NO </label> 
                                                </div>
                                            </td>
                                            <td colSpan={2}>
                                                 <legend><h5>¿Por qué ?</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="Escribe el motivo por el cual esterilizarias o no a tu mascota..." />
                                            </td>
                                        </tr>      
                                        <br></br>
                                        <tr>
                                            <td colSpan={3}>
                                                <legend><h4>El futuro con su mascota</h4></legend>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3}>
                                                 <legend><h5>Si por algún motivo tuviera que cambiar de domicilio, ¿Qué pasaría con su mascota??</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="" />
                                            </td>
                                        </tr> 
                                        <tr>
                                            <td colSpan={3}>
                                                 <legend><h5>En caso de divorcio, fallecimiento o nacimiento ¿Cuáles serían los cambios en el trato hacia el animalito adoptado? </h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="" />
                                            </td>
                                        </tr> 
                                        <tr>
                                            <td colSpan={3}>
                                                 <legend><h5>¿Cómo se ve con su mascota dentro de 5 años?</h5></legend>
                                                 <input type="text" class="mensaje2" placeholder="" />
                                            </td>
                                        </tr> 
                                    </table>
                                    <input type="submit" id="envio2" />
                                </form>
                                <br></br>
                            </fieldset>
                        </section>
                </div>
                <br /><br />
            </div>
        );
}

export default Formulario;