import React from "react";

import claases from "./DrawerToggle.css";

const drawerToggle = (props) => (
    <div className={claases.DrawerToggle} onClick={props.clicked}>
        <div/>
        <div/>
        <div/>
    </div>
);

export default drawerToggle;
