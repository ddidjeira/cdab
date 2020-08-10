import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    cardArticle: {
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        display: "flex",
        marginBottom: "10px"
    },
    videoArt:{
        width: "50%",
        height: "100%",
        flex: 1
    },
    videoClass:{
        height: "100%",
        width: "100%"
    },
    textArt:{
        width: "50%",
        textAlign: "justify",
    }
});

class Offers extends Component {
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
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>
                    <div className={classes.cardArticle}>
                        <div className={classes.videoArt}>
                            <iframe className={classes.videoClass} width="1280" height="725" src="https://www.youtube.com/embed/8zsxbPR5hCo" frameBorder="0"
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
            </div>
        );
    }
}


export default withStyles(styles)(Offers);
