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

class StudentHousing extends Component {
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
                        image={<img className={classes.profilImage}  src={require("../assets/Lg1.jpeg")} alt=""/>}
                        title={"Logement Etudiant à l'étranger"}/>
                    <div className={classes.subContext}>
                        <div className={classes.subContainer}>
                            <div style={{flex: 1}}>
                                <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    L’accompagnement hébergement consiste pour CDAB COMPASS à alléger la tâche et le souci
                                    de la recherche d’un logement, aux apprenants. Ainsi la structure prend sur elle la charge
                                    de faire la recherche des logements aux apprenants. Ces logements répondent au standard minimum
                                    requis pour le logement étudiant en France et conviennent au budget des familles en tenant compte
                                    du prix moyen de location étudiante dans la ville d’études. Ainsi sont proposés des logements en
                                    résidence universitaire privée, des logements confortables chez des partenaires ou chez le particulier.
                                    Nous assurons aussi la caution locative (garant), épine pour beaucoup d’apprenant n’ayant pas de parents en France ou,
                                    incapables financièrement d’assumer cette charge.
                                </p>
                            </div>
                        </div>
                        <Button className={classes.btnQuiz} >Protocole de recherche de logement</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentHousing);
