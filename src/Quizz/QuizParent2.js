import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button";
import axios from 'axios';

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containerQuizs:{
        width: "85%",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        marginBottom: "10px",
        margin: "auto",
        paddingRight: "5%",
        paddingLeft: "5%"
    },
    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(3),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: 300,
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
    radio: {
        '&$checked': {
            color: '#ff780a'
        }
    },
    checked: {}
});

class QuizParent2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: "",
            question6: "",
            question7: "",
            question8: "",
            question9: "",
            question10: "",
            question11: "",
            question12: "",
            question13: "",
            question14: "",
            question15: "",
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.name + " : "+e.target.value);
    };

    submitAnswers = () => {
        let result="<p>La qualité essentielle d’un bon parent selon vous : </p>"
        +"<h3>"+this.state.question1+"</h3>"+
            "<p>Le secret de la vraie réussite :</p>"
        +"<h3>"+this.state.question2+"</h3>"+
            "<p>Votre enfant manque de ……En fonction de votre caractère, à quoi trouvez-vous le plus\n" +
            "facilement une solution ?</p>"
        +"<h3>"+this.state.question3+"</h3>"+
            "<p>Ce que vous voudriez que votre enfant se dise à lui-même avant tout examen important</p>"
        +"<h3>"+this.state.question4+"</h3>"+
            "<p>La principale fonction de l’école d’après vous :</p>"
        +"<h3>"+this.state.question5+"</h3>"+
            "<p>Les synonymes de savoirs qui vous viennent le plus rapidement à l’esprit :</p>"
        +"<h3>"+this.state.question6+"</h3>"+
            "<p>Globalement, vous trouverez que les enseignants et professeurs aujourd’hui…</p>"
        +"<h3>"+this.state.question7+"</h3>"+
            "<p>Ce soir, négociation autour des devoirs, vous concluez par un :</p>"
        +"<h3>"+this.state.question8+"</h3>"+
            "<p>Une très bonne note arrive. Vos premiers mots ou première réaction :</p>"
        +"<h3>"+this.state.question9+"</h3>"+
            "<p>Globalement, vous trouverez qu’à l’heure actuelle, les parents sont trop :</p>"
        +"<h3>"+this.state.question10+"</h3>"+
            "<p>Quelle qualité distingue vraiment un bon élève des autres :</p>"
        +"<h3>"+this.state.question11+"</h3>"+
            "<p>La remarque qui vous met le plus en colère sur le bulletin de votre enfant :</p>"
        +"<h3>"+this.state.question12+"</h3>"+
            "<p>Quel reproche avez-vous déjà ou seriez-vous le plus susceptible d’entendre de la part\n" +
            "de votre enfant ?</p>"
        +"<h3>"+this.state.question13+"</h3>"+
            "<p>Education rime avec :</p>"
        +"<h3>"+this.state.question14+"</h3>"+
            "<p>Avoir un avenir professionnel sans études supérieures, c’est :</p>"
        +"<h3>"+this.state.question15+"</h3>";

        axios.post('/users/quiz', {
            userEmail: "fabricesumsa2000@gmail.com",
            subject: "Quiz phase 2 - parent",
            container: result
        })
            .then(res=>{
                console.log(res.data.text);
                if(res.status === 200){alert("Vos informations ont bien été transmises");}
            })
            .catch(err=>{
                if(err.response.status === 409){
                }
            })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.containerQuizs}>

                        <h3>QUEL PARENT D’ELEVE ÊTES-VOUS ?</h3><br/><br/>
                        <div>
                            <h5 component="legend">La qualité essentielle d’un bon parent selon vous :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question1" value={this.state.question1} onChange={this.handleChange}>
                                <FormControlLabel value="L’attention – pour guider son enfant au jour le jour avec efficacité." control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="L’attention – pour guider son enfant au jour le jour avec efficacité." />
                                <FormControlLabel value="La communication – pour encourager son enfant à exprimer son plein potentiel" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La communication – pour encourager son enfant à exprimer son plein potentiel" />
                                <FormControlLabel value="L’ambition – pour amener son enfant à exprimer son plein potentiel" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="L’ambition – pour amener son enfant à exprimer son plein potentiel" />
                                <FormControlLabel value="La négociation – pour motiver et aider son enfant dans toutes les situations." control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La négociation – pour motiver et aider son enfant dans toutes les situations." />
                            </RadioGroup>
                        </div>
                        <br/>
                        <div>
                            <h5 component="legend">Le secret de la vraie réussite :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question2" value={this.state.question2} onChange={this.handleChange}>
                                <FormControlLabel value="L’excellence" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="L’excellence" />
                                <FormControlLabel value="Le challenge" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le challenge" />
                                <FormControlLabel value="La confiance" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="La confiance" />
                                <FormControlLabel value="La créativité" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La créativité" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Votre enfant manque de ……En fonction de votre caractère, à quoi trouvez-vous le plus
                                facilement une solution ?</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question3" value={this.state.question3} onChange={this.handleChange}>
                                <FormControlLabel value="Le manque de volonté" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le manque de volonté" />
                                <FormControlLabel value="Le manque de solutions" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le manque de solutions" />
                                <FormControlLabel value="Le manque d’organisation" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Le manque d’organisation" />
                                <FormControlLabel value="Le manque de compréhension" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le manque de compréhension" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Ce que vous voudriez que votre enfant se dise à lui-même avant tout examen important</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question4" value={this.state.question4} onChange={this.handleChange}>
                                <FormControlLabel value="J’ai tout compris" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="J’ai tout compris" />
                                <FormControlLabel value="Je vais tous les griller !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Je vais tous les griller !" />
                                <FormControlLabel value="Je veux avoir la meilleure note, voire la mention" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Je veux avoir la meilleure note, voire la mention" />
                                <FormControlLabel value="je vais réussir, je connais tout sur le bout des doigts, c’est logique !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="je vais réussir, je connais tout sur le bout des doigts, c’est logique !" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">La principale fonction de l’école d’après vous :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question5" value={this.state.question5} onChange={this.handleChange}>
                                <FormControlLabel value="La transmission du savoir" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La transmission du savoir" />
                                <FormControlLabel value="L’apprentissage d’outils intellectuels et relationnels" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="L’apprentissage d’outils intellectuels et relationnels" />
                                <FormControlLabel value="La délivrance d’un diplôme" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="La délivrance d’un diplôme" />
                                <FormControlLabel value="Le développement des talents de l’enfant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le développement des talents de l’enfant" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Les synonymes de savoirs qui vous viennent le plus rapidement à l’esprit :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question6" value={this.state.question6} onChange={this.handleChange}>
                                <FormControlLabel value="Connaissance / expériences" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Connaissance / expériences" />
                                <FormControlLabel value="Apprentissage / compétences" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Apprentissage / compétences" />
                                <FormControlLabel value="Intelligence / bagages" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Intelligence / bagages" />
                                <FormControlLabel value="Culture / érudition" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Culture / érudition" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Globalement, vous trouverez que les enseignants et professeurs aujourd’hui…</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question7" value={this.state.question7} onChange={this.handleChange}>
                                <FormControlLabel value="Ne savent pas donner l’envie d’apprendre et de se dépasser" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Ne savent pas donner l’envie d’apprendre et de se dépasser" />
                                <FormControlLabel value="Sont clairement déprimés et déprimants pour certains" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Sont clairement déprimés et déprimants pour certains" />
                                <FormControlLabel value="Ne se font pas assez respecter" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Ne se font pas assez respecter" />
                                <FormControlLabel value="Ne peuvent et ne doivent pas endosser tous les rôles" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Ne peuvent et ne doivent pas endosser tous les rôles" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Ce soir, négociation autour des devoirs, vous concluez par un :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question8" value={this.state.question8} onChange={this.handleChange}>
                                <FormControlLabel value="Bon, tu fais tes devoirs maintenant !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Bon, tu fais tes devoirs maintenant !" />
                                <FormControlLabel value="Fais tes devoirs d’abord, on verra ensuite..." control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Fais tes devoirs d’abord, on verra ensuite..." />
                                <FormControlLabel value="Tôt ou tard tu devras les faire, que tu le veuilles ou non" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Tôt ou tard tu devras les faire, que tu le veuilles ou non" />
                                <FormControlLabel value="Prends vingt minutes pour toi, puis fais tes devoirs sans traîner" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Prends vingt minutes pour toi, puis fais tes devoirs sans traîner" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Une très bonne note arrive. Vos premiers mots ou première réaction :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question9" value={this.state.question9} onChange={this.handleChange}>
                                <FormControlLabel value="C’est bien ! (Mais vous n’en faites pas trop non plus, c’est une note)" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="C’est bien ! (Mais vous n’en faites pas trop non plus, c’est une note)" />
                                <FormControlLabel value="Bravo, continue comme ça !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Bravo, continue comme ça !" />
                                <FormControlLabel value="Tu peux être fier(e) de toi !" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Tu peux être fier(e) de toi !" />
                                <FormControlLabel value="Vous êtes contente (e) et fier (e) surtout si c’est la meilleure ou la note maximale" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Vous êtes contente (e) et fier (e) surtout si c’est la meilleure ou la note maximale" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Globalement, vous trouverez qu’à l’heure actuelle, les parents sont trop :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question10" value={this.state.question10} onChange={this.handleChange}>
                                <FormControlLabel value="Laxistes" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Laxistes" />
                                <FormControlLabel value="Mous" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Mous" />
                                <FormControlLabel value="Sur le dos des gamins" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Sur le dos des gamins" />
                                <FormControlLabel value="Stresses" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Stressés" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Quelle qualité distingue vraiment un bon élève des autres :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question11" value={this.state.question11} onChange={this.handleChange}>
                                <FormControlLabel value="La créativité" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La créativité" />
                                <FormControlLabel value="La persévérance" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La persévérance" />
                                <FormControlLabel value="L’intelligence" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="L’intelligence" />
                                <FormControlLabel value="Le travail" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Le travail" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">La remarque qui vous met le plus en colère sur le bulletin de votre enfant :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question12" value={this.state.question12} onChange={this.handleChange}>
                                <FormControlLabel value="Elève indiscipliné et irrespectueux" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Elève indiscipliné et irrespectueux" />
                                <FormControlLabel value="Travaille quand ça lui chante" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Travaille quand ça lui chante" />
                                <FormControlLabel value="Elève bien en dessous de ses capacités" control={<Radio
                                        classes={{root: classes.radio, checked: classes.checked}}/>} label="Elève bien en dessous de ses capacités" />
                                <FormControlLabel value="Paresseux et arrogant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Paresseux et arrogant" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Quel reproche avez-vous déjà ou seriez-vous le plus susceptible d’entendre de la part
                                de votre enfant ?</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question13" value={this.state.question13} onChange={this.handleChange}>
                                <FormControlLabel value="Tu es trop sur mon dos !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tu es trop sur mon dos !" />
                                <FormControlLabel value="Tu ne me fais pas assez confiance" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tu ne me fais pas assez confiance" />
                                <FormControlLabel value="T’avais dit que tu m’aiderais …" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="T’avais dit que tu m’aiderais …" />
                                <FormControlLabel value="Tu es trop sévère" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tu es trop sévère" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Education rime avec :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question14" value={this.state.question14} onChange={this.handleChange}>
                                <FormControlLabel value="Supervision" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Supervision" />
                                <FormControlLabel value="Compréhension" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Compréhension" />
                                <FormControlLabel value="Motivation" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Motivation" />
                                <FormControlLabel value="Mission" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Mission" />
                            </RadioGroup>
                        </div><br/>
                        <div>
                            <h5 component="legend">Avoir un avenir professionnel sans études supérieures, c’est :</h5>
                            <RadioGroup style={{display: "block"}}
                                        name="question15" value={this.state.question15} onChange={this.handleChange}>
                                <FormControlLabel value="Fortement compromis, il ne faut pas se mentir" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Fortement compromis, il ne faut pas se mentir" />
                                <FormControlLabel value="Clairement impossible quand on ambitionne une carrière prestigieuse." control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Clairement impossible quand on ambitionne une carrière prestigieuse." />
                                <FormControlLabel value="Mal parti, la réussite c’est un état d’esprit !" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Mal parti, la réussite c’est un état d’esprit !" />
                                <FormControlLabel value="Difficile mais pas impossible, de nombreuses personnes réussissent sans grands diplômes." control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Difficile mais pas impossible, de nombreuses personnes réussissent sans grands diplômes." />
                            </RadioGroup>
                        </div>
                    </div>

                    <div style={{textAlign: "center", margin: "30px"}}>
                        <Button className={classes.btnQuiz}
                                onClick={this.submitAnswers}
                        >
                            Envoyer
                        </Button>
                    </div>

                </div>
            </div>
        );
    }
}


export default withStyles(styles)(QuizParent2);
