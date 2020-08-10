import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Pdf from "../othersfiles/manuel.pdf";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    eachCarousel:{
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    videoContainer: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center"
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
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#EDBA2D",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
    }
});

class Coaching extends Component {
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
                        <p className={classes.title}>COACH-CDAB</p>
                    </div>

                    <div style={{margin: "0 auto",width:"50%"}}>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/XqQcTnM_Sfo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/4kfMLdqgMZA"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} src="https://www.youtube.com/embed/ZxT95vXlEHw"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>


                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/5e61LL-dsG4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/gHN6RKhCXTk"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/Wfnk6oGXyj0"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>


                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="893" height="502" src="https://www.youtube.com/embed/GXcG5wlyJgA"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="1280" height="720" src="https://www.youtube.com/embed/FxAZXKgaUAg"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardArticle}>
                            <div className={classes.videoArt}>
                                <iframe className={classes.videoClass} width="910" height="512" src="https://www.youtube.com/embed/b36rnsBkeaU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className={classes.textArt}>
                                <div style={{margin: "0 auto", width: "70%"}}>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
                                    mise en page avant impression. Le Lorem Ipsum est le faux texte standard de
                                    l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas
                                    fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{textAlign: "center"}}>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=1281746191">
                            <img className={classes.eachCarousel}  src={require("../assets/fb-logo.png")} alt=""/>
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCsZN6pawvA84e5Km0553qyw">
                            <img className={classes.eachCarousel}  src={require("../assets/yb-logo.png")} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Coaching);
