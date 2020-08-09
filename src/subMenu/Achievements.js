import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";
import CardCustom from "../utils/CardCustom";
import WorkIcon from '@material-ui/icons/Work';
import PanToolIcon from '@material-ui/icons/PanTool';
import PollIcon from '@material-ui/icons/Poll';


const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cards:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "20px",
        width: "100%"
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

class Achievements extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/achievements"+path;
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.titles}>
                        <p className={classes.title}>NOS RÉALISATIONS</p>
                    </div>
                    <Row className={classes.cards}>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<WorkIcon/>}
                                title={"Visites d'entreprises"}
                                description={"La phase détection du profil demeure un mystère pour certains et une partie de jeux pour d’autres.\n" +
                                "En effet cette phase consiste à découvrir l’enfant et son environnement tout simplement."}
                                onclick={()=>{this.moreInfo("/companyVisits")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<PanToolIcon/>}
                                title={"Temoignages"}
                                description={"La structure éducative CDAB COMPASS, spécialisée aussi dans l’accompagnement et l’orientation des apprenants " +
                                "sur tous les plans scolaire, universitaire et même professionnel, accorde une importance à cette expertise."}
                                onclick={()=>{this.moreInfo("/testimonials")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <CardCustom
                                icon={<PollIcon/>}
                                title={"Rapport d'activités"}
                                description={"Un projet d’étude est une feuille de route permettant de profiler son parcours estudiantin. Le projet d’étude fait montre de" +
                                "notre volonté à atteindre l’univers professionnel. Il comporte les aspirations post-bac et post-brevet des apprenants. "}
                                onclick={()=>{this.moreInfo("/activityRepport")}}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Achievements);
