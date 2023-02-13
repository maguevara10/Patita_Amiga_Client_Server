import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function PaginaPrincipal() {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get1').then((response) => {
            setAnimalList(response.data);   
        })
    }, []);
    return (<div class="mainBody" onLoad={window['alcargar']}>
        <div id="slider">
            <div class="slide">
                <img src="imagenes/refugio1.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio2.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio3.jpg" />
            </div>

            <div class="slide">
                <img src="imagenes/refugio4.jpg" />
            </div>

            {/* <!--Controlling arrows--> */}
            <span class="controls" onClick={window['prevSlide']} id="left-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
            <span class="controls" id="right-arrow" onClick={window['nextSlide']}><i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>

            <div id="dots-con">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="contenedor">
            <div id="mainInfo">
            {animalList.map((val) => {
                    return <div className="smallbox borderbox animal" id={val.ani_Id}>
                        <div className="relativo">
                            <img className="img-fluid w-100" src={val.ani_Foto} />
                            <div className="overlay">
                                <p>
                                    {val.ani_Descripcion}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-weight-bold">{val.ani_Nombre}</h2>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <br />
        <br />
    </div >
    );
}

export default PaginaPrincipal;