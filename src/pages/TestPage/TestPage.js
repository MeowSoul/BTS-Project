import style from "./TestPage.module.css"
import {useState} from "react";
import useApi from "../../api/useApi";
import {useNavigate} from "react-router-dom";

export default function  TestPage()
{
    const [count, setCount] = useState(1);
    const [score, setScore] = useState(0);

    const [currentResponse, setCurrentResponse] = useState(null)

    const {getQuestionsData} = useApi()
    const navigate = useNavigate()

    const questions = getQuestionsData()

    const onNextClickHandler = () => {
        if (currentResponse != null) {
            if (currentResponse === questions[count - 1].correctAnswer)
                setScore(score + 1)
        }
        if (questions.length === count)
            return navigate("/result")

        setCurrentResponse(null)
        setCount(count + 1)
    }

    const onRadioClickHandler = (ctx) => {
        const answerId = ctx.target.dataset.id
        setCurrentResponse(answerId)
    }

    return (
        <div className={style.container}>
            <div
                className={style.img}
                style={{backgroundImage:`url(img/${questions[count - 1].img})`}}
            >
            </div>
            <div className={style.question}>
                <div className={style.question__caption}>
                    {questions[count - 1].question}
                </div>
                <div className={style.question__answers}>
                    {questions[count - 1].answers.map(answer => (
                        <div className={style.question__answer} key={answer.id}>
                            <input
                                type={"radio"}
                                data-id={answer.id}
                                name={count}
                                onClick={onRadioClickHandler}
                            />
                            <p>{answer.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.counter__container}>
                <button className={style.button}
                        onClick={onNextClickHandler}>Дальше
                </button>
                <div className={style.counter}>{count}/{questions.length}</div>
            </div>
        </div>


    )


}