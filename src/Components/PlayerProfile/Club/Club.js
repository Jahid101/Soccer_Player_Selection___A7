import React from 'react';

const Club = (props) => {
    const club = props.club;
    // console.log(props.club);
    let total = 0;
    let salary = 0;
    let playerName = [];
    for (let i = 0; i < club.length; i++) {
        const player = club[i];
        // console.log(player.salary);
        salary = player.salary;
        let Name = ' '+player.first_name + ' ' + player.last_name + '($'+ salary + ')' + '. ';
        playerName.push(Name);
        total = total + salary;
    }

    return (
        <div>
            <h3>Total Player added : {club.length}</h3>
            <h5>Selected Player : <small>{playerName}</small></h5>
            <h4>Total Budget : ${total}</h4>
        </div>
    );
};

export default Club;
