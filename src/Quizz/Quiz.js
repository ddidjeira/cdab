import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import QuizData from "./QuizData";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    questions: {
        width: "200px",
        border: "1px solid"
    },
    questionSelected: {
        height: "30px",
        width: "200px",
        border: "1px solid",
        backgroundColor: "#ffc10773"
    }
});

class Quiz extends Component {
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

        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd: true
            });
        }
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
            userAnswer: null
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

    render() {
        const {classes} = this.props;
        const {question,options,currentIndex,userAnswer,quizEnd,type} = this.state;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <h1>{question}</h1>
                    <span>Question {currentIndex+1} / {QuizData.length}</span>
                    {
                        options.map((option,index) =>
                            <p key={option.id} className={this.state.userAnswer === option? classes.questionSelected : classes.questions}
                               onClick={()=> this.checkAnswer(option,type[index])}
                            >
                                {option}
                            </p>
                        )
                    }

                    {currentIndex < QuizData.length - 1 &&
                        <button disabled={this.state.disabled}
                                onClick={this.nextQuestionHandler}
                        >
                            Next question
                        </button>
                    }

                    {currentIndex === QuizData.length - 1 &&
                        <div>
                            <button disabled={this.state.disabled}
                                     onClick={this.finishHandler}
                             >
                                 Submit
                            </button>
                            <br/>
                            <button onClick={this.result}>
                                Resultat
                            </button>
                        </div>

                    }
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Quiz);
