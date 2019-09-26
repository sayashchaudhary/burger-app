import React, {Component} from "react";

import classes from "./Modal.css";
import Aux from "../../../HOC/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    //this could be a functional component, does'nt have to be class component
    componentDidUpdate() {
        console.log('[modal] didUpdate')
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;
