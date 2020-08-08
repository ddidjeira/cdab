import React, {Component} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card/Card";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    cardContainer:{
        width: "80%",
        margin: "0 auto",
        borderRadius: 10,
        textAlign: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        cursor: "pointer",
        marginBottom: "5px",
        height: "310px",
    },
    iconCard: {
        fontSize: 14,
        color: "#E58F1E"
    },
    titleCard: {
        marginBottom: "10px",
        marginTop: "30px",
        color: "black",
        fontWeight: 700,
        borderBottom: "5px solid",
        borderColor: "#ff8227 !important",
        whiteSpace: "pre-line"
    },
    description: {
        marginBottom: "20px",
        marginTop: "10px",
    },
});

class CardCustom extends Component {
    render() {
        const {classes,title,description,onclick,icon} = this.props;
        return (
            <div>
                <Card onClick={onclick} className={classes.cardContainer}>
                    <CardContent>
                        <Typography className={classes.iconCard} color="textSecondary" gutterBottom>
                            {icon}
                        </Typography>
                        <Typography style={{whiteSpace: "pre-line"}} className={classes.titleCard} variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.description} variant="body2" component="p">
                            {description}
                        </Typography>

                        <Button style={{color: "#BA4A1A"}} onClick={onclick} size="small">En savoir plus</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}


export default withStyles(styles)(CardCustom);
