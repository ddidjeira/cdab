import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ExpertisesComponents from "../utils/ExpertisesComponents";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    titles: {
        marginBottom: "100px",
        textAlign: "center"
    },
    title: {
        fontSize: "60px",
        fontWeight: "bold",
        textDecoration: "underline"
    },
    subTitle:{

    }
});

class Expertises extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div >
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.titles}>
                        <p className={classes.title}>Nos expertises</p>
                        <p className={classes.subTitle}>Nous vous accompagnons durant chacun de ses processus</p>
                    </div>
                    <ExpertisesComponents/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Expertises);
