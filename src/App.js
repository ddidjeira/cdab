import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel, Col, Modal, Row} from "react-bootstrap";
import CardActu from "./utils/CardActu";
import MenuBar from "./utils/MenuBar";
import Grid from "@material-ui/core/Grid";
import ExpertisesComponents from "./utils/ExpertisesComponents";
import Pdf from '../src/othersfiles/manuel.pdf';
import Button from "react-bootstrap/Button";
// import Modal from "@material-ui/core/Modal";

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
        height: "550px",
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
        justifyContent: "space-evenly",
        width: "100%"
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
        backgroundColor: "#E58F1E",
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
    },
    videoPres:{
        // width: "80%",
        // height: "80%",
        // margin: "7% auto",

        textAlign: "center",
        height: "100%",
        paddingTop: "8%",
    },
    ModalContent:{
        width: "700px",
        marginTop: '10%',
        marginBottom: '10%',
        maxWidth: "50% !important"
    }

});

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
        };
    }

    handleOpenModal = (e) =>{
        this.setState({openModal: true});
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };



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
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/NP1.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P8.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/NP2.jpg")} alt=""/></Carousel.Item>

                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P14.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P4.jpg")} alt=""/></Carousel.Item>

                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P10.JPG")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P5.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P3.JPG")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P7.jpg")} alt=""/></Carousel.Item>
                            <Carousel.Item ><img className={classes.eachCarousel}  src={require("./assets/P9.JPG")} alt=""/></Carousel.Item>
                        </Carousel>
                    </div>

                    <div className={classes.aboutUs}>
                        <div style={{marginBottom: "100px"}}>
                            <p className={classes.expTitle}>QUI SOMMES-NOUS ?</p>
                        </div>

                        <div className={classes.textAboutUs}>
                            {/*<Grid item xs={1}></Grid>*/}
                            <Grid alignItems={"center"} item xs={6} className={classes.txtUs}>
                                La structure éducative CDAB COMPASS, spécialisée dans l’accompagnement et l’orientation des apprenants sur tous les plans scolaire,
                                universitaire et même professionnel, aide les apprenants à renforcer leur niveau et à s’orienter pour atteindre leur objectif professionnel.
                                En effet, elle détermine et constitue le socle des apprenants vers un monde professionnel adéquat. En la matière, elle est dotée d’une expérience
                                de plus de dix ans (10 ans) ayant fait ses preuves en France, au Sénégal, en Côte d’Ivoire et au Togo.
                            </Grid>
                            <Grid alignItems={"center"} item xs={1}>
                                <a type="button"
                                    className={classes.dwlPdf}
                                    onClick={this.handleOpenModal}
                                   >En savoir plus
                                </a>
                                <Modal dialogClassName ={classes.ModalContent} show={this.state.openModal} onHide={this.handleCloseModal}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <img style={{width: "100%"}}  src={require("./othersfiles/manuel.png")} alt=""/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleCloseModal}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Grid>
                            <Grid alignItems={"center"} item xs={5}>
                                {/*<img style={{width: "100%"}}  src={require("./assets/lightbulb.jpg")} alt=""/>*/}
                                <div className={classes.videoPres}>
                                    <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </Grid>
                            {/*<Grid item xs={1}></Grid>*/}
                        </div>
                    </div>

                    <div className={classes.expertises}>
                        <div style={{marginBottom: "100px"}}>
                            <p className={classes.expTitle}>NOS EXPERTISES</p>
                        </div>

                        <ExpertisesComponents/>
                    </div>

                    <div className={classes.countries}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>Nous sommes actuellement présents dans 4 pays</p>
                        </div>

                        <div className={classes.countriesFlag} style={{textAlign: "center"}}>
                            <div><img title={"France"} className={classes.drapeau}  src={require("./assets/fr.png")} alt=""/></div>
                            <div><img title={"Sénegal"}  className={classes.drapeau}  src={require("./assets/sn.png")} alt=""/></div>
                            <div><img title={"Côte d'ivoire"} className={classes.drapeau}  src={require("./assets/ci.png")} alt=""/></div>
                            <div><img title={"Togo"} className={classes.drapeau}  src={require("./assets/tg.png")} alt=""/></div>
                        </div>

                        <div style={{marginTop: "50px",textAlign: "center"}}>
                            <p className={classes.subTitle}>N’hésitez pas à nous contacter en ligne si vous êtes dans un autre pays.</p>
                        </div>
                    </div>

                    <div className={classes.actualite}>
                        <div style={{marginBottom: "50px",textAlign: "center"}}>
                            <p className={classes.sTitle}>NOS ACTUALITES</p>
                        </div>

                        <Row className={classes.actu}>
                            <Col xs={12} md={6} lg={4}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu1.jpg")} alt=""/>}
                                    title={"L’importance d’un projet d’études bien élaboré"}
                                    description={"La plupart du temps, l’échec des jeunes apprenants " +
                                    "est dû au projet d’étude presque inexistant ou encore mal élaboré. " +
                                    "Car beaucoup  se lancent dans les études sans une vision globale. …"}
                                    onclick={()=>{window.location="/actu/1"}}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu2.jpg")} alt=""/>}
                                    title={"La motivation : paramètre utile de réussite"}
                                    description={"L’une des causes les plus courantes de l’échec est de" +
                                    " commencer un projet sans le terminer.  L’absence de motivation en " +
                                    "est l’une des raisons. Cela arrive à tout un chacun …"}
                                    onclick={()=>{window.location="/actu/2"}}
                                />
                            </Col>
                            <Col xs={12} md={6} lg={4}>
                                <CardActu
                                    image={<img style={{height: "100%"}} src={require("./assets/actu3.jpg")} alt=""/>}
                                    title={"L’importance d’une bonne orientation"}
                                    description={"Un projet professionnel se définit d’après les objectifs " +
                                    "professionnels qui sont eux-mêmes le bilan du vécu, de la personnalité, des " +
                                    "intérêts, des aptitudes, des motivations et des valeurs. Toute prise …"}
                                    onclick={()=>{window.location="/actu/3"}}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
