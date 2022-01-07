import React, { useEffect, useState } from "react";
import { blockClick } from "../Js/jsonData";
import './DataTransfer.css';
import UsersList from "./UsersList/UsersList";

const DataTransfer = (props) => {
    // blockClick();
    const [nameJsonFile, setNameJsonFile] = useState('');
    const getDataJson = (e) => {
        setNameJsonFile(e.target.files[0].name);
        let src = window.URL.createObjectURL(e.target.files[0]);
        fetch(src)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.setDataJson(data);
            });
    }

    return (
        <>
            {props.usersNamesJsonFile.length > 0 ? <UsersList {...props} nameJsonFile ={nameJsonFile}/> :  <div className="wrapperFromData">
        <input id='addingFileButton' className='addingFileButton' type='file'  onChange={getDataJson} onClick={(e) => {e.preventDefault();}}/>
        <label htmlFor="addingFileButton" className="newButton" >
            <span className="newButtonText" >Need Json file</span>
        </label>
    </div>}
        </>

    );
   
}

export default DataTransfer;