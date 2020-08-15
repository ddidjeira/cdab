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

class Intership extends Component {
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
                <div style={{marginTop: "200px",marginLeft: "200px",marginRight:"200px"}}>
                    <div style={{margin: "0 auto",width:"70%"}}>
                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/qJ2Yc15zeE8"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>

                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>


                                    <p>La plupart du temps, les étudiants en fin de cycle sont orientés vers des stages dans
                                        le but de leur permettre de découvrir le monde du travail, de mettre en pratique
                                        leurs connaissances et acquérir une expérience professionnelle.
                                        <br/><br/>
                                        Cette conception du stage aujourd’hui va plus loin. Il est également possible pour
                                        les lycéens d’embrasser cette réalité par des stages de découvertes. C’est le conseil
                                        de la structure éducative CDAB COMPASS, spécialisée dans l’accompagnement
                                        scolaire, universitaire et professionnelle.
                                        <br/><br/>
                                        Le stage de découverte se présente comme une opportunité offerte aux élèves à
                                        partir des classes de troisième, seconde, première et terminale dans le but de
                                        soutenir leur profil et créer en eux en plus de leur formation de base, un esprit
                                        entrepreneurial.
                                        <br/><br/>
                                        Ce nouveau profil va garantir à l’apprenant un avenir certain. Il lui permet ainsi en
                                        plus de ses études scolaires comme son nom l’indique, de découvrir d’autres
                                        aspects du monde de travail. Et cela ouvre l’esprit sur les secteurs d’activités du
                                        monde professionnel.
                                        <br/><br/>
                                        Le stage de découverte, l’apprenant peut le faire à tout moment par exemple,
                                        pendant ses vacances scolaires ou selon un programme aménagé de son emploi du
                                        temps.
                                        <br/><br/>
                                        Ainsi, le profil retrouvé chez l’apprenant facilitera sa vision sur le choix de son
                                        futur métier.
                                        <br/><br/>
                                        Le stage de découverte, anticipe alors tout ce qui est stage de fin de cycle ou de
                                        perfectionnement dont nous en avons l’habitude. Ces derniers types de stages sont
                                        un chemin facilitant l’entrée de l’étudiant sur le marché de l’emploi. Ils sont
                                        déterminants pour son orientation dans sa future carrière.
                                        <br/><br/>
                                        Si le stage de fin de cycle permet à l’étudiant de consolider ses compétences et
                                        faciliter son insertion professionnelle, celui de perfectionnement lui permet par
                                        contre de renforcer ces acquis dans un domaine bien précis.
                                        <br/><br/>
                                        Au regard de tout ce qui précède, il est primordial de faire des stages de
                                        découvertes, de fin de cycle et de perfectionnement quel que soit la durée : courte
                                        ou de longue. Ils permettent d’acquérir de nombreuses expériences
                                        professionnelles et surtout dans plusieurs secteur d’activités ou branches
                                        d’activités. Et grâce à ces différents stages vous découvrirez quel métier est fait
                                        pour vous.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Intership);
