import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    // profilImage:{
    //     width: "100%",
    //     height: "500px",
    //     filter: "blur(2px)",
    // },
    subHeader:{
        position: "relative",
        textAlign: "center"
    },
    profilTitle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        right: "25%",
        fontSize: "75px",
        fontWeight: 500,
        color: "#EDBA2D",
        transform: "translate(-50%, -50%)",
        width: "900px"
    }
});

class DetailsPageBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes, title, image} = this.props;
        return (
            <div className={classes.subHeader}>
                <div>
                    {image}
                </div>
                <p className={classes.profilTitle}>{title}</p>
            </div>
        );
    }
}


export default withStyles(styles)(DetailsPageBanner);
