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

class Actu3 extends Component {
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
                        title={"L’importance d’une bonne orientation"}
                        description={"Un projet professionnel se définit d’après les objectifs professionnels qui sont eux-mêmes le bilan du vécu, de la personnalité, des intérêts, des aptitudes, des motivations et des valeurs. Toute prise de décision doit se faire par rapport à notre projet professionnel définit au préalable.\n" +
                        "\n" +
                        "La notion de projet professionnel est généralement associée à un objectif, une stratégie (plan d’actions), aux moyens et ressources que l’on pourra mobiliser selon le calendrier défini à l’avance.\n" +
                        "\n" +
                        "Dans le cas du projet professionnel, l’objectif est le métier visé ; la stratégie est le plan d’actions établi pour atteindre l’objectif ; les moyens et ressources sont par exemple le temps (l’argent) dont on dispose, la formation, les qualités et aptitudes, les compétences ou encore le réseau des relations pouvant " +
                        "être mobilisé ; le calendrier est le déroulement des étapes dans le temps.\n" +
                        "\n" +
                        "Le projet professionnel n’est pas établi une bonne fois pour toutes. Il évolue en permanence, en fonction de l’avancée dans la vie, des changements de situations, l’environnement et les opportunités. Il est personnel dans le sens où il correspond à vos motivations et à la façon dont vous vous projetez dans " +
                        "l’avenir et dans votre vie professionnelle. Il doit être réaliste face aux opportunités du marché de l’emploi et réalisable (compte tenu des aptitudes et des compétences de l’apprenant.)\n" +
                        "\n" +
                        "Le fait de définir un objectif professionnel assorti aux moyens va : donner un sens à votre formation, vous motiver et vous donner de l’assurance ; vous permettre d’être efficace dans vos recherches, en ciblant les segments de marché et les opportunités qui vous correspondent le mieux ; aide les recruteurs à comprendre qui vous êtes, dans quelle dynamique vous vous inscrivez et à vous orienter vers un emploi qui vous correspond ; vous aider à faire plus rapidement et plus sereinement des choix ( formation ou emploi) ; vous permettre de définir les étapes et actions à mener . Il parait donc évident que tout apprenant ait un projet professionnel bien élaboré et bien suivi."}
                    />
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Actu3);
