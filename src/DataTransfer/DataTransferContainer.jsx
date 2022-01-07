import React from "react";
import DataTransfer from "./DataTransfer";
import {setDataJson, deleteUser} from './../redux/jsonDataReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
    usersNamesJsonFile: state.jsonData.usersNamesJsonFile,
})
const DataTransferContainer = connect(mapStateToProps, {setDataJson, deleteUser})(DataTransfer)

export default DataTransferContainer;