import { useState, Fragment } from "react";


const Question = ({question, nextQuestion, setScores, correctAnswerMessage, wrongAnswerMessage, setAppStage, selectedTopic, topics}) => {

    const [questionAnswered, setQuestionAnswered] = useState(false);
    const [isRightAnswer, setIsRightAnswer] = useState(false)
  
    const handleAnswer = (value) => {
  
      const chosenAnswer = question.options.indexOf(value) + 1;
      
      const result = chosenAnswer === question.correct
  
      setQuestionAnswered(true);
      setIsRightAnswer(result);
      setScores((prevScores) => result ? prevScores + 1 : prevScores);
      
    }
  
    const toNextQuestion = () => {
      setQuestionAnswered(false);
      nextQuestion();
    }
  
  
    return(
      <Fragment>
        <div className="block"> 
          <h2 className="block__title">{`The ${topics[selectedTopic - 1]} Quiz!`}</h2> 
          <h3 className="question">{question.question}</h3>
          <div className="question__options">
            {
              question.options.map((option, index) => {
                  return(
                    <button 
                    className={`answer-btn ${questionAnswered && index + 1 === question.correct ? '-correct' : ''}`}  
                    key={index} 
                    onClick={() => handleAnswer(option)} 
                    disabled={questionAnswered}>
                      {option}
                    </button>
                  )
              })
            }
          </div>
        </div>
        {questionAnswered &&
          <div className="result">
          {isRightAnswer ?
            <h3 className="result__title">{correctAnswerMessage}</h3>
            :
            <h3 className="result__title">{wrongAnswerMessage}</h3>
          }
          {question.id < 5 ?
            <button 
              className="block__button"
              onClick={toNextQuestion}>Next question 
            </button>
            :
            <button 
              className="block__button"
              onClick={setAppStage('result')}
              >Check your result
            </button>
          }
          </div>
        }
      </Fragment>
      
    )
  }

export default Question;