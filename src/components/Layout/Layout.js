import React from 'react';

import Aux from '../../HOC/Aux'
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, sidebar, backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default  layout;
