import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import DetailsPageBanner from "../utils/DetailsPageBanner";
import Button from "@material-ui/core/Button";

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
});

class SchoolProject extends Component {
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
                <div style={{marginTop: "100px",marginBottom: "100px"}}>
                    <DetailsPageBanner
                        image={<img className={classes.profilImage}  src={require("../assets/P4.jpg")} alt=""/>}
                        title={"Le projet d'étude national ou internationnel"}/>
                    <div className={classes.subContext}>
                        <div className={classes.subContainer}>
                            <div style={{flex: 1}}>
                                <iframe width="539" height="303" src="https://www.youtube.com/embed/MEswVvG8Atg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe></div>
                            <div style={{flex: 1}}>
                                <p style={{fontSize: "20px",textAlign:"justify"}}>
                                    CDAB COMPASS accompagne les apprenants dans l’élaboration de leurs projets d’études qui constituent pour eux un
                                    élément vital dans leur vie professionnelle. Ainsi est proposé à l’apprenant une panoplie de choix.
                                    Ces choix portent sur la filière, l’université adhérée, l’endroit idéal pour l’étude (pays), les informations
                                    à connaitre et voire les contacts à avoir. Tous ces choix sont faits principalement par l’apprenant sur conseils.
                                    Par ailleurs, la structure peut également assister les familles qui ne viennent que pour bénéficier des prestations
                                    liées à l’expertise du projet d’étude.
                                </p>
                            </div>
                        </div>
                        <Button className={classes.btnQuiz} >Passer le test</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(SchoolProject);
