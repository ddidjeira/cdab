import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const styles = theme => ({
    container: {
        marginBottom: "10px"
    },
    notchedOutline: {
        // padding: "12px 20px",
        // margin: "8px",
        // border: "1px solid #ccc",
        // borderRadius: "20px",
        // boxSizing: "border-box",
        // outline: "none",
        borderWidth: "1px",
        borderColor: "#E58F1E !important",
    },
    styleInput:{
        width: "500px",
        "& .MuiFormLabel-root":{
            color: "black"
        }
    }
});

class InputCustom extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword: true,
        };
    }


    render() {
        const {classes,placeholder,errorText,value,required,name,type,onChange} = this.props;
        return (
            <div className={classes.container}>
                {this.props.type === "password" && (
                    <TextField
                        name={name}
                        value={value}
                        label={placeholder}
                        onChange={onChange}
                        helperText={errorText}
                        variant="outlined"
                        className={classes.styleInput}
                        error
                        type={this.state.showPassword ? type : "text"}
                        required={required}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => {this.setState({showPassword: true})}}
                                        onMouseDown={() => {this.setState({showPassword: false})}}
                                        edge="end"
                                    >
                                        {this.state.showPassword ? <VisibilityOff />: <Visibility /> }
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                )}
                {this.props.type !== "password" && (
                    <TextField
                        name={name}
                        value={value}
                        label={placeholder}
                        onChange={onChange}
                        helperText={errorText}
                        variant="outlined"
                        className={classes.styleInput}
                        error
                        type={this.state.showPassword ? type : "text"}
                        required={required}
                        InputProps={{
                            classes: {
                                notchedOutline: classes.notchedOutline
                            },
                        }}
                    />
                )}
            </div>
        );
    }
}

export default withStyles(styles)(InputCustom);
