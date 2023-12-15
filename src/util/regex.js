import React from 'react';

const emailValidation = (email) => {
    console.log("Lets validate!");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const regex = () => {
    return {
        emailValidation,
    };
};

export default regex;