import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    snackRoot: {
        backgroundColor: "red",
        color: "white"
    },
    snackGreen: {
        backgroundColor: "green",
        color: "white"
    }
});

class CustomAlert extends Component {
    constructor(props){
        super(props);
        this.state = {
            openAlert: false,
        };
    }

    handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({openAlert:false});
    };

    render() {
        // red = props.color = 0 || green = props.color = 1
        const {classes,message,color} = this.props;
        return (
            <div>
                {color===0 && (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={this.state.openAlert}
                        autoHideDuration={7000}
                        onClose={this.handleCloseAlert}
                        message={message}
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                        ContentProps={{
                            classes: {
                                root: classes.snackRoot
                            }
                        }}
                    />
                )}
                {color===1 &&(
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        open={this.state.openAlert}
                        autoHideDuration={7000}
                        onClose={this.handleCloseAlert}
                        message={message}
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                        ContentProps={{
                            classes: {
                                root: classes.snackGreen
                            }
                        }}
                    />
                )}
            </div>
        );
    }
}


export default withStyles(styles)(CustomAlert);
