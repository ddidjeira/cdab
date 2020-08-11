import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import {Col, Row} from "react-bootstrap";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    locaux:{
        // width: "400px",
        height: "400px"
    },
    loc:{
        marginBottom: "20px",
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px"
    },
});

class CompanyVisits extends Component {
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
                    <h1 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Polyclinique Internationale St. Joseph</h1>
                    <Row className={classes.loc}>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc1.jpg")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc2.JPG")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc3.jpg")} alt=""/>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row className={classes.loc}>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc4.jpg")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc5.JPG")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Vc6.JPG")} alt=""/>
                        </Col>
                    </Row>
                    <br/><br/>
                    <h1 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Radio Lomé</h1>
                    <Row className={classes.loc}>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Rl1.JPG")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Rl2.JPG")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Rl3.JPG")} alt=""/>
                        </Col>
                    </Row>
                    <h1 style={{display: "inline",marginLeft:"20px",marginRight:"20px"}}>Deloitte - CFAO</h1>
                    <Row className={classes.loc}>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Del1.jpg")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Del2.jpg")} alt=""/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <img title={"Côte d'ivoire"} className={classes.locaux}  src={require("../assets/Del3.jpg")} alt=""/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(CompanyVisits);
