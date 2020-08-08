import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import ActuCustom from "../utils/ActuCustom";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
});

class Actu2 extends Component {
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
                <div>
                    <ActuCustom
                        title={"La motivation : paramètre utile de réussite"}
                        description={"L’une des causes les plus courantes de l’échec est de commencer un projet sans le terminer.  L’absence de motivation en est l’une des raisons. Cela arrive à tout un chacun au moins une fois dans ses études. Malheureusement à ce moment-là on ne s’en rend pas compte, on pense faire le bon choix. On pense ainsi se décourager devant les difficultés  parce que les choses ne répondent pas à nos attentes. \n" +
                        "\n" +
                        "Le manque d’envie de persévérer dans les études par les apprenants résulte des difficultés à réussir les matières clefs et  essentielles dans les formations. Ainsi les personnes se  sentent démotivées.  Pourtant, il aurait suffi d’un peu de motivation pour que ça marche : le projet reprenne vie ou que les études deviennent une satisfaction.\n" +
                        "\n" +
                        " Naturellement, Il faut du courage et une vision pour réaliser ses rêves. Mais il en faut encore plus pour les suivre jusqu’au bout. Et pour trouver le courage et la motivation permanente, il faut connaitre la prochaine étape de ses études en amont. D’où la nécessité de faire un projet d’études et un projet professionnel pout tout apprenant organisé et prévoyant. Ceci vous permettra de connaitre les voies et les étapes à suivre quotidiennement.\n" +
                        "\n" +
                        " Il faut être ambitieux et voir grand. Plus l’ambition sera grande et plus vous serez motivé. Il faut se fixer chaque jour des objectifs en adéquation avec votre projet. En atteignant au quotidien les objectifs, vous réaliserez de grandes choses qui vous donneront envie de poursuivre et de faire encore plus d’efforts pour de meilleurs résultats.\n" +
                        "\n" +
                        "Pour un apprenant, la motivation est quasi importante pour sa réussite scolaire, universitaire et professionnelle."}
                    />
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Actu2);
