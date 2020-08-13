import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";
import {Modal} from "react-bootstrap";
import Pdf from '../assets/depositFiles/contract.pdf';
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";

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


    ModalContent:{
        width: "700px",
        marginTop: '10%',
        marginBottom: '10%',
        maxWidth: "50% !important"
    },
    snackRoot: {
        backgroundColor: "red",
        color: "white"
    }
});

class StudentDeposit extends Component {
    constructor(props){
        super(props);
        this.state = {
            openModal: false,
            openAlert: false,
        };
    }


    handleOpenModal = (e) =>{
        this.setState({openModal: true});
    };

    handleCloseAlert = (e,reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({openAlert:false});
    };

    downloadPdf = () => {
        if(localStorage.getItem("token") !== null){
            window.open(Pdf);
        }else{
            //alert("Veuillez tout d'abord créer un compte ou vous connecter!");
            this.setState({openAlert:true});
            // window.location.href = '/login';
        }
    };

    handleCloseModal = (e) =>{
        this.setState({openModal: false});
    };

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
                        <Button className={classes.btnQuiz}  onClick={this.handleOpenModal}>
                            Contrat de caution bancaire
                        </Button>
                        <Modal dialogClassName ={classes.ModalContent} show={this.state.openModal} onHide={this.handleCloseModal}>
                            <Modal.Header closeButton>
                                <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                    Telecharger
                                </Button>
                            </Modal.Header>
                            <Modal.Body>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St1.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St2.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St3.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St4.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St5.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St6.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St7.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St8.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St9.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St10.png")} alt=""/>
                                <img style={{width: "100%"}}  src={require("../assets/depositFiles/St11.png")} alt=""/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{backgroundColor: "#FF9800",color: "white"}} onClick={this.downloadPdf}>
                                    Telecharger
                                </Button>
                                <Button variant="secondary" onClick={this.handleCloseModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Snackbar
                            bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            open={this.state.openAlert}
                            autoHideDuration={7000}
                            onClose={this.handleCloseAlert}
                            message="Veuillez tout d'abord vous connecter ou créer un compte !"
                            action={
                                <React.Fragment>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleCloseAlert}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </React.Fragment>
                            }
                            ContentProps={{
                                classes: {
                                    root: classes.snackRoot
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(StudentDeposit);
