import Header from "./Header"
import Main from "./Main"
import Loader from "./Loader"
import Error from "./Error"
import { useEffect , useReducer } from "react"
import StartScreen from "./StartScreen"
import Question from "./Question"
import NextButton from "./NextButton"
import Progress from "./Progress"
import FinishedScreen from "./FinishedScreen"

const initialState = { questions : [] ,
   status: "loading",
   index: 0,
   answer:null,
   points:0
  }

function reducer (state , action) {
  switch (action.type){
    case "dataReceived" :
      return {
        ...state , questions: action.payload,
        status:"ready",
      }
    case "dataFailed":
      return {
        ...state , status:"error"
      }

    case "start":
      return {
        ...state , status:"active"
      }
    case "newAnswer":

      const question = state.questions.at(state.index)

      return {
        ...state , answer: action.payload , points : action.payload === question.correctOption ? state.points + 10 : state.points
      }

      case "nextQuestion":

        return {

          ...state , index : state.index + 1 , answer : null ,

        }

    default:
      throw new Error("action unknown");
  }

}

export default function App() {

  const [{questions , status , index , answer , points }  , dispatch] = useReducer(reducer , initialState)

  const numQuestions = questions.length;

  useEffect(function(){

    fetch("http://localhost:9000/questions")
    .then((res)=> res.json())
    .then(data =>dispatch({type : "dataReceived" , payload : data}))
    .catch(err=>dispatch({type : "dataFailed" }))

  },[])

  return <div className="app">

    <Header />


    <Progress index={index} questions={questions} points={points} answer={answer}/>


    <Main>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen numQuestions = {numQuestions} dispatch = {dispatch}/>}
      {status === 'active' &&
      <>
      <Question question = {questions[index]}
      dispatch = {dispatch} answer={answer}/>

      <NextButton dispatch = {dispatch} answer={answer}/>


      </>




      }
       {status === "finished" && <FinishedScreen points={points}/>}
    </Main>

     </div>

}
