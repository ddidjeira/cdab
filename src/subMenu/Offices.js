import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
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
    drapeau:{
        width: "95px",
        height: "60px",
        marginBottom: "10px"
    },
    offices:{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    },
    locaux:{
        width: "400px",
        height: "400px"
    },
    loc:{
        marginBottom: "20px",
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px"
    },
});

class Office extends Component {
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
                        <p className={classes.title}>Nos locaux</p>
                    </div>
                    <div className={classes.offices}>
                        <div >
                            <div >
                                <img title={"France"} className={classes.drapeau}  src={require("../assets/fr.png")} alt=""/>
                                <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>France</h3>
                                <img title={"France"} className={classes.drapeau}  src={require("../assets/fr.png")} alt=""/>
                                <Row className={classes.loc}>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"France"} className={classes.locaux}  src={require("../assets/Ll1.jpeg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"France"} className={classes.locaux}  src={require("../assets/Ll2.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"France"} className={classes.locaux}  src={require("../assets/Ll3.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"France"} className={classes.locaux}  src={require("../assets/Ll4.jpeg")} alt=""/>
                                    </Col>
                                </Row>
                            </div>
                            <br/><br/>
                            <div >
                                <img title={"Sénégal"} className={classes.drapeau}  src={require("../assets/sn.png")} alt=""/>
                                <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Sénégal</h3>
                                <img title={"Sénégal"} className={classes.drapeau}  src={require("../assets/sn.png")} alt=""/>
                                <Row className={classes.loc}>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"Sénégal"} className={classes.locaux}  src={require("../assets/Sn1.JPG")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"Sénégal"} className={classes.locaux}  src={require("../assets/Sn2.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"Sénégal"} className={classes.locaux}  src={require("../assets/Sn3.jpg")} alt=""/>
                                    </Col>
                                    <Col xs={12} md={6} lg={3}>
                                        <img title={"Sénégal"} className={classes.locaux}  src={require("../assets/Sn4.jpg")} alt=""/>
                                    </Col>
                                </Row>
                            </div>
                            <br/><br/>
                            <img title={"Côte d'ivoire"} className={classes.drapeau}  src={require("../assets/ci.png")} alt=""/>
                            <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Côte d'ivoire</h3>
                            <img title={"Côte d'ivoire"} className={classes.drapeau}  src={require("../assets/ci.png")} alt=""/>
                            <Row className={classes.loc}>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci1.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci2.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci3.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci4.jpg")} alt=""/>
                                </Col>
                            </Row>
                            <br/><br/>
                            <img title={"Togo"} className={classes.drapeau}  src={require("../assets/tg.png")} alt=""/>
                            <h3 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Togo</h3>
                            <img title={"Togo"} className={classes.drapeau}  src={require("../assets/tg.png")} alt=""/>
                            <Row className={classes.loc}>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Togo"} className={classes.locaux}  src={require("../assets/Tg1.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Togo"} className={classes.locaux}  src={require("../assets/Tg2.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Togo"} className={classes.locaux}  src={require("../assets/Tg3.jpg")} alt=""/>
                                </Col>
                                <Col xs={12} md={6} lg={3}>
                                    <img title={"Togo"} className={classes.locaux}  src={require("../assets/Tg4.jpg")} alt=""/>
                                </Col>
                            </Row>
                            {/*<Row className={classes.loc}>*/}
                            {/*    <Col xs={12} md={6} lg={3}>*/}
                            {/*        <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci5.jpg")} alt=""/>*/}
                            {/*    </Col>*/}
                            {/*    <Col xs={12} md={6} lg={3}>*/}
                            {/*        <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci6.jpg")} alt=""/>*/}
                            {/*    </Col>*/}
                            {/*    <Col xs={12} md={6} lg={3}>*/}
                            {/*        <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci7.jpg")} alt=""/>*/}
                            {/*    </Col>*/}
                            {/*    <Col xs={12} md={6} lg={3}>*/}
                            {/*        <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Ci8.jpg")} alt=""/>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Office);
