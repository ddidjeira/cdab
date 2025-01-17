import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import InputCustom from "../utils/InputCustom";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    signUp: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        height: "700px"
    },
    formControl: {
        marginBottom: "10px",
        width: "500px"
    },
    selectBorder: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E58F1E !important'
        },
        color: "black"
    }
});

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            errLastName: "",
            errFirstName: "",
            errEmail: "",
            errPassword: "",
            errConPassword: "",
            errNumber: "",
            errCountry: "",
            errCity: "",
            errSituation: "",

            lastName: "",
            firstName: "",
            email: "",
            password: "",
            confirmPassword: "",
            number: "",
            country: "",
            city: "",
            situation: ""
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            this.setState({errConPassword: "Vérifiez l'écriture de votre mot de passe"})
        }else{
            axios.post('/users/register', {
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                email: this.state.email,
                password: this.state.password,
                number: this.state.number,
                country: this.state.country,
                city: this.state.city,
                situation: this.state.situation,
            })
                .then(res => {
                    console.log("data" + JSON.stringify(res.data));
                    console.log("statusCode" + res.status);
                    console.log("statusCode" + res.data.status);

                    if(res.status === 200){
                        alert("Vous pouvez vous connecter!!!");
                        //localStorage.setItem("token",res.data.token);
                        window.location.href = "/login";
                    }
                    // window.location = "/signIn"
                })
                .catch(err => {
                    if (err.response.status === 409){
                        alert("Ce compte existe déjà");
                        console.log("+ Ce compte existe déjà");
                    }
                    else if (err.response.status === 412){
                        alert("Adresse invalide");
                        console.log("+ Adresse invalide");
                    }
                    else if (err.response.status === 500){
                        alert("Internal erreur");
                        console.log("Internal erreur");
                    }else{
                        alert("Veuillez reprendre");
                        window.location.reload();
                    }
                })
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <div className={classes.signUp}>
                        <form onSubmit={this.handleSubmit}>
                            <InputCustom
                                name={"lastName"}
                                value={this.state.lastName}
                                placeholder="Nom"
                                errorText={this.state.errLastName}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                            />
                            <InputCustom
                                name={"firstName"}
                                value={this.state.firstName}
                                placeholder="Prénom"
                                errorText={this.state.errFirstName}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                            />
                            <InputCustom
                                name={"email"}
                                value={this.state.email}
                                placeholder="Example@mail.com"
                                errorText={this.state.errEmail}
                                onChange={this.handleChange}
                                type={"email"}
                                required={true}
                            />
                            <InputCustom
                                name={"number"}
                                value={this.state.number}
                                placeholder="(+228) 9000005"
                                errorText={this.state.errNumber}
                                onChange={this.handleChange}
                                type={"tel"}
                                required={true}
                            />
                            <InputCustom
                                name={"country"}
                                value={this.state.country}
                                placeholder="Pays"
                                errorText={this.state.errCountry}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                            />
                            <InputCustom
                                name={"city"}
                                value={this.state.city}
                                placeholder="Ville"
                                errorText={this.state.errCity}
                                onChange={this.handleChange}
                                type={"text"}
                                required={true}
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Situation</InputLabel>
                                <Select
                                    native
                                    value={this.state.situation}
                                    onChange={this.handleChange}
                                    label="situation"
                                    inputProps={{
                                        name: 'situation',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    className={classes.selectBorder}
                                    required={true}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={"Primaire"}>Primaire</option>
                                    <option value={"College"}>Collège</option>
                                    <option value={"Lycee"}>Lycée</option>
                                    <option value={"PostBac"}>Post-bac</option>
                                    <option value={"Parent"}>Parent</option>
                                </Select>
                            </FormControl>
                            <InputCustom
                                name={"password"}
                                value={this.state.password}
                                placeholder="Mot de passe"
                                errorText={this.state.errPassword}
                                onChange={this.handleChange}
                                type={"password"}
                                required={true}
                            />
                            <InputCustom
                                name={"confirmPassword"}
                                value={this.state.confirmPassword}
                                placeholder="Confirme mot de passe"
                                errorText={this.state.errConPassword}
                                onChange={this.handleChange}
                                type={"password"}
                                required={true}
                            />
                            <Button type="submit" variant="contained">Créer mon compte</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Register);
