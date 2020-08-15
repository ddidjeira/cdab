import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "white",
        color: "black",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
    },

    videoClass:{
        height: "100%",
        width: "100%"
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
        paddingRight: "25px",
        overflowY: "auto",
    },
    textPlace:{
        margin: "0px auto",
        width: "70%",
        height: "100%",
    }
});

class Advices extends Component {
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
                    <div style={{margin: "0 auto",width:"50%"}}>
                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/qJ2Yc15zeE8"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>

                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le CV (curriculum vitae) est un formel de recrutement très courant. Il
                                    présente une bonne proportion entre le temps passé à le lire et la
                                    quantité/qualité d’informations que nous apprenons d’un candidat.
                                    Alors que le recruteur passe plus de temps lors d’un entretien
                                    téléphonique ou physique, le CV permet d’avoir les mêmes
                                    informations pertinentes pendant un court temps de lecture. <br/><br/>
                                    Le CV récapitule ton expérience de travail, ton information, et tout ce
                                    qui englobe tes compétences. Il peut te permettre de décrocher le job
                                    de tes rêves. Il est donc important de prendre son temps lors de sa
                                    rédaction car celui-ci doit-être détaillé. <br/><br/>
                                    Son rôle se situe au niveau de la recherche d’emploi. Le curriculum
                                    vitae doit démontrer noir sur blanc, la compétence du candidat pour le
                                    poste recherché. <br/><br/>
                                    A part tes coordonnées et photo, ton CV doit renfermer tes
                                    expériences professionnelles en ordre chronologique, puis tes
                                    compétences et ta formation. En bas, il est recommandé d’ajouter tes
                                    centres d’intérêts. Ces derniers peuvent captiver l’œil du recruteur.
                                    Malgré l’importance et l’efficacité du CV, il ne permet pas de jauger
                                    les compétences concrètes du postulant ni sa motivation.
                                    « Quand vous cherchez des gens à recruter, vous devez rechercher
                                    trois qualités : l’intégrité, l’intelligence et l’énergie. Et s’ils ne
                                    possèdent pas la première, les deux autres vous tueront » – Warren
                                    Buffet. <br/><br/>
                                    Le recrutement basé sur le CV et la lettre de motivation n’est plus
                                    suffisant de nos jours surtout dans les entreprises qui sollicitent un
                                    contact direct avec le client.
                                    De nos jours, les pratiques de recrutement changent. Certaines
                                    entreprises ont décidé d’innover en instaurant des processus de
                                    sélection sans CV ou avec un rôle secondaire.
                                    Ces pratiques modernes permettent de se libérer des critères
                                    traditionnels de recrutement. <br/><br/>

                                    www.cdabcompass.com
                                    Par conséquent, le CV n’est ni une autobiographie ni un roman.
                                    A qui le curriculum vitae est-il le plus indispensable ? A
                                    l’employeur ? A la personne à la recherche d’emploi ? Au deux à la
                                    fois ? En fait, il est utile à chacun des deux.
                                    Ainsi, le CV est un outil de recherche d’emploi utile. Et il est conseillé
                                    parfois de le rédiger en fonction des employeurs.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Advices);
