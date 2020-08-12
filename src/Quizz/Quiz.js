import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import QuizData from "./QuizData";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    containerQuizs:{
        width: "1020px",
        height: "380px",
        textAlign: "center",
        boxShadow: "4px 4px 20px 0px rgb(212 198 74 / 64%)",
        borderRadius: 10,
        padding: "15px",
        backgroundColor: "#ffc10700",
        marginBottom: "10px"
    },
    questions: {
        width: "200px",
        border: "1px solid",
        padding: "12px",
        textAlign: "center",
        marginBottom: "15px",
        margin: "0 auto"
    },
    questionSelected: {
        width: "200px",
        border: "1px solid",
        padding: "12px",
        textAlign: "center",
        backgroundColor: "#ffc10773",
        marginBottom: "15px",
        margin: "0 auto"
    },
    optionDiv: {
        cursor: "pointer"
    }
});

class Quiz1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score: 0,
            disabled: true,
            userType: "",
            typeT : 0,
            typeR : 0,
            typeI : 0,
            typeC : 0,
            typeA : 0,
            typeM : 0,
            personName: [],
        };
    }

    loadQuiz = () =>{
        const {currentIndex} = this.state;
        this.setState(()=>{
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer,
                type: QuizData[currentIndex].type
            }
        })
    };

    result = () => {

        alert(
            "typeT : "+this.state.typeT+
            "\ntypeR : "+this.state.typeR+
            "\ntypeI : "+this.state.typeI+
            "\ntypeC : "+this.state.typeC+
            "\ntypeA : "+this.state.typeA+
            "\ntypeM : "+this.state.typeM
        );
    };

    finishHandler = () =>{
        const {userAnswer,answer,score,quizEnd,userType,
            typeT,typeR,typeI,typeC,typeA,typeM,personName
        } = this.state;

        //alert("options : "+personName);
        for(let i = 0; i<personName.length; i++){
            if(personName[i] === "TRI"){
                this.setState({
                    typeT: typeT+1,
                    typeR: typeR+1,
                    typeI: typeI+1
                })
            }else if(personName[i] === "TRC"){
                this.setState({
                    typeT: typeT+1,
                    typeR: typeR+1,
                    typeC: typeC+1
                })
            }else if(personName[i] === "TRA"){
                this.setState({
                    typeT: typeT+1,
                    typeR: typeR+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "TRM"){
                this.setState({
                    typeT: typeT+1,
                    typeR: typeR+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "TIC"){
                this.setState({
                    typeT: typeT+1,
                    typeI: typeI+1,
                    typeC: typeC+1
                })
            }

            else if(personName[i] === "TIA"){
                this.setState({
                    typeT: typeT+1,
                    typeI: typeI+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "TIM"){
                this.setState({
                    typeT: typeT+1,
                    typeI: typeI+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "TCA"){
                this.setState({
                    typeT: typeT+1,
                    typeC: typeC+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "TCM"){
                this.setState({
                    typeT: typeT+1,
                    typeC: typeC+1,
                    typeM: typeM+1
                })
            }

            else if(personName[i] === "RIC"){
                this.setState({
                    typeR: typeR+1,
                    typeI: typeI+1,
                    typeC: typeC+1
                })
            }else if(personName[i] === "RIA"){
                this.setState({
                    typeR: typeR+1,
                    typeI: typeI+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "RIM"){
                this.setState({
                    typeR: typeR+1,
                    typeI: typeI+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "RCA"){
                this.setState({
                    typeR: typeR+1,
                    typeC: typeC+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "RCM"){
                this.setState({
                    typeR: typeR+1,
                    typeC: typeC+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "RAM"){
                this.setState({
                    typeR: typeR+1,
                    typeA: typeA+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "ICA"){
                this.setState({
                    typeI: typeI+1,
                    typeC: typeC+1,
                    typeA: typeA+1
                })
            }else if(personName[i] === "ICM"){
                this.setState({
                    typeI: typeI+1,
                    typeC: typeC+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "IAM"){
                this.setState({
                    typeI: typeI+1,
                    typeA: typeA+1,
                    typeM: typeM+1
                })
            }else if(personName[i] === "CAM"){
                this.setState({
                    typeC: typeC+1,
                    typeA: typeA+1,
                    typeM: typeM+1
                })
            }
        }


        if(userAnswer === answer){
            this.setState({
                score: score+1
            });
        }

        if(userType === "T"){this.setState({typeT: typeT+1});
        }else if(userType === "R"){this.setState({typeR: typeR+1});
        }else if(userType === "I"){this.setState({typeI: typeI+1});
        }else if(userType === "C"){this.setState({typeC: typeC+1});
        }else if(userType === "A"){this.setState({typeA: typeA+1});
        }else if(userType === "M"){this.setState({typeM: typeM+1});
        }

        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd: true
            });
        }

        this.result();
    };

    nextQuestionHandler = () => {
        const {userAnswer,answer,score,userType,
            typeT,typeR,typeI,typeC,typeA,typeM,
        } = this.state;
        if(userAnswer === answer){
            this.setState({
                score: score+1
            });
        }
        if(userType === "T"){this.setState({typeT: typeT+1});
        }else if(userType === "R"){this.setState({typeR: typeR+1});
        }else if(userType === "I"){this.setState({typeI: typeI+1});
        }else if(userType === "C"){this.setState({typeC: typeC+1});
        }else if(userType === "A"){this.setState({typeA: typeA+1});
        }else if(userType === "M"){this.setState({typeM: typeM+1});
        }

        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null,
            disabled: true
        });

        console.log(
            "userAnswer : "+userAnswer+
            " answer : "+answer+
            " score : "+score+
            " type : "+userType
        );
    };

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = (answer,userType) => {
        // alert("as : "+answer+ " userType : "+userType);
        this.setState({
            userAnswer: answer,
            userType: userType,
            disabled: false
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {currentIndex} = this.state;
        if(this.state.currentIndex != prevState.currentIndex){
            this.setState(()=>{
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer,
                    type: QuizData[currentIndex].type
                }
            })
        }
    }

    handlerChangeSelect = (e) =>{
        // alert("target : "+JSON.stringify(e.target,null,4));
        this.setState({
            personName: e.target.value,
            disabled: false
        });
    };

    render() {
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
        ];
        const {classes} = this.props;
        const {question,options,currentIndex,userAnswer,quizEnd,type} = this.state;

        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                {/*ok*/}
                <div style={{marginTop: "200px",
                    marginRight: "auto",
                    marginLeft: "auto",}}>

                    <div className={classes.containerQuizs}>
                        <h1 style={{color: "#b36233"}}>Questionnaire</h1>
                        {/*{0 < currentIndex < 29 &&*/}
                        {/*<h1 style={{color: "#b36233"}}>Phase 1 : Votre manière d’être</h1>}*/}
                        {/*{ 29 <= currentIndex <= 87 &&*/}
                        {/*<h1 style={{color: "#b36233"}}>Phase 2 :  Vos types d’environnements privilégiés</h1>}*/}
                        {/*{ 88 <= currentIndex <= 136 &&*/}
                        {/*<h1 style={{color: "#b36233"}}>Phase 3 :  Vos loisirs de prédilection</h1>}*/}
                        {/*{currentIndex > 136 &&*/}
                        {/*<h1 style={{color: "#b36233"}}>Phase 4 :  Vos métiers de rêves</h1>}*/}
                        <h3>{question}</h3>
                        <span>Question {currentIndex+1} / {QuizData.length}</span>
                        {currentIndex < 137 &&
                            options.map((option,index) =>
                                <div key={option.id} className={this.state.userAnswer === option? classes.questionSelected : classes.questions}
                                     onClick={()=> this.checkAnswer(option,type[index])}
                                >
                                    <div className={classes.optionDiv}>{option}</div>
                                </div>
                            )
                        }

                        {currentIndex >= 137 &&
                            <div>
                                <InputLabel id="demo-simple-select-label">Choisissez 5 métiers de vos rêves</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    multiple
                                    value={this.state.personName}
                                    onChange={this.handlerChangeSelect}
                                >
                                    {options.map((option,index) => (
                                        <MenuItem key={option.id} value={type[index]} className={classes.questions}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        }

                        {currentIndex < QuizData.length - 1 &&
                        <Button variant="contained" disabled={this.state.disabled}
                                onClick={this.nextQuestionHandler}
                        >
                            Suivante
                        </Button>
                        }

                        {currentIndex === QuizData.length - 1 &&
                        <div>
                            <Button variant="contained" disabled={this.state.disabled}
                                    onClick={this.finishHandler}
                            >
                                Envoyer
                            </Button>
                        </div>
                        }

                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Quiz1);
