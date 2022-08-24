import React from 'react';

const Cart = (props) => {
    

    const cart = props.cart
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const newPopulation = cart[i].population
    //     totalPopulation=totalPopulation + newPopulation;
    // }

    const totalPopulation = cart.reduce((sum,country) => sum + country.population, 0)
    return (
        <div>
            <h1>Total Country Added : {cart.length}</h1>
            <h2>Total Population {totalPopulation}</h2>
        </div>
    );
};

export default Cart;