import { CircularProgress } from "@mui/material";
import React from "react";


function ReloadComponent({isReloading}) {

    return isReloading && (
        <CircularProgress/>
    )
}


export default ReloadComponent