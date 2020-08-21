import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '35vh auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        margin: '2em auto 1em',
    },
    snackGreen: {
        backgroundColor: "green",
        color: "white"
    },
    snackRed: {
        backgroundColor: "red",
        color: "white"
    },
});

function CheckoutForm(props) {
    const classes = useStyles();
    // State
    const [email, setEmail] = useState(
        localStorage.getItem("email") != null ?
            localStorage.getItem("email") : '');
    const [openAlert, setOpenAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState('');
    const [alertStyle, setAlertStyle] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
        setMsgAlert('');
    };

    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const res = await axios.post('/pay', {email: email,amount: props.amount});

        const clientSecret = res.data.client_secret;

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            setAlertStyle(false);
            setOpenAlert(true);
            setMsgAlert(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                setAlertStyle(true);
                setOpenAlert(true);
                setMsgAlert('Votre paiement à été effectué');
            }
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <TextField
                    label='Email'
                    id='outlined-email-input'
                    helperText={`Email you'll recive updates and receipts on`}
                    margin='normal'
                    variant='outlined'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
                <CardInput />
                <div className={classes.div}>
                    <Button style={{backgroundColor: "#FF9800",color: "white"}} className={classes.button} onClick={handleSubmit}>
                        Pay
                    </Button>
                </div>
            </CardContent>
            <Snackbar
                bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={openAlert}
                autoHideDuration={7000}
                onClose={handleCloseAlert}
                message={msgAlert}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseAlert}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
                ContentProps={{
                    classes: {
                        root: (alertStyle === true ? classes.snackGreen : classes.snackRed)
                    }
                }}
            />
        </Card>
    );
}

export default CheckoutForm;
