import React from "react";
import './UsersList.css';
import cross from './../../assets/images/cross.png';

const UsersList = (props) => {
    // debugger;
    const deleteUser = (e) => {
        // console.log(e);
        props.deleteUser(e);
    }

    return <div className="wrapper__json__file__header">
        <div className="wrapper__json__file__name">{props.nameJsonFile}</div>
        <div className="wrapper__json__file">
            <ul className="wrapper__users__names">
                {props.usersNamesJsonFile.map((item, id) => {
                    return <div key = {id} className="wrapper__users__names_li">
                        <li className="users__names">{item}</li>
                        <img id = {id} src={cross} onClick ={() => {deleteUser(id)}} className="users__names__cross"></img>
                    </div>
                })}
            </ul>
        </div>
    </div>
}

export default UsersList;