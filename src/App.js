import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from "react-bootstrap";
import CardActu from "./utils/CardActu";
import MenuBar from "./utils/MenuBar";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import ExpertisesComponents from "./utils/ExpertisesComponents";
import Pdf from '../src/othersfiles/cdabCompass.pdf';

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    signIn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        height: "700px"
    },
    header: {
    },
    imageCarousel:{
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
    },
    eachCarousel:{
        height: "100%",
        width: "100%"
    },
    carousell:{
        // height: "500px",
        width: "100%"
    },
    expertises: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    expTitle: {
        fontSize: "60px",
        fontWeight: "bold"
    },
    sTitle:{
        fontSize: "40px"
    },
    countries:{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
    },
    countriesFlag:{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    drapeau:{
        width: "95px",
        height: "60px"
    },
    actualite:{
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
    },
    actu:{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    aboutUs: {
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    cardAboutUs:{
        width: "100%",
        borderRadius: 10,
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
    },
    textAboutUs:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white"
    },
    txtUs:{
        padding: "110px",
        fontSize: 20
    },
    dwlPdf:{
        position: "relative",
        top: "80%",
        textDecoration: "none",
        width: "200px",
        height: "40px",
        border: "1px solid #EDBA2D",
        borderRadius: "6px",
        textAlign: "center",
        lineHeight: "32px",
        background: "#1d1d1da8",
        color: "#EDBA2D",
        '&:hover':{
            background: "#1d1d1d",
            textDecoration: "none",
            color: "#EDBA2D",
        }
    }



});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const {classes} = this.props;
        return (
            <div className="App">
                <div className={classes.container}>
                    <div className={classes.header}>
                        <MenuBar/>
                    </div>
                    <div className={classes.imageCarousel}>
                        <Carousel className={classes.carousell}>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/car1.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/car3.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/car2.jpg")} alt=""/></Carousel.Item>
                        </Carousel>
                    </div>

                    <div className={classes.aboutUs}>
                        <div style={{marginBottom: "100px"}}>
                            <p className={classes.expTitle}>Qui sommes-nous ?</p>
                        </div>

                        <div className={classes.textAboutUs}>
                            <Grid item xs={1}></Grid>
                            <Grid alignItems={"center"} item xs={4} className={classes.txtUs}>
                                La société éducative CDAB COMPASS, spécialisé aussi dans l’accompagnement et
                                l’orientation des apprenants sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette activité principale.
                                En effet, elle détermine et constitue le
                                socle des apprenants vers un monde professionnel adéquat. En la matière, il est doté d’une.
                            </Grid>
                            <Grid alignItems={"center"} item xs={2}>
                                <a type="button"
                                   // className="btn btn-secondary btn-lg"
                                    className={classes.dwlPdf}
                                   href={Pdf}
                                   download>Télécharger notre manuel
                                </a>
                            </Grid>
                            <Grid alignItems={"center"} item xs={4}>
                                <img style={{width: "100%"}}  src={require("./assets/lightbulb.jpg")} alt=""/>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </div>
                    </div>

                    <div className={classes.expertises}>
                        <div style={{marginBottom: "100px"}}>
                            <p className={classes.expTitle}>Nos expertises</p>
                        </div>

                        <ExpertisesComponents/>
                    </div>

                    <div className={classes.countries}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>Nous sommes actuellement présents dans 4 pays</p>
                            <p className={classes.subTitle}>N’hésitez pas à nous contacter si vous avez des questions.</p>
                        </div>

                        <div className={classes.countriesFlag} style={{textAlign: "center"}}>
                            <div><img title={"Togo"} className={classes.drapeau}  src={require("./assets/tg.png")} alt=""/></div>
                            <div><img title={"Côte d'ivoir"} className={classes.drapeau}  src={require("./assets/ci.png")} alt=""/></div>
                            <div><img title={"Sénegal"}  className={classes.drapeau}  src={require("./assets/sn.png")} alt=""/></div>
                            <div><img title={"France"} className={classes.drapeau}  src={require("./assets/fr.png")} alt=""/></div>
                        </div>
                    </div>

                    <div className={classes.actualite}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>Nos actualités</p>
                        </div>

                        <div className={classes.actu}>
                            <div>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/students4.jpg")} alt=""/>}
                                    title={"Act-4596"}
                                    description={"ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum" +
                                    "ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum" +
                                    "ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum"}
                                    onclick={()=>{alert("redirect/cardActu1")}}
                                />
                            </div>
                            <div>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/students5.png")} alt=""/>}
                                    title={"Act-99d8"}
                                    description={"ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum" +
                                    "ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum" +
                                    "ntiochensi plebi suppliciter obsecranti ut inediae dispelleret metum"}
                                    onclick={()=>{alert("redirect/cardActu2")}}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
