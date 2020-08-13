import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
});

class Formations extends Component {
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
                <div style={{marginTop: "200px",marginRight:"200px",marginLeft:"200px"}}>
                    Pourquoi se former ?<br/><br/>
                    <strong>La formation</strong> peut se définir du point de vu général comme étant un apprentissage de
                        connaissances et de méthodes de travail mais aussi d’une expérimentation nouvelle dans divers
                        domaines. Elle permet l’adaptation à un autre cadre, le développement du potentiel d’un individu
                        à un autre.
                    <br/><br/>
                    Et face aux mutations actuelles du monde notamment la transition numérique, la formation à tous
                    les niveaux d’aujourd’hui est plus que nécessaire.
                    <br/><br/>
                    Mais fort est de constater que la plupart du temps, la formation à l’école et à tout ce qui va avec
                    (devoirs, examens, notes, cours à apprendre par cœur) est associé ou du moins confondue à celle
                    qui est une acquisition de compétences nouvelles dans divers domaines. Cependant, l’école ne
                    représente qu’un type d’apprentissage. Il existe de nombreuses autres manières de se former, de
                    développer de nouvelles compétences, et ce tout au long de sa vie. Se former n’est donc pas
                    réservé aux élèves et aux étudiants, tout le monde a le droit de se former et cela à tout moment.
                    <br/><br/>
                    Dans le cadre professionnel, la formation par alternance est recommandée. Elle devient alors
                    un tremplin pour l’insertion professionnelle. On parlera dans ce cas de la formation
                    professionnelle continue qui est un droit individuel qui permet à toute personne, une fois entrée
                    dans la vie active, de continuer à se former.
                    <br/><br/>
                    Se former, acquérir de nouvelles connaissances et de nouveaux savoir-faire ne doit pas être vue
                    comme une corvée. Bien au contraire, se former doit être une source de plaisir et
                    d’épanouissement personnel. La première raison évidente est l’actualisation de ses compétences
                    en vue d’une adaptation permanente.
                    <br/><br/>
                    L’on pourrait regrouper les avantages de se former en permanence en quatre grands groupes à
                    savoir :
                    <br/><br/>
                    <ol>
                        <li>On ne se forme pas une fois pour toutes pendant la durée de ses études. Cela reviendrait à
                            considérer que nos capacités sont gravées dans le marbre et qu’on n’évolue pas par la
                            suite.</li>
                        <li>Toutes les expériences d’apprentissage sont importantes pour accroître sa confiance en
                            soi et son estime de soi. Vous voyez ainsi concrètement que vous êtes capable
                            d’apprendre de nouveaux savoirs et d’intégrer de nouvelles clés pour avancer dans vos
                            projets et rêves de vie.</li>
                        <li>Vous avez ainsi un avantage par rapport aux personnes qui ne se forment pas, car se
                            former permet d’utiliser rapidement des concepts et des solutions que d’autres ont mis
                            des années à comprendre.</li>
                        <li>Enfin la formation vous permet tout simplement d’évoluer plus vite.</li>
                    </ol>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Formations);
