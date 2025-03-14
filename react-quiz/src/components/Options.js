export function Options({question , answer , dispatch}) {

  const hasAnswered = answer !== null
  return (
    <div>
  <div className="options">
      {question.options.map((option , index)=> <button disabled={hasAnswered} className={ `btn btn-option ${index === answer ? "answer" : ""} ${ hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`}key={option} onClick={()=> dispatch({type:"newAnswer" , payload:index})}>{option}</button>)}
    </div>
    </div>
  )
}

export default Options
