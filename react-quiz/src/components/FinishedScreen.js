function FinishedScreen({points}) {

  const percentage = (points / 280) * 100 ;

  return (
    <p className="result">

      you scored <strong>{points}</strong> out of 280 ({Math.ceil(percentage)}%)

    </p>
  )
}

export default FinishedScreen
