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

class StudentDeposit extends Component {
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
                        image={<img className={classes.profilImage}  src={require("../assets/P15.jpg")} alt=""/>}
                        title={"Caution Etudiante à l'étranger"}/>
                    <div className={classes.subContext}>
                        <div className={classes.subContainer}>
                            <div style={{flex: 1}}>
                                <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    Dans le souci de propulser le projet d’étude des apprenants ou parents de CDABCOMPASS,
                                    la société éducative offre une caution bancaire aux apprenants désireux de faire leurs études
                                    à l’étranger par exemple en France. En effet, il a été constaté que beaucoup d’apprenants ont
                                    des difficultés à obtenir la caution pour continuer la procédure de visa dont la caution bancaire
                                    constitue un des points cruciaux. Ainsi, nous les offrons la possibilité de surmonter cette difficulté.
                                    CDAB COMPASS France dont le professionnalisme n’est plus à démontrer vous assure cette expertise d’une qualité
                                    sans précédent et vous invite à se confier à lui dans la transparence, l’efficacité et la fidélité.
                                </p>
                            </div>
                        </div>
                        <Button className={classes.btnQuiz} >Contrat de caution bancaire</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentDeposit);
