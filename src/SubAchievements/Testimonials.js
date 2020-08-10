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
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
        flex: 1
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
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
});

class Testimonials extends Component {
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
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>

                    <div className={classes.titles}>
                        <p className={classes.title}>TÉMOIGNAGES</p>
                    </div>

                    <div className={classes.cardArticle}>
                        <div className={classes.videoArt}>
                            <iframe className={classes.videoClass} width="539" height="303" src="https://www.youtube.com/embed/OOY9q9DkkZ4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={classes.textArt}>
                            <div style={{margin: "0 auto", width: "70%"}}>
                                Le cabinet Cdab Compass s’ouvre le samedi 21 juillet prochain au grand public de Lomé.
                                C’est l’essentiel de ce qu’on peut retenir d’une conférence de presse organisée ce jeudi 19 juillet 2108 à
                                Lomé par ce cabinet spécialisé dans l’orientation et l’accompagnement des apprenants sur plusieurs plans notamment,
                                scolaire, universitaire et professionnel. Cdab Compass dit avoir une vision, celle de construire un parcours méthodique
                                de l’avenir professionnel de chaque élève ou étudiant en lui assurant la réussite tout au long de son cursus scolaire ou universitaire.
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className={classes.cardArticle}>
                        <div className={classes.videoArt}>
                            <iframe className={classes.videoClass} width="539" height="303" src="https://www.youtube.com/embed/Z4K-YDYCnxU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={classes.textArt}>
                            <div style={{margin: "0 auto", width: "70%"}}>
                                Cdab Compass présente sa vision pour construire un parcours méthodique de l’avenir professionnel de chaque élève et
                                étudiant en lui assurant la réussite tout au long de son cursus scolaire et universitaire.
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className={classes.cardArticle}>
                        <div className={classes.videoArt}>
                            <iframe className={classes.videoClass} width="539" height="303" src="https://www.youtube.com/embed/TuLase5DoTI"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                        <div className={classes.textArt}>
                            <div style={{margin: "0 auto", width: "70%"}}>
                                Découvrez dans ce court film, le parcours et le témoignage des étudiants et de leurs parents.
                                Cdab Compass
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Testimonials);
