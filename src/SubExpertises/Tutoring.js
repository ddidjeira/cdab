import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    subContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    subContext: {
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "50px",
        textAlign: "center",
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    profilImage:{
        width: "100%",
        height: "500px",
        filter: "blur(2px)",
    },
});

class Tutoring extends Component {
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
                <div style={{marginTop: "100px",marginBottom: "100px"}}>
                    <DetailsPageBanner
                        image={<img className={classes.profilImage} src={require("../assets/P3.JPG")} alt=""/>}
                        title={"Soutiens scolaires (repetitions)"}/>
                    <div className={classes.subContext}>
                        <div className={classes.subContainer}>
                            <div style={{flex: 1}}>
                                <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    Suivant les différentes caractéristiques de l’apprenant, un soutien scolaire à court
                                    (deux mois maximum) ou moyen terme (mois alternatif) est mis en place. Il permet de travailler
                                    l’autonomie de ce dernier. Ce soutien scolaire (encore appelée répétition) est libre et au rythme convenu avec la famille.
                                </p>
                            </div>
                        </div>
                        <Button className={classes.btnQuiz} >Passer le test</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Tutoring);
