import React, { useState } from 'react';
import '../../styles/index.css';
import { PurpleButton, RandomButton } from './button';

const TrafficLight = () => { //  declarar función
    const [circleColor, setCircleColor] = useState({
        red: 'bg-danger', // Colores al cargar la página
        yellow: 'bg-warning', 
        green: 'bg-success'
    });

    const [randomIntervalId, setRandomIntervalId] = useState(null); // Nuevo state para el ID del intervalo
    
    const startRandomLights = () => {
        const intervalId = setInterval(randomLight, 500);
        setRandomIntervalId(intervalId); // Almacenar el ID del intervalo
    };

    const stopRandomLights = () => {
        if (randomIntervalId) {
            clearInterval(randomIntervalId); // Detener el intervalo 
            setRandomIntervalId(null); // Limpiar el ID del intervalo al detenerlo
        }
    };  
    
    const handleRedClick = () => {
        stopRandomLights();
        setCircleColor({
            red: 'bg-danger light-red', // Color rojo y efecto de luz al hacer click
            yellow: 'bg-warning', // Color amarillo y verde permanecen igual
            green: 'bg-success'
        });
    };

    const handleYellowClick = () => {
        stopRandomLights();
        setCircleColor({
            red: 'bg-danger',
            yellow: 'bg-warning light-yellow', // Color amarillo y efecto de luz al hacer click
            green: 'bg-success'
        });
    };

    const handleGreenClick = () => {
        stopRandomLights();
        setCircleColor({
            red: 'bg-danger',
            yellow: 'bg-warning', 
            green: 'bg-success light-green'// Color verde y efecto de luz al hacer click
        });
    };

    // Botón Random entre los colores rojo, verde y amarillo
    const randomLight = () => {
        const colors = ['red', 'yellow', 'green'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        switch (randomColor) {
            case 'red':
                handleRedClick();
                break;
            case 'yellow':
                handleYellowClick();
                break;
            case 'green':
                handleGreenClick();
                break;
        }
    };

// Botón Purple
    const changeToLila = () => {
        stopRandomLights(); // Detener random antes de cambiar a lila
        setCircleColor({
            red: 'lila light-lila',
            yellow: 'lila light-lila',
            green: 'lila light-lila'
        });
    };

    return (
        <div className="container-fluid mt-custom">
            <div className="row">
                <div className="col-4 d-flex flex-column justify-content-between">
                    <div className="col text-end ">ST</div>
                    <div className="col text-end">H</div>
                    <div className="col text-end">G</div>
                </div>

                {/* Columna Círculos */}
                <div className="col-4 d-flex flex-column align-items-center justify-content-center p-0">
                    <div className="circle-container p-0">
                        <div
                            className={`circle rounded-circle ${circleColor.red}`} onClick={handleRedClick}>
                        </div>
                    </div>
                    <div className="circle-container p-0">
                        <div
                            className={`circle rounded-circle ${circleColor.yellow}`} onClick={handleYellowClick}>
                        </div>
                    </div>
                    <div className="circle-container p-0">
                        <div
                            className={`circle rounded-circle ${circleColor.green}`} onClick={handleGreenClick}
                        ></div>
                    </div>
                </div>

                <div className="col-4 d-flex flex-column gx-0">
                    <div className="col text-start p-0">P</div>
                    <div className="col text-start p-0">LD</div>
                    <div className="col text-start p-0">!!</div>
                </div>
            </div>

            {/* Botones Bonus */}
            <div className="position-absolute end-0 bottom-0 p-3">
                <div className="d-block mb-2">
                    <RandomButton onClick={startRandomLights}/>
                </div>
                <div className="d-block">
                    <PurpleButton onClick={changeToLila} />
                </div>
            </div>
        </div>
    );
};

export default TrafficLight;

