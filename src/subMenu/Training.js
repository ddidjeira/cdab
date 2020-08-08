import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import CardCustom from "../utils/CardCustom";
import SchoolIcon from '@material-ui/icons/School';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MenuBar from "../utils/MenuBar";

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

class Training extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    moreInfo = (path) =>{
        // alert("more info"+path);
        window.location = "/training"+path;
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
                        <p className={classes.title}>TRANING</p>
                    </div>
                    <Row className={classes.cards}>
                        <Col xs={12} md={6} lg={5}>
                            <CardCustom
                                icon={<SchoolIcon/>}
                                title={"Formations"}
                                description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                                "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                                "quae per multas difficilisque causas adfore iam sperabatur"}
                                onclick={()=>{this.moreInfo("/formations")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={5}>
                            <CardCustom
                                icon={<HomeWorkIcon/>}
                                title={"Stages"}
                                description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                                "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                                "quae per multas difficilisque causas adfore iam sperabatur"}
                                onclick={()=>{this.moreInfo("/intership")}}
                            />
                        </Col>
                    </Row>
                    <Row className={classes.cards}>
                        <Col xs={12} md={6} lg={5}>
                            <CardCustom
                                icon={<ReceiptIcon/>}
                                title={"Conseils - Cvs - Lettres de motivations"}
                                description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                                "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                                "quae per multas difficilisque causas adfore iam sperabatur"}
                                onclick={()=>{this.moreInfo("/advices")}}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={5}>
                            <CardCustom
                                icon={<BusinessCenterIcon/>}
                                title={"Nos offres"}
                                description={"Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset,\n" +
                                "Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum,\n" +
                                "quae per multas difficilisque causas adfore iam sperabatur"}
                                onclick={()=>{this.moreInfo("/offers")}}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Training);
