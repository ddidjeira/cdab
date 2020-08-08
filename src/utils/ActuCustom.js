import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "./MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containDetails: {
        display: "flex",
        flexDirection: "row",
        marginTop: "100px"
    },
    contAll: {
        marginTop: "200px",
        textAlign: "center",
        marginLeft: "250px",
        marginRight: "250px"
    }
});

class ActuCustom extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes,title,description} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div className={classes.contAll}>
                    <h1>{title}</h1>
                    <div className={classes.containDetails}>
                        <div style={{textAlign: "justify"}}>
                            <p style={{ whiteSpace: "pre-line" }}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(ActuCustom);
