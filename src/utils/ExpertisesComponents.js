import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import SchoolIcon from '@material-ui/icons/School';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import CardCustom from "./CardCustom";
import {Col, Container, Row} from "react-bootstrap";

const styles = theme => ({
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
    },
});

class ExpertisesComponents extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }


    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/expertises"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div style={{width: "100%"}}>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<FindInPageIcon/>}
                            title={"Détection du profil de l'apprenant"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/studentProfil")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<AccountCircleIcon/>}
                            title={"Accompagnement et orientation scolaire"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/scolarOrientation")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<SchoolIcon/>}
                            title={"Projet d’étude national ou international"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/schoolProject")}}
                        />
                    </Col>
                </Row>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<MenuBookIcon/>}
                            title={"Soutien scolaire (répétitions)"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/tutoring")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<AccountBalanceWalletIcon/>}
                            title={"Caution étudiante à l’étranger"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/studentDeposit")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<HomeIcon/>}
                            title={"Logement étudiant à l’étranger"}
                            description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                            "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                            "quae per multas difficilisque causas adfore iam sperabatur"}
                            onclick={()=>{this.moreInfo("/studentHousing")}}
                        />
                    </Col>
                </Row>
                {/*<div className={classes.cards}>*/}
                {/*    <CardCustom*/}
                {/*        icon={<FindInPageIcon/>}*/}
                {/*        title={"Détection du profil de l'apprenant"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/studentProfil")}}*/}
                {/*    />*/}
                {/*    <CardCustom*/}
                {/*        icon={<AccountCircleIcon/>}*/}
                {/*        title={"Accompagnement et orientation scolaire"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/scolarOrientation")}}*/}
                {/*    />*/}
                {/*    <CardCustom*/}
                {/*        icon={<SchoolIcon/>}*/}
                {/*        title={"Projet d’étude national ou international"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/schoolProject")}}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div className={classes.cards}>*/}
                {/*    <CardCustom*/}
                {/*        icon={<MenuBookIcon/>}*/}
                {/*        title={"Soutien scolaire (répétitions)"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/tutoring")}}*/}
                {/*    />*/}
                {/*    <CardCustom*/}
                {/*        icon={<AccountBalanceWalletIcon/>}*/}
                {/*        title={"Caution étudiante à l’étranger"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/studentDeposit")}}*/}
                {/*    />*/}
                {/*    <CardCustom*/}
                {/*        icon={<HomeIcon/>}*/}
                {/*        title={"Logement étudiant à l’étranger"}*/}
                {/*        description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +*/}
                {/*        "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +*/}
                {/*        "quae per multas difficilisque causas adfore iam sperabatur"}*/}
                {/*        onclick={()=>{this.moreInfo("/studentHousing")}}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default withStyles(styles)(ExpertisesComponents);
