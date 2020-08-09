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
        height: "30px",
        width: "200px",
        border: "1px solid"
    },
    questionSelected: {
        height: "30px",
        width: "200px",
        border: "1px solid",
        backgroundColor: "red"
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
            disabled: true
        };
    }

    loadQuiz = () =>{
        const {currentIndex} = this.state;
        this.setState(()=>{
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        })
    };

    finishHandler = () =>{
        const {userAnswer,answer,score,quizEnd} = this.state;
        if(userAnswer === answer){
            this.setState({
                score: score+1
            });
        }
        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd: true
            });
        }


        console.log(
            "userAnswer : "+this.state.userAnswer+
            "answer : "+this.state.answer+
            "score : "+this.state.score
        );

    };

    nextQuestionHandler = () => {
        const {userAnswer, answer, score} = this.state;
        if(userAnswer === answer){
            this.setState({
                score: score+1
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        });

        alert(
            "userAnswer : "+userAnswer+
            " answer : "+answer+
            " score : "+score
        );
    };

    componentDidMount() {
        this.loadQuiz();
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
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
                    answer: QuizData[currentIndex].answer
                }
            })
        }
    }

    render() {
        const {classes} = this.props;
        const {question,options,currentIndex,userAnswer,quizEnd} = this.state;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <h1>{question}</h1>
                    <span>Question {currentIndex+1} / {QuizData.length}</span>
                    {
                        options.map(option =>
                            <p key={option.id} className={this.state.userAnswer === option? classes.questionSelected : classes.questions}
                               onClick={()=> this.checkAnswer(option)}
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
                        <button disabled={this.state.disabled}
                                onClick={this.finishHandler}
                        >
                            Submit
                        </button>
                    }
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(Quiz);
