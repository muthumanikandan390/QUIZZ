function StartScreen({numQuestions , dispatch}) {
  return (
    <div className="start">
      <h2> welcome to react quiz</h2>
    <h3> {numQuestions} question to test your mastery</h3>
    <button className="btn btn-ui" onClick={()=> dispatch({type:"start"})}>lets start</button>
    </div>
  )
}

export default StartScreen
