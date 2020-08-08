import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";

const styles = theme => ({
    cardActu:{
        width: "50%",
        borderRadius: 10,
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgba(146, 125, 250, 0.5)",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "20px"
    },
    titleCardActu: {
        marginBottom: "10px",
        marginTop: "30px",
        fontWeight: "bold",
        whiteSpace: "pre-line"
    },
    description: {
        marginL: "10px",
        paddingLeft: "5px",
        paddingRight: "5px"
    },
});

class CardActu extends Component {
    render() {
        const {classes,title,description,onclick,image} = this.props;
        return (
            <div>
                <Card onClick={onclick} className={classes.cardActu}>
                    <div>
                        {/*<div style={{height: "340px", width:"340px"}}>*/}
                        <div>
                            {image}
                        </div>
                        <div className={classes.titleCardActu} variant="h5" component="h2">
                            {title}
                        </div>
                        <div className={classes.description} variant="body2" component="p">
                            {description}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(CardActu);
