import React from 'react';
import PlayerProfile from '../PlayerProfile';
import "./Club.css"

const Club = (props) => {
    const club = props.club;
    // console.log(props.club);
    let total = 0;
    for (let i = 0; i < club.length; i++) {
        const player = club[i];
        // console.log(player.salary);
        total = total + player.salary;
    }

    return (
        <div>
            <h3>Total Player added : {club.length}</h3>
            <h4>Total Amount : {total}</h4>
        </div>
    );
};

export default Club;
