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

class ScolarOrientation extends Component {
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
                        image={<img className={classes.profilImage}  src={require("../assets/P3.JPG")} alt=""/>}
                        title={"Accompagnement et orientation scolaire"}/>
                    <div className={classes.subContext}>
                        <div className={classes.subContainer}>
                            <div style={{flex: 1}}>
                                <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants sur tous les plans scolaire, universitaire et même professionnel,
                                    accorde une importance à cette expertise.
                                    Ainsi, CDAB COMPASS la propose afin d’aider les apprenants à renforcer leur niveau et à bien s’orienter pour atteindre leur objectif professionnel.

                                    <br/><br/>L’accompagnement est un point essentiel pour permettre à l’apprenant d’être encrer plus solidement dans son projet d’étude.
                                    Il offre l’opportunité à l’apprenant de découvrir d’autres méthodes de faire les cours, et de rehausser son niveau dans les matières dites difficiles
                                    ou généralement appelées « bêtes noires ».

                                    Par le biais de cette phase les apprenants reçoivent des cours de soutien ou de répétions appropriés dans chaque matière ou dans les matières dont
                                    les besoins se font plus sentir. Ils ont selon leurs besoins un quota d’heures à faire. Cet accompagnement spécialisé sur le profil de l’apprenant permet
                                    à ce dernier d’être recadré d’où le lien intrinsèque entre l’accompagnement et l’orientation.

                                    <br/><br/>L’orientation consiste à soit restructurer l’apprenant soit à lui offrir d’autres opportunités insoupçonnées ainsi à le rediriger vers d’autres voies propices
                                    à un meilleur avenir. Par conséquent, un apprenant ayant les capacités mécaniques peut être orienté vers l’ingénierie alors qu’il prévoyait être enseignant.
                                    L’orientation peut permettre à un apprenant ou enfant non motivé à trouver ses repères pour une réussite professionnelle.
                                    L’accompagnement et l’orientation scolaires conduisent à l’élaboration d’un projet d’étude adéquat.

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


export default withStyles(styles)(ScolarOrientation);
