import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import InputCustom from "../utils/InputCustom";
import Button from "@material-ui/core/Button";
import axios from "axios";

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
                    window.location.href = "/";
                }
            })
            .catch(err => {
                if (err.response.status === 409){
                    alert("Verifiez votre adresse mail et votre mot de passe");
                }
                else if (err.response.status === 412){
                    alert("Adresse invalide");
                }else{
                    alert("Veuillez reprendre");
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
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Login);
