import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Animales() {
    const [animalList, setAnimalList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setAnimalList(response.data);
        })
    }, []);

    function setClasses() {
        var animals = document.getElementsByClassName("animal");
        for (let index = 0; index < animals.length; index++) {
            animals[index].classList.add(animalList[index].ani_Especie);
            animals[index].classList.add(animalList[index].ani_Tamanio);
            animals[index].classList.add(animalList[index].ani_Sexo);
        }
    }
    function leerAnimales() {
        var razaAnimal = document.querySelector("#animales").value;
        var animals = document.getElementsByClassName("animal");

        if (razaAnimal == "Todos") {
            for (let index = 0; index < animals.length; index++) {
                animals[index].classList.remove('activo1');
            }
        } else if (razaAnimal == "Perros") {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[3] == "Perro"){
                    animals[index].classList.remove('activo1');
                }else{
                    animals[index].classList.add('activo1');
                }  
            }
        } else {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[3] == "Gato"){
                    animals[index].classList.remove('activo1');
                }else{
                    animals[index].classList.add('activo1');
                }  
            }
        }
    }
    function leerTamanio() {
        var razaAnimal = document.querySelector("#tamanios").value;
        var animals = document.getElementsByClassName("animal");

        if (razaAnimal == "Todos") {
            for (let index = 0; index < animals.length; index++) {
                animals[index].classList.remove('activo2');
            }
        } else if (razaAnimal == "Grandes") {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[4] >= 100){
                    animals[index].classList.remove('activo2');
                }else{
                    animals[index].classList.add('activo2');
                }  
            }
        } else if(razaAnimal == "Medianos"){
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[4] < 100 && animals[index].classList[4] >= 50){
                    animals[index].classList.remove('activo2');
                }else{
                    animals[index].classList.add('activo2');
                }  
            }
        }else {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[4] < 50){
                    animals[index].classList.remove('activo2');
                }else{
                    animals[index].classList.add('activo2');
                }  
            }
        }
    }
    function leerSexo() {
        var razaAnimal = document.querySelector("#sexos").value;
        var animals = document.getElementsByClassName("animal");

        if (razaAnimal == "Todos") {
            for (let index = 0; index < animals.length; index++) {
                animals[index].classList.remove('activo3');
            }
        } else if (razaAnimal == "M") {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[5] == "M"){
                    animals[index].classList.remove('activo3');
                }else{
                    animals[index].classList.add('activo3');
                }  
            }
        } else {
            for (let index = 0; index < animals.length; index++) {
                if (animals[index].classList[5] == "F"){
                    animals[index].classList.remove('activo3');
                }else{
                    animals[index].classList.add('activo3');
                }  
            }
        }
    }
    return (
        <div className="infoPerros gridCentrado" onLoad={setClasses}>
            <div className="botones">
                <h5>Animales:</h5>
                <h5>Tamaños:</h5>
                <h5>Sexos:</h5>
                <select id="animales" name="animales" onChange={leerAnimales}>
                    <option value="Todos">Todos</option>
                    <option value="Perros">Perros</option>
                    <option value="Gatos">Gatos</option>
                </select>
                <select id="tamanios" name="tamanios" onChange={leerTamanio}>
                    <option value="Todos">Todos</option>
                    <option value="Grandes">Grandes</option>
                    <option value="Medianos">Medianos</option>
                    <option value="Pequeños">Pequeños</option>
                </select>
                <select id='sexos' name="sexos" onChange={leerSexo}>
                    <option value="Todos">Todos</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            <div className="gridCentrado grid4Columnas">
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
    );
}

export default Animales;