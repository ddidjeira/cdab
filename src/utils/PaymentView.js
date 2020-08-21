import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "./MenuBar";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe("pk_test_51HILWZKSaFVw8gZPl6d0THFgVCp7N91IxdM0RWUJIhrQGIMPPcLUw25sfKIKvfmIKcIHofdPOFwc2dd9uy7PunFY00LIWvuZuN");

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
});

class PaymentView extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div >
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={"fr-student-profil"} />
                    </Elements>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(PaymentView);
