import React, {Component} from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from '@material-ui/core/Menu';
import Popover from "@material-ui/core/Popover";
import TokenApi from "./TokenApi";

const styles = theme => ({
    logo:{
        width: "186px",
        height: "100px",
    },
    imglogo:{
        // width: 100,
        height: 100,
        cursor: "pointer"
    },
    apbar: {
        flexGrow: 1,
        backgroundColor: "#000",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#EDBA2D",
        cursor: "pointer"
    },
    btnMenu: {
        '&:hover': {
            // textDecoration: 'underline',
            color: "#E58F1E"
        },
    },
});

class MenuBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchor: false,
            auth: false,
        };
    }

    componentDidMount() {
        if(localStorage.getItem("token") !== null){
            this.setState({auth: true})
        }
        //alert("auth : "+this.state.auth + " token : "+localStorage.getItem("token"))
    }

    handleMenu = (e) => {
        this.setState({
            anchor: e.currentTarget,
        });
    };

    handleClose = (e) => {
      this.setState({
          anchor: null,
      })
    };

    disconnect = () => {
        TokenApi.logout();
        window.location = "/login";
    };

    homePage = () => {
        window.location = "/";
    };
    render() {
        const {classes} = this.props;
        return (
            <AppBar className={classes.apbar}>
                <Toolbar>
                    <div className={classes.logo}>
                        <img onClick={this.homePage} className={classes.imglogo} src={require("../assets/logo.png")} alt=""/>
                    </div>
                    <Typography onClick={this.homePage} variant="h4" className={classes.title}>
                        Cdab Compass
                    </Typography>
                    <Button className={classes.btnMenu} href="/expertises" color="inherit">Nos expertises</Button>
                    <Button className={classes.btnMenu} href="/training" color="inherit">Traning</Button>
                    <Button className={classes.btnMenu} href="/coaching" color="inherit">Coach-cdab</Button>
                    <Button className={classes.btnMenu} href="/signUp" color="inherit">Nos produits</Button>
                    <Button className={classes.btnMenu} href="/achievements" color="inherit">Nos réalisations</Button>
                    <Button className={classes.btnMenu} href="/office" color="inherit">Nos locaux</Button>
                    <IconButton className={classes.btnMenu}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Popover
                        id="simple-menu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorEl={this.state.anchor}
                        // keepMounted
                        open={Boolean(this.state.anchor)}
                        onClose={this.handleClose}
                    >
                        {!this.state.auth &&(
                            <div>
                                <Button className={classes.btnMenu} style={{display: "block",width:"100%"}} href="/login">Connexion</Button>
                                <Button className={classes.btnMenu} href="/register">Inscription</Button>
                            </div>
                        )}
                        {this.state.auth && (
                            <div>
                                <Button className={classes.btnMenu} onClick={this.disconnect}>Déconnexion</Button>
                            </div>
                        )}
                    </Popover>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(MenuBar);
