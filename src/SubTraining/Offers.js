import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
});

class Offers extends Component {
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
                <div style={{marginTop: "200px"}}>
                    Offers
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Offers);
