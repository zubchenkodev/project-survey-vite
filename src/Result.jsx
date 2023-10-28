const Result = ({scores, halloweenQuizResults, name}) => {
    return(
        <div className="summary block">
            <h2 className="block__title">Congratulations, {name}! 
             {halloweenQuizResults[scores]}
            </h2>
        </div>
    )
  
}

export default Result;