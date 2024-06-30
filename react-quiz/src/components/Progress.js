function Progress({index , questions , points , answer}) {


  let questionCount = questions.length;

  return (
    <div className="progress">
      <progress max={questionCount} value={index + Number(answer !== null )} />
      <h3>`question {index + 1}/{questionCount} 30`</h3>
      <h3>{points}/280</h3>
    </div>
  )
}

export default Progress
