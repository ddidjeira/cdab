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

class Actu1 extends Component {
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
                        title={"L’importance d’un projet d’études bien élaboré"}
                        description={"La plupart du temps, l’échec des jeunes apprenants est dû au projet d’étude presque inexistant ou encore mal élaboré. Car beaucoup  se lancent dans les études sans une vision globale. Ils n’arrivent donc pas à se projeter concrètement  dans le futur.\n" +
                        "\n" +
                        "Or la réussite éducative passe d’abord par un projet  d’étude qui est l’élément vital ou encore le tremplin vers le monde professionnel.\n" +
                        "\n" +
                        "Les conditions de réussite d’un apprenant renvoient à un ensemble de facteurs : bonne orientation; projet d’étude bien élaboré,  et, méthodologie scrupuleusement respectée. " +
                        "Ces derniers, conjugués les uns aux autres et intervenant à chacune des étapes de la trajectoire scolaire, façonnent  l’apprenant pour accéder à l’université ou aux études supérieures, d’y réaliser une formation répondant à ses valeurs et compétences et d’obtenir un diplôme en vue d’une insertion socioprofessionnelle imminente.\n" +
                        "\n" +
                        "Parmi ces facteurs, le projet d’étude est très important car il  vous permet d’avoir une idée précise de votre carrière.  C’est en réalité le fil conducteur de vos études et ainsi de votre carrière. Lorsque vous avez un projet d’étude bien élaboré, vous connaissez déjà  le processus à suivre pour se développer sur tous les plans.\n" +
                        "\n" +
                        "Le projet d’étude vous permet de faire une formation adaptée avec le métier choisi, et prend en compte vos aspirations personnelles et professionnelles immédiates et futures. Ceci permet ainsi à l’apprenant d’effectuer des choix d’études et de carrière qui soient conformes et basés sur une connaissance suffisante de sa personnalité, de  ses valeurs et ses compétences."}
                    />
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Actu1);
