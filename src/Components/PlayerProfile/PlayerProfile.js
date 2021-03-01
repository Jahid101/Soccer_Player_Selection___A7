import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import './PlayerProfile.css';

const PlayerProfile = (props) => {
    const { image, first_name, last_name, salary } = props.player;

    return (

        <div className="PlayerContainer">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h4 className="leftMargin">Name : {first_name} {last_name}</h4>
                <h5 className="leftMargin">Salary : ${salary}</h5>
                <button className="btn btn-success leftMargin" onClick={()=>props.handleAddPlr(props.player)}><FontAwesomeIcon icon={faTshirt}/> Add Player</button>
            </div>
        </div>
    );
};

export default PlayerProfile;
