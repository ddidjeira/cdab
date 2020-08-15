import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import InputCustom from "../utils/InputCustom";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CustomAlert from "../utils/CustomAlert";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    signIn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        height: "700px"
    },
});

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            errEmail: "",
            errPassword: "",
            errAlert: "",

            email: "",
            password: "",
        };
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/users/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                if(res.status === 200){
                    alert("Vous êtes connectés!!");
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("lastName",res.data.lastName);
                    localStorage.setItem("firstName",res.data.firstName);
                    localStorage.setItem("email",res.data.email);
                    localStorage.setItem("number",res.data.number);
                    localStorage.setItem("country",res.data.country);
                    localStorage.setItem("city",res.data.city);
                    localStorage.setItem("situation",res.data.situation);
                    window.location.href = "/";
                }
            })
            .catch(err => {
                if (err.response.status === 409){
                    alert("Verifiez votre adresse mail et votre mot de passe");
                    this.setState({errAlert: "Verifiez votre adresse mail et votre mot de passe"});
                    return(<CustomAlert
                        message={this.state.errAlert}
                        color={0}
                    />)
                }
                else if (err.response.status === 412){
                    alert("Adresse invalide");
                    this.setState({errAlert: "Adresse invalide"});
                }else{
                    alert("Veuillez reprendre");
                    this.setState({errAlert: "Veuillez reprendre"});
                    window.location.reload();
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
                    <div className={classes.signIn}>
                        <form onSubmit={this.handleSubmit}>
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
                                name={"password"}
                                value={this.state.password}
                                placeholder="Mot de passe"
                                errorText={this.state.errPassword}
                                onChange={this.handleChange}
                                type={"password"}
                                required={true}
                            />
                            <Button type="submit" variant="contained">CONNEXION</Button>
                        </form>
                        <CustomAlert
                            message={this.state.errAlert}
                            color={0}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Login);
