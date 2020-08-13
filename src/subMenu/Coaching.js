import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Pdf from "../othersfiles/manuel.pdf";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    eachCarousel:{
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center"
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
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#fff070",
        color: "black",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
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

class Coaching extends Component {
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
                    <div className={classes.titles}>
                        <p className={classes.title}>COACH-CDAB</p>
                    </div>

                    <div style={{margin: "0 auto",width:"50%"}}>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/b36rnsBkeaU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    <strong>ETUDES : SYSTEME NATIONAL OU INTERNATIONAL</strong>
                                    Nous avons à notre époque, le choix d’étude entre le système national et
                                    international. <br/><br/>
                                    Par le passé, le système national était de niveau équivalent à l’international, et
                                    de nature publique. De nos jours, le système national est scindé en deux parties :
                                    le public et le privé, suite à la croissance accrue du nombre d’apprenants. <br/><br/>
                                    Le système international d’aujourd’hui, joue un rôle auprès des parents ou
                                    tuteurs ayant un projet pour leurs enfants hors cadre local. <br/>
                                    Il s’agit au fait d’un bon investissement pour les parents à moyen et court terme
                                    et un bon tremplin pour la réussite de leur projet d’études pour les enfants.
                                    L’erreur à ne pas commettre est de compromettre l’avenir de son enfant, en
                                    voulant l’intégrer dans un système sans analyse au préalable mais juste parce
                                    que la famille voisine ou un proche en fait autant. <br/><br/>
                                    Il est préférable de choisir un système d’étude adéquat au profil de l’enfant. Les
                                    parents doivent penser en terme de projection d’études. <br/><br/>
                                    Il est libre au parent d’apprécier le fait d’inscrire son enfant dans le système
                                    correspondant au projet d’études de son enfant. Les différentes alternatives
                                    interviennent du primaire ou lycée en passant par le collège par des vases
                                    communicants d’un système à un autre.
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/ZxT95vXlEHw"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    <strong>SOUTIEN SCOLAIRE OU REPETITION</strong><br/><br/>
                                    L’erreur courante est de choisir un cours de répétition sur la seule base de la
                                    baisse de note dans une discipline scolaire ou universitaire. Nous pensons faire
                                    ainsi un choix judicieux pour nos enfants. Ainsi la question est de savoir l’intérêt
                                    du cours de répétition et l’aide à apporter à nos enfants pour rattraper le retard
                                    cumulé ?

                                    <strong>La répétition sur le long terme,</strong> c’est-à dire, payer un professeur pour la survie
                                    scolaire de votre enfant toute l’année, n’aide pas du tout ce dernier. L’enfant ou
                                    l’élève ou l’étudiant est censé faire des efforts. Mais force est de remarquer que
                                    la répétition programmée sur toute l’année abrutit, rend paresseux votre enfant.
                                    De ce fait qu’il ne fournit plus aucun effort pour s’en sortir de son retard
                                    scolaire, puisqu’il se dit en lui-même : j’ai un répétiteur à la maison, il
                                    m’expliquera le cours même si je ne suis, ni ne participe au cours. Il devient
                                    fainéant, parce qu’il ne fait plus l’effort de résoudre les équations de lui-même.
                                    Il aura tendance à être dépendant et à attendre que son répétiteur fasse tous les
                                    efforts à sa place. <br/><br/>
                                    De plus il est évident que l’étudiant devient automate. Car il aura l’art de
                                    déverser exactement ce qu’on lui dit mot à mot sans dépenser aucune force
                                    intellect pour comprendre. Cette astuce, ne rend pas intelligent, ni ne permet de
                                    réussir. Votre enfant n’aura aucun esprit de créativité.
                                    Ce qui au contraire est convenable de faire, et qui a des avantages c’est la
                                    répétition à court terme : un ou deux mois de façon cyclique.
                                    La répétition à court terme permet de booster le niveau de l’enfant, en le
                                    permettant de se défendre pour réussir avec toutes les armes en mains. Il s’agit
                                    là d’un apprentissage qui vient compléter le potentiel qu’à votre enfant. Ceci le
                                    rend sûr de lui-même, il devient indépendant et créatif. C’est comme apprendre
                                    à l’enfant toutes les techniques de pêche et le laisser seul au bord de la mer pour
                                    qu’il puisse se nourrir de lui-même. La répétition dans ce cas est instructif et
                                    productif.<br/><br/>
                                    <strong>La répétition par soi-même</strong> est la technique de se lire soi-même. C’est la
                                    méthode de se répéter soi-même. Dans le domaine littéraire par exemple, on
                                    peut se rattraper en faisant beaucoup de lecture et en revoyant les bases de
                                    grammaire, de conjugaison ou de vocabulaire.
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/GXcG5wlyJgA"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    <strong>LE JOB ETUDIANT- LE STAGE ETUDIANT- ENTREPRENARIAT</strong><br/><br/>
                                    Le job étudiant a souvent mauvaise presse : moins de temps pour les études,
                                    sous payé, etc. <br/><br/>
                                    Mais quel est l’aspect positif du job étudiant ? Bon nombre d’étudiants doivent
                                    par la force des choses, cumuler leurs études avec un job. Pas toujours adéquat,
                                    le job étudiant présente de grands avantages. <br/><br/>
                                    Le <strong>job étudiant</strong> permet d’améliorer la compétence de l’étudiant qui le pratique.
                                    Il est également une ligne supplémentaire sur ton CV ; il permet aussi de se
                                    confronter très tôt au monde du travail, nouer des relations fructueuses. Le job
                                    étudiant permet même à l’étudiant de mieux gérer son temps, d’avoir une
                                    meilleure productivité, avoir un œil global et de connaissance sur la gestion de
                                    son projet. L’étudiant développe un mental d’acier, devient autonome
                                    financièrement. Ceci emmène l’étudiant presque à la fin de sa formation à la
                                    recherche d’un stage. <br/><br/>
                                    Le <strong>stage en entreprise,</strong> est un atout nous permettant de prendre une longueur
                                    d’avance, il nous aide à découvrir dans un sens plus large notre futur métier, à
                                    obtenir une confirmation, développer des compétences, se constituer un réseau
                                    professionnel, gagner en confiance de soi. Le stage n’est pas toujours rémunéré
                                    Mais il permet entre autre d’acquérir la connaissance sur le terrain. Il est
                                    recommandé de se faire suivre par une structure en orientation scolaire et
                                    universitaire si on semble perdu. En quoi consiste l’entreprenariat ? <br/><br/>
                                    A la fin de leurs études certains étudiants semblent apeurés à la recherche d’un
                                    emploi correspondant à leur diplôme. Que faire à cette période ? Restez chez
                                    soi ? Il est convenable de faire un sondage dans le but de connaître si notre
                                    domaine est encore d’actualité. <br/><br/>
                                    Cherchez si possible une source de revenu en prenant des initiatives. Ainsi, une
                                    des solutions est l’entreprenariat. <br/><br/>
                                    <strong>L’entreprenariat</strong> est un dispositif, accessible à tous les jeunes quel que soit
                                    leur niveau de qualification. Commencez : vous serez accompagné et guidé.
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/XqQcTnM_Sfo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/4kfMLdqgMZA"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>




                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/5e61LL-dsG4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/gHN6RKhCXTk"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/Wfnk6oGXyj0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>




                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/FxAZXKgaUAg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div className={classes.textPlace}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>


                    </div>

                    <div style={{textAlign: "center"}}>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=1281746191">
                            <img className={classes.eachCarousel}  src={require("../assets/fb-logo.png")} alt=""/>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCsZN6pawvA84e5Km0553qyw">
                            <img className={classes.eachCarousel}  src={require("../assets/yb-logo.png")} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Coaching);
