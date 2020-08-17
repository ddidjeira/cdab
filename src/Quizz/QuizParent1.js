import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import TextField from "@material-ui/core/TextField/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

class QuizParent1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastName: localStorage.getItem("lastName"),
            firstName: localStorage.getItem("firstName"),
            age: "",
            profession: "",
            totalchildren: "",
            importantProjects: "",
            childPrediction1 : "",
            childPrediction2 : "",
            childPrediction3 : "",
            childPrediction4 : "",
            testRaison: "",
            afraidBcfLifeUnkwon: "",
            afraidBcfOfchildDiff: "",
            afraidToContchildLife: "",
            nervousBcfOfchildLife: "",
            canYouFinishchildSch : "",
            didUthkSchIsGood: "",
            afraidMkChildSchGood: "",
            canUsettleConflicts: "",
            canUmasterEventChild: "",
            didUangryWtChild: "",
            feelThatIsTooMuch: "",

            feelTenseWhThToChild: "",
            haveFunWthChildLikeBef: "",
            afraidToFeelSmth: "",
            laughWthThem: "",
            afraidLifeOfMyChild: "",
            feelHappyThOfThem: "",
            feelCoolWhTheyAreBusy: "",
            slowMotionTheyLife: "",
            feelBadWhThksOfThem: "",
            dontSeeThAppearance: "",
            imFeelHappyToThScol: "",
            imFeelHappyToTalkAbtThem: "",

            iCanPayHisScolar: "",
            iWantBourseForTh: "",
            iHaveSomeGoods: "",
            iThkToTakeAloan: "",
            iCanCountFamily: "",
            iDontWantToPay: ""
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.name + " : "+e.target.value);
    };

    submitAnswers = (e) => {
        e.preventDefault();
        let result = "<p>Nom : </p><h3>"+this.state.lastName+"</h3>"+
            "<p>Prénoms : </p><h3>"+this.state.firstName+"</h3>"+
            "<p>Votre age : </p><h3>"+this.state.firstName+"</h3>"+
            "<p>Votre profession : </p><h3>"+this.state.profession+"</h3>"+
            "<p>Combien d’enfants avez-vous ? : </p><h3>"+this.state.totalchildren+"</h3>"+
            "<p style={{color: 'rgba(0, 0, 0, 0.54)'}}>Classez les projets par priorité de 1 à 6</p>"+
            "<ol><li>Education de mes enfants</li>" +
            "<li>Me réaliser personnellement et professionnellement</li>" +
            "<li>Projet immobilier : construire ou acheter une maison</li>" +
            "<li>Acheter une voiture</li>" +
            "<li>Relations familiales</li>" +
            "<li>Autres</li>" +
            "</ol>"+
            "<p>L'éducation des enfants</p>"+
            "<p>Enfant1 : </p><h3>"+this.state.childPrediction1+"</h3>"+
            "<p>Enfant2 : </p><h3>"+this.state.childPrediction2+"</h3>"+
            "<p>Enfant3 : </p><h3>"+this.state.childPrediction3+"</h3>"+
            "<p>Enfant4 : </p><h3>"+this.state.childPrediction4+"</h3>"+
            "<p>Pourquoi avez – vous décidé de faire une démarche d’orientation professionnelle pour\n" +
            "votre enfant ? </p><h3>"+this.state.testRaison+"</h3>"+
            "<p>Etes-vous inquiet pour l’avenir professionnel de votre enfant à cause\n" +
            "d’évènements inattendus dans la vie ? </p><h3>"+this.state.afraidBcfLifeUnkwon+"</h3>"+
            "<p>Avez-vous senti que des difficultés s&#39;accumulaient à un tel point pour l’enfant que " +
            "vous ne pourriez plus les surmonter ?</p><h3>"+this.state.afraidBcfOfchildDiff+"</h3>"+
            "<p>Avez-vous le sentiment de ne plus être plus être capable de contrôler les choses " +
            "importantes dans la vie de l’enfant ?</p><h3>"+this.state.afraidToContchildLife+"</h3>"+
            "<p>Vous êtes-vous senti(e) nerveux (se) et stressé(e) par rapport à la vie de votre " +
            "enfant ?</p><h3>"+this.state.nervousBcfOfchildLife+"</h3>"+
            "<p>Vous sentez-vous confiant en votre capacité à accompagner votre enfant jusqu’à " +
            "l’aboutissement de ses études ?</p><h3>"+this.state.canYouFinishchildSch+"</h3>"+
            "<p>Avez-vous le sentiment que la scolarité de votre enfant se déroule selon vos" +
            "attentes ?</p><h3>"+this.state.didUthkSchIsGood+"</h3>"+
            "<p>Avez-vous le sentiment que vous n’arrivez pas à faire tout ce que vous devez faire" +
            "pour assurer la réussite de votre enfant ?</p><h3>"+this.state.afraidMkChildSchGood+"</h3>"+
            "<p>Avez – vous été capable de contrôler les difficultés relationnelles avec votre" +
            "enfant, d’avoir su régler calmement les problèmes avec lui ?</p><h3>"+this.state.canUsettleConflicts+"</h3>"+
            "<p>Avez-vous globalement le sentiment de maitriser les évènements en relation avec" +
            "votre enfant?</p><h3>"+this.state.canUmasterEventChild+"</h3>"+
            "<p>Vous êtes vous sentie en colère face aux difficultés de votre enfant ?</p><h3>"+this.state.didUangryWtChild+"</h3>"+
            "<p>Dans la relation avec votre enfant, avez-vous actuellement le sentiment que des\n" +
            "difficultés dépassent votre capacité à les surmonter ?</p><h3>"+this.state.feelThatIsTooMuch+"</h3>"+
            "<p>Je me sens tendu(e) ou énervé quand je pense à l&#39;enfant</p><h3>"+this.state.feelTenseWhThToChild+"</h3>"+
            "<p>Je prends plaisir aux mêmes choses avec l&#39;enfant qu&#39;autrefois</p><h3>"+this.state.haveFunWthChildLikeBef+"</h3>"+
            "<p>J’ai une sensation de peur comme si quelque chose d’horrible allait\n" +
            "bloquer la réussite professionnelle de l&#39;enfant</p><h3>"+this.state.afraidToFeelSmth+"</h3>"+
            "<p>Je ris facilement et vois le bon côté des choses quand à l&#39;avenir de l&#39;enfant</p>" +
            "<h3>"+this.state.laughWthThem+"</h3>"+
            "<p>Je me fais du souci pour l&#39;avenir de l&#39;enfant</p>" +
            "<h3>"+this.state.afraidLifeOfMyChild+"</h3>"+
            "<p>Je suis de bonne humeur quand je pense à l&#39;enfant</p>" +
            "<h3>"+this.state.feelHappyThOfThem+"</h3>"+
            "<p>Je peux rester tranquillement assis(e) à ne rien faire et me sentir décontracté quand\n" +
            "l&#39;enfant à des choses à faire</p>" +
            "<h3>"+this.state.feelCoolWhTheyAreBusy+"</h3>"+
            "<p>J’ai l’impression de fonctionner au ralenti quand à la vie scolaire de mon enfant</p>" +
            "<h3>"+this.state.slowMotionTheyLife+"</h3>"+
            "<p>J’éprouve des sensations de peur et j’ai l’estomac noué quand je pense à l&#39;enfant</p>" +
            "<h3>"+this.state.feelBadWhThksOfThem+"</h3>"+
            "<p>Je ne m’intéresse plus à l&#39;apparence de l&#39;enfant</p>" +
            "<h3>"+this.state.dontSeeThAppearance+"</h3>"+
            "<p>Je me réjouis d’avance à l’idée de la réussite professionnelle de l&#39;enfant</p>" +
            "<h3>"+this.state.imFeelHappyToThScol+"</h3>"+
            "<p>Je peux prendre plaisir à discuter de l’avenir et à partager des visions avec l&#39;enfant</p>" +
            "<h3>"+this.state.imFeelHappyToTalkAbtThem+"</h3>"+
            "<p>J’ai la capacité financière pour assurer les études supérieures de l’enfant</p>" +
            "<h3>"+this.state.iCanPayHisScolar+"</h3>"+
            "<p>Je souhaite l’obtention d’une bourse pour l’enfant</p>" +
            "<h3>"+this.state.iWantBourseForTh+"</h3>"+
            "<p>Je dispose de ressources personnelles suffisantes (biens immobiliers, terrains…) qui\n" +
            "peuvent me permettre de subvenir aux études de l’enfant</p>" +
            "<h3>"+this.state.iHaveSomeGoods+"</h3>"+
            "<p>Je pense contracter un emprunt pour payer les études de l’enfant</p>" +
            "<h3>"+this.state.iThkToTakeAloan+"</h3>"+
            "<p>Je peux compter sur des appuis au sein de ma famille ou de mes connaissances</p>" +
            "<h3>"+this.state.iCanCountFamily+"</h3>"+
            "<p>Je ne souhaite pas m’engager dans des dépenses d’argent</p>" +
            "<h3>"+this.state.iDontWantToPay+"</h3>";


        axios.post("/users/quiz", {
            userEmail: "fabricesumsa2000@gmail.com",
            subject: "Quiz phase 1 - parent",
            container: result
        }).then(res=>{
            console.log(res.data.text);
            if(res.status === 200){alert("Vos informations ont bien été transmises");}
        })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });
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

                        <h3>Généralités</h3>
                        <div>
                            <TextField
                                label="Nom"
                                value={this.state.lastName}
                                name={"lastName"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                label="Prénom"
                                value={this.state.firstName}
                                name={"firstName"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Age"
                                value={this.state.age}
                                name={"age"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                label="Profession"
                                value={this.state.profession}
                                name={"profession"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nombre d'enfant"
                                value={this.state.totalchildren}
                                name={"totalchildren"}
                                onChange={this.handleChange}
                                inputProps={{ min: "0"}}
                                type={"number"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Classez les projets par priorité de 1 à 6</p>
                            <ol>
                                <li>Education de mes enfants</li>
                                <li>Me réaliser personnellement et professionnellement</li>
                                <li>Projet immobilier : construire ou acheter une maison</li>
                                <li>Acheter une voiture</li>
                                <li>Relations familiales</li>
                                <li>Autres</li>
                            </ol>
                            <TextField
                                placeholder={"1-4-3-2-5-6"}
                                value={this.state.importantProjects}
                                name={"importantProjects"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <br/>
                        <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Léducation des enfants</p>
                        <ol>
                            <li>Sexe (M ou F)</li>
                            <li>Prénom</li>
                            <li>Métier souhaité</li>
                            <li>Niveau d'études souhaité</li>
                            <li>Dégré de confiance dans les capacités de l'enfant entre (1~5)</li>
                        </ol>
                        <div>
                            <TextField
                                placeholder={"M-Enfant1-Informaticien-Master-4"}
                                value={this.state.childPrediction1}
                                name={"childPrediction1"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                placeholder={"M-Enfant2-Informaticien-Master-4"}
                                value={this.state.childPrediction2}
                                name={"childPrediction2"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                placeholder={"M-Enfant3-Informaticien-Master-4"}
                                value={this.state.childPrediction3}
                                name={"childPrediction3"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                placeholder={"M-Enfant4-Informaticien-Master-4"}
                                value={this.state.childPrediction4}
                                name={"childPrediction4"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Pourquoi avez–vous décidé de faire une démarche d’orientation professionnelle pour
                                votre enfant ?</p>
                            <TextField
                                placeholder={"Parceque....."}
                                value={this.state.testRaison}
                                name={"testRaison"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                    </div>
                    <div className={classes.containerQuizs}>
                        <h3>Cochez la réponse qui convient : </h3>
                        <div>
                            <FormLabel component="legend">Etes-vous inquiet pour l’avenir professionnel de votre enfant à cause
                                d’évènements inattendus dans la vie ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidBcfLifeUnkwon" value={this.state.afraidBcfLifeUnkwon} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez-vous senti que des difficultés s&#39;accumulaient à un tel point pour l’enfant que
                                vous ne pourriez plus les surmonter ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidBcfOfchildDiff" value={this.state.afraidBcfOfchildDiff} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez-vous le sentiment de ne plus être plus être capable de contrôler les choses
                                importantes dans la vie de l’enfant ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidToContchildLife" value={this.state.afraidToContchildLife} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Vous êtes-vous senti(e) nerveux (se) et stressé(e) par rapport à la vie de votre
                                enfant ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="nervousBcfOfchildLife" value={this.state.nervousBcfOfchildLife} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Vous êtes-vous senti(e) nerveux (se) et stressé(e) par rapport à la vie de votre
                                enfant ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="canYouFinishchildSch" value={this.state.canYouFinishchildSch} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez-vous le sentiment que la scolarité de votre enfant se déroule selon vos
                                attentes ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="didUthkSchIsGood" value={this.state.didUthkSchIsGood} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez-vous le sentiment que vous n’arrivez pas à faire tout ce que vous devez faire
                                pour assurer la réussite de votre enfant ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidMkChildSchGood" value={this.state.afraidMkChildSchGood} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez – vous été capable de contrôler les difficultés relationnelles avec votre
                                enfant, d’avoir su régler calmement les problèmes avec lui ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="canUsettleConflicts" value={this.state.canUsettleConflicts} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Avez-vous globalement le sentiment de maitriser les évènements en relation avec
                                votre enfant?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="canUmasterEventChild" value={this.state.canUmasterEventChild} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Vous êtes vous sentie en colère face aux difficultés de votre enfant ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="didUangryWtChild" value={this.state.didUangryWtChild} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Dans la relation avec votre enfant, avez-vous actuellement le sentiment que des
                                difficultés dépassent votre capacité à les surmonter ?</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="feelThatIsTooMuch" value={this.state.feelThatIsTooMuch} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Presque Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque Jamais" />
                                <FormControlLabel value="Quelque fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Quelque fois" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                            </RadioGroup>
                        </div>
                    </div>

                    <div className={classes.containerQuizs}>
                        <h3>Cochez la réponse qui convient</h3>
                        <div>
                            <FormLabel component="legend">Je me sens tendu(e) ou énervé quand je pense à l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="feelTenseWhThToChild" value={this.state.feelTenseWhThToChild} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="La plupart du temps" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La plupart du temps" />
                                <FormControlLabel value="De temps en temps" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="De temps en temps" />
                                <FormControlLabel value="Souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Souvent" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je prends plaisir aux mêmes choses avec l&#39;enfant qu&#39;autrefois</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="haveFunWthChildLikeBef" value={this.state.haveFunWthChildLikeBef} onChange={this.handleChange}>
                                <FormControlLabel value="Oui tout autant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui, tout autant" />
                                <FormControlLabel value="Pas autant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Pas autant" />
                                <FormControlLabel value="Un peu seulement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Un peu seulement" />
                                <FormControlLabel value="Presque plus" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque plus" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">J’ai une sensation de peur comme si quelque chose d’horrible allait
                                bloquer la réussite professionnelle de l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidToFeelSmth" value={this.state.afraidToFeelSmth} onChange={this.handleChange}>
                                <FormControlLabel value="Oui très nettement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui, très nettement" />
                                <FormControlLabel value="Oui mais ce n’est pas trop grave" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui, mais ce n’est pas trop grave" />
                                <FormControlLabel value="Un peu mais cela ne m’inquiète pas" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Un peu mais cela ne m’inquiète pas" />
                                <FormControlLabel value="Pas du tout" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Pas du tout" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je ris facilement et vois le bon côté des choses quand à l&#39;avenir de l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="laughWthThem" value={this.state.laughWthThem} onChange={this.handleChange}>
                                <FormControlLabel value="Autant que par le passé" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Autant que par le passé" />
                                <FormControlLabel value="Plus autant qu’avant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Plus autant qu’avant" />
                                <FormControlLabel value="Vraiment moins qu’avant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Vraiment moins qu’avant" />
                                <FormControlLabel value="Pas du tout" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Pas du tout" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je me fais du souci pour l&#39;avenir de l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="afraidLifeOfMyChild" value={this.state.afraidLifeOfMyChild} onChange={this.handleChange}>
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Occasionnellement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Occasionnellement" />
                                <FormControlLabel value="Tres occasionnellement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très occasionnellement" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je suis de bonne humeur quand je pense à l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="feelHappyThOfThem" value={this.state.feelHappyThOfThem} onChange={this.handleChange}>
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                                <FormControlLabel value="Rarement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Rarement" />
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="La plus part du temps" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="La plus part du temps" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je peux rester tranquillement assis(e) à ne rien faire et me sentir décontracté quand
                                l&#39;enfant à des choses à faire</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="feelCoolWhTheyAreBusy" value={this.state.feelCoolWhTheyAreBusy} onChange={this.handleChange}>
                                <FormControlLabel value="Oui quoi qu'il arrive" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui, quoi qu'il arrive" />
                                <FormControlLabel value="Oui en général" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui, en général" />
                                <FormControlLabel value="Rarement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Rarement" />
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">J’ai l’impression de fonctionner au ralenti quand à la vie scolaire de mon enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="slowMotionTheyLife" value={this.state.slowMotionTheyLife} onChange={this.handleChange}>
                                <FormControlLabel value="Presque toujours" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque toujours" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                                <FormControlLabel value="Parfois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Parfois" />
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">J’éprouve des sensations de peur et j’ai l’estomac noué quand je pense à l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="feelBadWhThksOfThem" value={this.state.feelBadWhThksOfThem} onChange={this.handleChange}>
                                <FormControlLabel value="Assez souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Assez souvent" />
                                <FormControlLabel value="Tres souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très souvent" />
                                <FormControlLabel value="Parfois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Parfois" />
                                <FormControlLabel value="Jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Jamais" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je ne m’intéresse plus à l&#39;apparence de l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="dontSeeThAppearance" value={this.state.dontSeeThAppearance} onChange={this.handleChange}>
                                <FormControlLabel value="Plus du tout" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Plus du tout" />
                                <FormControlLabel value="Il se peut que je n’y fasse plus autant attention" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Il se peut que je n’y fasse plus autant attention" />
                                <FormControlLabel value="J’y prête autant d’attention que par le passé" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="J’y prête autant d’attention que par le passé" />
                                <FormControlLabel value="Je n’y accorde pas autant d’attention que je devrais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Je n’y accorde pas autant d’attention que je devrais" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je me réjouis d’avance à l’idée de la réussite professionnelle de l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="imFeelHappyToThScol" value={this.state.imFeelHappyToThScol} onChange={this.handleChange}>
                                <FormControlLabel value="Autant qu’avant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Autant qu’avant" />
                                <FormControlLabel value="Un peu moins qu’avant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Un peu moins qu’avant" />
                                <FormControlLabel value="Bien moins qu’avant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Bien moins qu’avant" />
                                <FormControlLabel value="Presque jamais" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Presque jamais" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je peux prendre plaisir à discuter de l’avenir et à partager des visions avec l&#39;enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="imFeelHappyToTalkAbtThem" value={this.state.imFeelHappyToTalkAbtThem} onChange={this.handleChange}>
                                <FormControlLabel value="Souvent" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Souvent" />
                                <FormControlLabel value="Parfois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Parfois" />
                                <FormControlLabel value="Rarement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Rarement" />
                                <FormControlLabel value="Très rarement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Très rarement" />
                            </RadioGroup>
                        </div>
                    </div>

                    <div className={classes.containerQuizs}>
                        <h3>Capacité financière</h3>
                        <div>
                            <FormLabel component="legend">J’ai la capacité financière pour assurer les études supérieures de l’enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iCanPayHisScolar" value={this.state.iCanPayHisScolar} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je souhaite l’obtention d’une bourse pour l’enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iWantBourseForTh" value={this.state.iWantBourseForTh} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je dispose de ressources personnelles suffisantes (biens immobiliers, terrains…) qui
                                peuvent me permettre de subvenir aux études de l’enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iHaveSomeGoods" value={this.state.iHaveSomeGoods} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je pense contracter un emprunt pour payer les études de l’enfant</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iThkToTakeAloan" value={this.state.iThkToTakeAloan} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je peux compter sur des appuis au sein de ma famille ou de mes connaissances</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iCanCountFamily" value={this.state.iCanCountFamily} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je ne souhaite pas m’engager dans des dépenses d’argent</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="iDontWantToPay" value={this.state.iDontWantToPay} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
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


export default withStyles(styles)(QuizParent1);
