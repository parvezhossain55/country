import React from 'react';

const country = (props) => {
    //const {name, flag, region, population}= props.country
    
    
    const flagStyle= {height:'50px'}
    return (
        <div>
            
            <h4>This is {props.country.name}</h4>
            <p><small>{props.country.region}</small></p>
            <img style={flagStyle} src={props.country.flag} alt="" />
            <p>Population : {props.country.population}</p>
            <button onClick={()=>{props.abc(props.country)}} > Amake Click koro</button>
            
        </div>
    );
};

export default country;