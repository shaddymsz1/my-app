import React, {Fragment} from "react";
import Breadcrumb from "../../common/breadcrumb";
import Vimeo from '@u-wave/react-vimeo';

const QuizBySubSectionLMS = () => {

    const questionList = [{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },{
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    }, {
        question: "Who build this App",
        options: ['hello', 'hello1', 'hello2', 'hello3'],
        correctAns: "hello",
        questionId: "1",
    },]

    const handleSelectAnswer = (questionId, selectedOption) => {
        console.log('ques id', questionId, 'selected Ans', selectedOption)
    }


    return (
        <Fragment>

            <Breadcrumb parent="section1" title="Play Quiz"/>
            <div className="container-fluid">
                <div className="row">



                    <div className="col-md-12">

                        {questionList.length > 0 && questionList.map((key, index) => {
                            return (
                                <Fragment>
                                    <div className="form-control mb-2">
                                        <label className="col-form-label col-sm-3 pt-0 pb-2 font-weight-bold">
                                            Question {index + 1} :  {key.question}
                                        </label>
                                        <div className="row radio-inline">
                                            {key.options.map((option, i) => {
                                                return (
                                                    <Fragment>
                                                        <div className="radio radio-primary ml-5">
                                                            <input id={option} type="radio"
                                                                   onClick={() => handleSelectAnswer(key.questionId, option)}
                                                                   name={key.questionId}
                                                                   value={option}/>
                                                            <label htmlFor={option}>{option}</label>
                                                        </div>

                                                    </Fragment>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                        }

                    </div>


                </div>
            </div>

        </Fragment>
    )
}

export default QuizBySubSectionLMS