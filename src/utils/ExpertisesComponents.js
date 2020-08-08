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
        width: "100%"
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
                            description={"La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.\n" +
                            "En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement."}
                            onclick={()=>{this.moreInfo("/studentProfil")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<AccountCircleIcon/>}
                            title={"Accompagnement et orientation scolaire"}
                            description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                            "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
                            onclick={()=>{this.moreInfo("/scolarOrientation")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<SchoolIcon/>}
                            title={"Projet d’étude national \n ou international"}
                            description={"Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de" +
                            "notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants. "}
                            onclick={()=>{this.moreInfo("/schoolProject")}}
                        />
                    </Col>
                </Row>
                <Row className={classes.cards}>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<MenuBookIcon/>}
                            title={"Soutien scolaire - Répétition"}
                            description={"Suivant les différentes caractéristiques de l’apprenant, un soutien scolaire à court (deux mois maximum) ou " +
                            "moyen terme (mois alternatif) est mis en place. Il permet de travailler l’autonomie de ce dernier. Ce soutien scolaire " +
                            "(encore appelée répétition) est libre et au rythme convenu avec la famille."}
                            onclick={()=>{this.moreInfo("/tutoring")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<AccountBalanceWalletIcon/>}
                            title={"Caution étudiante à l’étranger"}
                            description={"Dans le souci de propulser le projet d’étude des apprenants ou parents de CDABCOMPASS, " +
                            "la société éducative offre une caution bancaire aux apprenants désireux de faire leurs études à l’étranger" +
                            " par exemple en France."}
                            onclick={()=>{this.moreInfo("/studentDeposit")}}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <CardCustom
                            icon={<HomeIcon/>}
                            title={"Logement étudiant à l’étranger"}
                            description={"L’accompagnement hébergement consiste pour CDAB COMPASS à alléger la tâche et le souci" +
                            " de la recherche d’un logement, aux apprenants. Ainsi la structure prend sur elle la charge de faire la" +
                            " recherche des logements aux apprenants. Ces logements répondent au standard minimum requis pour le logement étudiant en France "}
                            onclick={()=>{this.moreInfo("/studentHousing")}}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withStyles(styles)(ExpertisesComponents);
