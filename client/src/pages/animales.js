import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Animales() {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setAnimalList(response.data);
        })
    }, []);

    return (
        <div class="infoPerros gridCentrado">
            <div class="botones">
                <h5>Animales:</h5>
                <h5>Tamaños:</h5>
                <h5>Sexos:</h5>
                <select name="animales">
                    <option value="Todos">Todos</option>
                    <option value="Perros">Perros</option>
                    <option value="Gatos">Gatos</option>
                </select>
                <select name="tamanios">
                    <option value="Todos">Todos</option>
                    <option value="Grandes">Grandes</option>
                    <option value="Medianos">Medianos</option>
                    <option value="Pequeños">Pequeños</option>
                </select>
                <select name="sexo">
                    <option value="Todos">Todos</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            <div class="gridCentrado grid4Columnas">
            {animalList.map((val) => {
                    return <div class="smallbox borderbox adulto" id={val.ani_Id}>
                        <div class="relativo">
                            <img class="img-fluid w-100" src={val.ani_Foto} />
                            <div class="overlay">
                                <p>
                                    {val.ani_Descripcion}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 class="font-weight-bold">{val.ani_Nombre}</h2>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Animales;