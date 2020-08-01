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
    subContext: {
        marginLeft: "20%",
        marginRight: "20%",
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
});

class SchoolProject extends Component {
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
                <div style={{marginTop: "100px"}}>
                    <DetailsPageBanner title={"Le projet d'étude national ou internationnel"}/>
                    <div className={classes.subContext}>
                        <p style={{fontSize: "20px",textAlign:"justify"}}>
                            Afin de mieux connaitre votre profil nous vous proposons de passer ce test de détection de profil,
                            Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,Antiochensi plebi suppliciter
                            obsecranti ut inediae dispelleret metum Antiochensi plebi suppliciter obsecranti ut inediae dispelleret
                            metum.Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,Antiochensi plebi suppliciter
                            obsecranti ut inediae dispelleret metum Antiochensi plebi suppliciter obsecranti ut inediae dispelleret
                            metum.Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,Antiochensi plebi suppliciter
                            obsecranti ut inediae dispelleret metum Antiochensi plebi suppliciter obsecranti ut inediae dispelleret
                            metum.
                        </p>
                        <Button className={classes.btnQuiz} >Passer le test</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(SchoolProject);
