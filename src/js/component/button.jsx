import React from 'react';

const RandomButton = ({ onClick }) => {
    return (
        <button
            className="btn bg-white text-dark border border-4 border-dark btn-lg"
            onClick={onClick}>
            <i className="fas fa-random"></i>
        </button>
    );
};

const PurpleButton = ({ onClick }) => {
    return (
        <button
            className="btn bg-white border border-4 border-dark btn-lg"
            onClick={onClick}>
            <i className="fas fa-circle purple-button"></i>
        </button>

    );
};

export { PurpleButton, RandomButton };