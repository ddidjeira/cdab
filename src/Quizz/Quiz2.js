import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import TextField from "@material-ui/core/TextField";
import InputCustom from "../utils/InputCustom";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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

            errBirthday: ""
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.name + " : "+e.target.value);
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
                                id="datetime-local"
                                label="Date de naissance"
                                type="date"
                                value="2018-07-22"
                                name={"birthday"}
                                className={classes.textField}
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
                        <h3>Situation Familiale</h3>
                        <div>
                            <TextField
                                label="Nombre de frères"
                                value={curBrothers}
                                name={"curBrothers"}
                                onChange={this.handleChange}
                                type={"number"}
                                required={false}
                                className={classes.textField}
                            />
                            <TextField
                                label="Nombre de soeurs"
                                value={curSisters}
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
                        {localStorage.getItem("situation") !== "Primaire" && (
                            <div>
                                <h3>Relation Intime</h3>
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
                        )}
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Quiz2);
