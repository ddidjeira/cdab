import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import TextField from "@material-ui/core/TextField";
import InputCustom from "../utils/InputCustom";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

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

class Quiz2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            curTime : new Date().toLocaleString(),
            lastName: localStorage.getItem("lastName"),
            firstName: localStorage.getItem("firstName"),
            birthdayCity: "",
            birthday: "",
            gender: "",
            userNumber: localStorage.getItem("number"),
            birthCertificate: "",
            idCard: "",
            passport: "",
            curSisters: "",
            curBrothers: "",
            curBrother1: "",
            curBrother2: "",
            curBrother3: "",
            curSister1: "",
            curSister2: "",
            curSister3: "",
            natureBrothers: "",
            relationShipMif: "",
            fatherAlive: "",
            natureFamily: "",
            fatherStatut: "",
            fatherWork: "",
            fatherNumber: "",
            homStayFather: "",
            relationShipFather: "",
            motherAlive: "",
            motherStatut: "",
            motherWork: "",
            motherNumber: "",
            homStayMother: "",
            relationShipMother: "",
            userCity: localStorage.getItem("country")+" - "+localStorage.getItem("city"),
            foodByDay: "",
            foodTimeInDay: "",
            aboutSexeWithParents: "",
            aboutSexeWithParentsRaison: "",
            boyOrGirlFriends: "",
            boyOrGirlFriendsRaison: "",
            parentsKnowRelationShip: "",
            ageFirstRapport: "",
            waitingSexe: "",
            waitSexeRaison: "",
            lifeSmbWithOrAlone: "",
            joyOfLiving: "",
            spritFighting: "",
            isLikeIt: "",
            notLikeIt: "",
            schoolLevel: "",
            repeatClass: "",
            repeatWichClass: "",
            actualSchool: "",
            raisonActualSchool: "",
            timeComeToSchool: "",
            meanOfTransport: "",
            comeSchoolAlone: "",
            parentHelpToGoSchool: "",
            schoolSystem: "",
            schoolSystemDesc: "",
            moyCE1 : "",
            moyCE2 : "",
            moyCM1 : "",
            moyCM2 : "",
            primarySchool : "",
            schoolSystemCol : "",
            schoolSystemDescCol : "",
            moyCl6 : "",
            moyCl5 : "",
            moyCl4 : "",
            moyCl3 : "",
            collegeSchool : "",
            schoolSystemLyc : "",
            schoolSystemDescLyc : "",
            moy2nd : "",
            moy1ere : "",
            moyTle : "",
            lyceeSchool : "",
            firstSocialMedia: "",
            secSocialMedia: "",
            thrSocialMedia: "",
            timeSocialMedia: "",
            weekTimeSocialMedia: "",
            connectTelSocialMedia: "",
            connectPcSocialMedia: "",
            furSocialMedia: "",
            planedJob: "",
            planedJobRaison: "",
            planedJobBySchool: "",
            planedJobByFamily: "",
            planedJobByFriends: "",
            studyChoice: "",
            studyChoiceRaison: "",
            morningWakeUpTime: "",
            doingBeforeGoToSchool: "",
            doingAfterGoToSchool: "",
            readBooks: "",
            seeTv: "",
            doSport: "",
            talkWith: "",
            outWith : "",
            goTo: "",


            errBirthday: ""
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.name + " : "+e.target.value);
    };

    submitAnswers = () => {
        alert("send userResponse by mail")
    };

    render() {
        const {classes} = this.props;
        const {gender,birthCertificate,idCard,passport,curSisters,curBrothers} = this.state;

        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.containerQuizs}>
                        <h3>Identité</h3>
                        <div>
                            <TextField
                                label="Date du jour"
                                value={this.state.curTime}
                                disabled={true}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nom"
                                value={this.state.lastName}
                                name={"lastName"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Prénom"
                                name={"firstName"}
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                label="Numéro (+indicatif)"
                                value={this.state.userNumber}
                                name={"userNumber"}
                                onChange={this.handleChange}
                                type={"tel"}
                                required={true}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                name={"birthdayCity"}
                                value={this.state.birthdayCity}
                                label={"Lieu de naissance"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                                className={classes.textField}
                            />
                            <TextField
                                id="date"
                                label="Date de naissance"
                                type="date"
                                value={this.state.birthday}
                                className={classes.textField}
                                name={"birthday"}
                                onChange={this.handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Sexe</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="gender" name="gender" value={gender} onChange={this.handleChange}>
                                <FormControlLabel value="F" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Feminin" />
                                <FormControlLabel value="M" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Masculin" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Acte de naissance</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="birthCertificate"
                                        name="birthCertificate" value={birthCertificate} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">Carte d’identité</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="idCard"
                                        name="idCard" value={idCard} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">Passeport</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="passport"
                                        name="passport" value={passport} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <br/>
                    </div>

                    <div className={classes.containerQuizs}>
                        <h3>Situation Familiale</h3>
                        <div>
                            <TextField
                                label="Nombre de frères"
                                value={this.state.curBrothers}
                                name={"curBrothers"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nombre de soeurs"
                                value={this.state.curSisters}
                                name={"curSisters"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Nom-prenom-numero-Frère-1"
                                value={this.state.curBrother1}
                                name={"curBrother1"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nom-prenom-numero-Frère-2"
                                value={this.state.curBrother2}
                                name={"curBrother2"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nom-prenom-numero-Frère-3"
                                value={this.state.curBrother3}
                                name={"curBrother3"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <TextField
                                label="Nom-prenom-numero-Soeur-1"
                                value={this.state.curSister1}
                                name={"curSister1"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nom-prenom-numero-Soeur-2"
                                value={this.state.curSister2}
                                name={"curSister2"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nom-prenom-numero-Soeur-3"
                                value={this.state.curSister3}
                                name={"curSister3"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <FormLabel component="legend">Nature des frères et soeurs</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                        name="natureBrothers" value={this.state.natureBrothers} onChange={this.handleChange}>
                                <FormControlLabel value="Biologique" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Biologique" />
                                <FormControlLabel value="Adoptifs" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Adoptifs" />
                            </RadioGroup>
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec les frères et soeurs (0~10)</p>
                            <TextField
                                inputProps={{ min: "0", max: "10", step: "1" }}
                                placeholder={"8"}
                                value={this.state.relationShipMif}
                                name={"relationShipMif"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Nature de la famille</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="natureFamily" value={this.state.natureFamily} onChange={this.handleChange}>
                                <FormControlLabel value="Monogame" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Monogame" />
                                <FormControlLabel value="Séparée" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Séparée" />
                                <FormControlLabel value="Divrocée" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Divrocée" />
                                <FormControlLabel value="Polygame" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Polygame" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">Situtation du père ou tuteur</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                        name="fatherAlive" value={this.state.fatherAlive} onChange={this.handleChange}>
                                <FormControlLabel value="Vivant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Vivant" />
                                <FormControlLabel value="Décédé" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Décédé" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Statut du père ou tuteur</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="fatherStatut" value={this.state.fatherStatut} onChange={this.handleChange}>
                                <FormControlLabel value="Salarié" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Salarié" />
                                <FormControlLabel value="Indépendant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Indépendant" />
                                <FormControlLabel value="Entrepreneur" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Entrepreneur" />
                                <FormControlLabel value="Retraité" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Retraité" />
                            </RadioGroup>
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Profession du père ou du tuteur</p>
                            <TextField
                                placeholder={"Médecin"}
                                value={this.state.fatherWork}
                                name={"fatherWork"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                value={this.state.fatherNumber}
                                name={"fatherNumber"}
                                label="Numéro du père (+indicatif)"
                                onChange={this.handleChange}
                                type={"tel"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Il revient à la maison : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="homStayFather" value={this.state.homStayFather} onChange={this.handleChange}>
                                <FormControlLabel value="Chaque jour" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Chaque jour" />
                                <FormControlLabel value="Une fois / semaine" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / semaine" />
                                <FormControlLabel value="Une fois / mois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / mois" />
                                <FormControlLabel value="Une fois / anée" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / année" />
                            </RadioGroup>
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec le père ou tuteur (0~10)</p>
                            <TextField
                                inputProps={{ min: "0", max: "10", step: "1" }}
                                placeholder={"8"}
                                value={this.state.relationShipFather}
                                name={"relationShipFather"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>



                        <div>
                            <FormLabel component="legend">Situtation de la mère ou tutrice</FormLabel>
                            <RadioGroup style={{display: "block"}} aria-label="natureBrothers"
                                        name="motherAlive" value={this.state.motherAlive} onChange={this.handleChange}>
                                <FormControlLabel value="Vivant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Vivant" />
                                <FormControlLabel value="Décédé" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Décédé" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Statut de la mère ou tutrice</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="motherStatut" value={this.state.motherStatut} onChange={this.handleChange}>
                                <FormControlLabel value="Salarié" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Salarié" />
                                <FormControlLabel value="Indépendant" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Indépendant" />
                                <FormControlLabel value="Entrepreneur" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Entrepreneur" />
                                <FormControlLabel value="Retraité" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Retraité" />
                            </RadioGroup>
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Profession de la mère ou tutrice</p>
                            <TextField
                                placeholder={"Médecin"}
                                value={this.state.motherWork}
                                name={"motherWork"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                value={this.state.motherNumber}
                                name={"motherNumber"}
                                label="Numéro de la mère (+indicatif)"
                                onChange={this.handleChange}
                                type={"tel"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Elle revient à la maison : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="homStayMother" value={this.state.homStayMother} onChange={this.handleChange}>
                                <FormControlLabel value="Chaque jour" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Chaque jour" />
                                <FormControlLabel value="Une fois / semaine" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / semaine" />
                                <FormControlLabel value="Une fois / mois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / mois" />
                                <FormControlLabel value="Une fois / anée" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Une fois / année" />
                            </RadioGroup>
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec la mère ou tutrice (0~10)</p>
                            <TextField
                                inputProps={{ min: "0", max: "10", step: "1" }}
                                placeholder={"8"}
                                value={this.state.relationShipMother}
                                name={"relationShipMother"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Lieu d’habitation actuel</p>
                            <TextField
                                value={this.state.userCity}
                                name={"userCity"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nombre de fois de repas dans la journée :"
                                inputProps={{ min: "0",step: "1" }}
                                value={this.state.foodByDay}
                                name={"foodByDay"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Horaires de repas dans la journée : "
                                value={this.state.foodTimeInDay}
                                name={"foodTimeInDay"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                    </div>
                        {localStorage.getItem("situation") !== "Primaire" && (
                            <div className={classes.containerQuizs}>
                            <div>
                                <h3>Relation Intime</h3><br/>
                                <div>
                                    <FormLabel component="legend">Parles tu d’éducation sexuelle avec les parents : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="aboutSexeWithParents" value={this.state.aboutSexeWithParents} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio
                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio
                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    <TextField
                                        placeholder={"Raison ... ?"}
                                        value={this.state.aboutSexeWithParentsRaison}
                                        name={"aboutSexeWithParentsRaison"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                                <div>
                                    <FormLabel component="legend">As-tu un(e) petit(e) ami(e) : </FormLabel>
                                    <RadioGroup style={{display: "block"}}
                                                name="boyOrGirlFriends" value={this.state.boyOrGirlFriends} onChange={this.handleChange}>
                                        <FormControlLabel value="Oui" control={<Radio
                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                        <FormControlLabel value="Non" control={<Radio
                                            classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                    </RadioGroup>
                                    <TextField
                                        placeholder={"Raison ... ?"}
                                        value={this.state.boyOrGirlFriendsRaison}
                                        name={"boyOrGirlFriendsRaison"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    {this.state.boyOrGirlFriends === "Oui" && (
                                        <div>
                                            <FormLabel component="legend">les parents sont-ils au courant de cette relation ?</FormLabel>
                                            <RadioGroup style={{display: "block"}}
                                                        name="parentsKnowRelationShip" value={this.state.parentsKnowRelationShip} onChange={this.handleChange}>
                                                <FormControlLabel value="Oui" control={<Radio
                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                                <FormControlLabel value="Non" control={<Radio
                                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                            </RadioGroup>
                                        </div>
                                    )}
                                    <br/>
                                    <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Qualité des relations avec la mère ou tutrice (0~10)</p>
                                    <TextField
                                        placeholder={"20 ans"}
                                        value={this.state.ageFirstRapport}
                                        name={"ageFirstRapport"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                    <div>
                                        <FormLabel component="legend">Je peux m’abstenir de relation sexuelle :</FormLabel>
                                        <RadioGroup style={{display: "block"}}
                                                    name="waitingSexe" value={this.state.waitingSexe} onChange={this.handleChange}>
                                            <FormControlLabel value="Oui" control={<Radio
                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                            <FormControlLabel value="Non" control={<Radio
                                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                                        </RadioGroup>
                                    </div>
                                    <TextField
                                        placeholder={"Raison ... ?"}
                                        value={this.state.waitSexeRaison}
                                        name={"waitSexeRaison"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                            </div>
                            </div>
                        )}

                        <div className={classes.containerQuizs}>
                        <h3>Cadre et Relation Familiale</h3><br/>
                        <div>
                            <FormLabel component="legend">Je vis actuellement avec : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="lifeSmbWithOrAlone" value={this.state.lifeSmbWithOrAlone} onChange={this.handleChange}>
                                <FormControlLabel value="Mes deux parents" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Mes deux parents" />
                                <FormControlLabel value="Père uniquement" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Père ou Mère uniquement" />
                                <FormControlLabel value="Oncle ou Tante paternel" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oncle ou Tante paternel" />
                                <FormControlLabel value="Oncle ou Tante maternel" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oncle ou Tante maternel" />
                                <FormControlLabel value="Tuteur ou Tutrice" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tuteur ou Tutrice" />
                                <FormControlLabel value="Grand Père" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Grand Père" />
                                <FormControlLabel value="Grand Mère" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Grand Mère" />
                                <FormControlLabel value="Seul(e) ou à l'internat" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Seul(e) ou à l'internat" />
                            </RadioGroup>
                        </div>

                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Joie de vivre (0~9)</p>
                            <TextField
                                inputProps={{ min: "0", max: "9", step: "1" }}
                                placeholder={"7"}
                                value={this.state.joyOfLiving}
                                name={"joyOfLiving"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Combativité (0~9)</p>
                            <TextField
                                inputProps={{ min: "0", max: "9", step: "1" }}
                                placeholder={"7"}
                                value={this.state.spritFighting}
                                name={"spritFighting"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>De façon général : </p>
                            <TextField
                                label="Ce que j'aime"
                                value={this.state.isLikeIt}
                                name={"isLikeIt"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Ce que je n'aime pas"
                                value={this.state.notLikeIt}
                                name={"notLikeIt"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        </div>

                        <div className={classes.containerQuizs}>
                        <h3>Parcours scolaire</h3>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Niveau d'études actuel : </p>
                            <TextField
                                label="Terminal C ou 4ème"
                                value={this.state.schoolLevel}
                                name={"schoolLevel"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <FormLabel component="legend">J'ai déjà redoublé une classe : </FormLabel>
                        <RadioGroup style={{display: "block"}}
                                    name="repeatClass" value={this.state.repeatClass} onChange={this.handleChange}>
                            <FormControlLabel value="Oui" control={<Radio
                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                            <FormControlLabel value="Non" control={<Radio
                                classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                        </RadioGroup>
                        {this.state.repeatClass === "Oui" &&(
                            <div>
                                <TextField
                                    label="Laquelle"
                                    value={this.state.repeatWichClass}
                                    name={"repeatWichClass"}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={false}
                                    className={classes.textField}
                                />
                            </div>
                        )}
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Nom et lieu de l’établissement fréquenté actuellement :</p>
                            <TextField
                                label="Ecole International St. Jean"
                                value={this.state.actualSchool}
                                name={"actualSchool"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Raison du choix de l'école"
                                value={this.state.raisonActualSchool}
                                name={"raisonActualSchool"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Temps de parcours pour venir à l’école : "
                                value={this.state.timeComeToSchool}
                                name={"timeComeToSchool"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <FormLabel component="legend">Moyen de transport pour aller à l'école : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="repeatClass" value={this.state.meanOfTransport} onChange={this.handleChange}>
                                <FormControlLabel value="A pied" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="A pied" />
                                <FormControlLabel value="Vélo" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Vélo" />
                                <FormControlLabel value="Moto" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Moto" />
                                <FormControlLabel value="Voiture" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Voiture" />
                                <FormControlLabel value="Taxi" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Taxi" />
                                <FormControlLabel value="Bus" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Bus" />
                                <FormControlLabel value="Tramway" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Tramway" />
                                <FormControlLabel value="Métro" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Métro" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je viens à l'école seul : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="comeSchoolAlone" value={this.state.comeSchoolAlone} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                            {this.state.comeSchoolAlone === "Oui" &&(
                                <div>
                                    <TextField
                                        label="Accompagné par ?"
                                        value={this.state.parentHelpToGoSchool}
                                        name={"parentHelpToGoSchool"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                                )
                            }
                        </div>
                        <div>
                            <FormLabel component="legend">Système d’études au primaire : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="schoolSystem" value={this.state.schoolSystem} onChange={this.handleChange}>
                                <FormControlLabel value="National" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                <FormControlLabel value="International" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                            </RadioGroup>
                            {this.state.schoolSystem === "International" &&(
                                <div>
                                    <TextField
                                        label="Quel système?"
                                        value={this.state.schoolSystemDesc}
                                        name={"schoolSystemDesc"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                            )}
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale CE1-CE2 : </p>
                            <TextField
                                label="16.78"
                                value={this.state.moyCE1}
                                name={"moyCE1"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moyCE2}
                                name={"moyCE2"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale CM1-CM2 : </p>
                            <TextField
                                label="16.78"
                                value={this.state.moyCM1}
                                name={"moyCM1"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moyCM2}
                                name={"moyCM2"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Ecole primaire de l'obtention du certificat : </p>
                            <TextField
                                label="Ets primaire"
                                value={this.state.primarySchool}
                                name={"primarySchool"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>




                        <div>
                            <FormLabel component="legend">Système d’études au collège : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="schoolSystemCol" value={this.state.schoolSystemCol} onChange={this.handleChange}>
                                <FormControlLabel value="National" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                <FormControlLabel value="International" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                            </RadioGroup>
                            {this.state.schoolSystemCol === "International" &&(
                                <div>
                                    <TextField
                                        label="Quel système?"
                                        value={this.state.schoolSystemDescCol}
                                        name={"schoolSystemDescCol"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                            )}
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 6ème-5ème : </p>
                            <TextField
                                label="16.78"
                                value={this.state.moyCl6}
                                name={"moyCl6"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moyCl5}
                                name={"moyCl5"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 4ème-3ème : </p>
                            <TextField
                                label="16.78"
                                value={this.state.moyCl4}
                                name={"moyCl4"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moyCl3}
                                name={"moyCl3"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Collège de l'obtention du brevet : </p>
                            <TextField
                                label="Ets collège"
                                name={"collegeSchool"}
                                value={this.state.collegeSchool}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>




                        <div>
                            <FormLabel component="legend">Système d’études au lycée : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="schoolSystemLyc" value={this.state.schoolSystemLyc} onChange={this.handleChange}>
                                <FormControlLabel value="National" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="National" />
                                <FormControlLabel value="International" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="International" />
                            </RadioGroup>
                            {this.state.schoolSystemLyc === "International" &&(
                                <div>
                                    <TextField
                                        label="Quel système?"
                                        value={this.state.schoolSystemDescLyc}
                                        name={"schoolSystemDescLyc"}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                            )}
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyenne générale 2nd-1ère-Tle : </p>
                            <TextField
                                label="16.78"
                                value={this.state.moy2nd}
                                name={"moy2nd"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moy1ere}
                                name={"moy1ere"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="16.78"
                                value={this.state.moyTle}
                                name={"moyTle"}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div><br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Lycée de l'obtention du brevet : </p>
                            <TextField
                                label="Ets lycée"
                                name={"lyceeSchool"}
                                value={this.state.lyceeSchool}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>


                        <div>
                            <FormLabel component="legend">1ere Réseau social le plus utilisée : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="firstSocialMedia" value={this.state.firstSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Facebook" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                <FormControlLabel value="Whatsapp" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                <FormControlLabel value="Youtube" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                <FormControlLabel value="Twitter" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                <FormControlLabel value="Instagram" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                <FormControlLabel value="Skype" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                <FormControlLabel value="Snap" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                <FormControlLabel value="tik-tok" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">2eme Réseau social le plus utilisée : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="secSocialMedia" value={this.state.secSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Facebook" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                <FormControlLabel value="Whatsapp" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                <FormControlLabel value="Youtube" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                <FormControlLabel value="Twitter" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                <FormControlLabel value="Instagram" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                <FormControlLabel value="Skype" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                <FormControlLabel value="Snap" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                <FormControlLabel value="tik-tok" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                            </RadioGroup>
                        </div>



                        <div>
                            <FormLabel component="legend">3eme Réseau social le plus utilisée : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="thrSocialMedia" value={this.state.thrSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Facebook" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                <FormControlLabel value="Whatsapp" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                <FormControlLabel value="Youtube" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                <FormControlLabel value="Twitter" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                <FormControlLabel value="Instagram" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                <FormControlLabel value="Skype" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                <FormControlLabel value="Snap" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                <FormControlLabel value="tik-tok" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                            </RadioGroup>
                        </div>


                        <div>
                            <FormLabel component="legend">2eme Réseau social le plus utilisée : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="furSocialMedia" value={this.state.furSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Facebook" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Facebook" />
                                <FormControlLabel value="Whatsapp" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Whatsapp" />
                                <FormControlLabel value="Youtube" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Youtube" />
                                <FormControlLabel value="Twitter" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Twitter" />
                                <FormControlLabel value="Instagram" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Instagram" />
                                <FormControlLabel value="Skype" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Skype" />
                                <FormControlLabel value="Snap" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Snap" />
                                <FormControlLabel value="tik-tok" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="tik-tok" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">Temps moyen passé sur les réseaux sociaux/jours : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="timeSocialMedia" value={this.state.timeSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="15 min" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="15 min" />
                                <FormControlLabel value="30 min" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="30 min" />
                                <FormControlLabel value="+1h" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="+1h" />
                            </RadioGroup>
                        </div>

                        <div>
                            <FormLabel component="legend">Temps moyen passé sur les réseaux sociaux/semaine : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="weekTimeSocialMedia" value={this.state.weekTimeSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="< 2 fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="< 2 fois" />
                                <FormControlLabel value="< 4fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="< 4fois " />
                                <FormControlLabel value="> 4 fois" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="> 4 fois" />
                            </RadioGroup>
                        </div>

                        <div>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Moyens de connexion aux réseaux sociaux : </p>
                            <FormLabel component="legend">Mobile </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="connectTelSocialMedia" value={this.state.connectTelSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>

                            <FormLabel component="legend">Ordinateur</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="connectPcSocialMedia" value={this.state.connectPcSocialMedia} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        </div>

                        <div className={classes.containerQuizs}>
                        <h3>Perspectives professionnelles</h3>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Métier envisagé : </p>
                            <TextField
                                label="Médécin"
                                name={"planedJob"}
                                value={this.state.planedJob}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Raisons de ce choix"
                                name={"planedJobRaison"}
                                value={this.state.planedJobRaison}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>Le choix est motivé par :</p>
                            <FormLabel component="legend">Les conseils scolaires : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="planedJobBySchool" value={this.state.planedJobBySchool} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup><br/>
                            <FormLabel component="legend">Les conseils de la famille : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="planedJobByFamily" value={this.state.planedJobByFamily} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup><br/>
                            <FormLabel component="legend">Les conseils des ami(e)s : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="planedJobByFriends" value={this.state.planedJobByFriends} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                        </div>
                        <div>
                            <FormLabel component="legend">Je veux continuer mes études post-bac :</FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="studyChoice" value={this.state.studyChoice} onChange={this.handleChange}>
                                <FormControlLabel value="au niveau national" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="au niveau national" />
                                <FormControlLabel value="au niveau international" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="au niveau international" />
                            </RadioGroup>
                            {this.state.studyChoice === "au niveau international" && (
                                <div>
                                    <TextField
                                        label="Raisons de ce choix"
                                        name={"studyChoiceRaison"}
                                        value={this.state.studyChoiceRaison}
                                        onChange={this.handleChange}
                                        type={"text"}
                                        required={false}
                                        className={classes.textField}
                                    />
                                </div>
                            )}
                        </div>
                        </div>

                        <div className={classes.containerQuizs}>
                        <h3>Maison</h3>
                        <div>
                            <TextField
                                label="Heure de réveil matinal"
                                name={"morningWakeUpTime"}
                                value={this.state.morningWakeUpTime}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Ce que je fais le matin avant les cours"
                                name={"doingBeforeGoToSchool"}
                                value={this.state.doingBeforeGoToSchool}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Ce que je fais le soir après les cours"
                                name={"doingAfterGoToSchool"}
                                value={this.state.doingAfterGoToSchool}
                                onChange={this.handleChange}
                                type={"text"}
                                required={false}
                                className={classes.textField}
                            />
                        </div>
                        <div>
                            <br/>
                            <p style={{color: "rgba(0, 0, 0, 0.54)"}}>J’aime les loisirs suivants : </p>
                            <FormLabel component="legend">Lire ou aller à la bibliothèque : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="readBooks" value={this.state.readBooks} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                            <FormLabel component="legend">Regarder la télévision : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="seeTv" value={this.state.seeTv} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                            <FormLabel component="legend">Faire du sport : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="doSport" value={this.state.doSport} onChange={this.handleChange}>
                                <FormControlLabel value="Oui" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Oui" />
                                <FormControlLabel value="Non" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="Non" />
                            </RadioGroup>
                            <FormLabel component="legend">Discuter : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="talkWith" value={this.state.talkWith} onChange={this.handleChange}>
                                <FormControlLabel value="avec les ami(e)s du quartier" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les ami(e)s du quartier" />
                                <FormControlLabel value="avec les camarades de l’école " control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les camarades de l’école" />
                                <FormControlLabel value="avec les membres de la famille" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les membres de la famille" />
                                <FormControlLabel value="ou rester à la maison" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="ou rester à la maison" />
                            </RadioGroup>
                            <FormLabel component="legend">Sortir : </FormLabel>
                            <RadioGroup style={{display: "block"}}
                                        name="outWith" value={this.state.outWith} onChange={this.handleChange}>
                                <FormControlLabel value="avec les ami(e)s du quartier" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les ami(e)s du quartier" />
                                <FormControlLabel value="avec les camarades de l’école " control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les camarades de l’école" />
                                <FormControlLabel value="avec les membres de la famille" control={<Radio
                                    classes={{root: classes.radio, checked: classes.checked}}/>} label="avec les membres de la famille" />
                            </RadioGroup>
                            <div>
                                <TextField
                                    label="Pour aller"
                                    name={"goTo"}
                                    value={this.state.goTo}
                                    onChange={this.handleChange}
                                    type={"text"}
                                    required={false}
                                    className={classes.textField}
                                />
                            </div>
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


export default withStyles(styles)(Quiz2);
