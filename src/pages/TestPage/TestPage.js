import style from "./TestPage.module.css"
import useApi from "../../api/useApi";
import {useState} from "react";


export default function TestPage()
{
    const [currentQuestion,setCurrentQuestion] = useState(1)



    return (
        <div className={style.container}>
            <div className={style.container__img} style={{backgroundImage:"url(img/1.jpg)"}}></div>
            <div className={style.container__questionNumber}>
                <div className={style.questionCounter}>
                    {currentQuestion}/3
                    <button
                        className={style.questionCounterButton}
                        onClick={() => setCurrentQuestion(prev => prev + 1)}
                    >
                        Дальше
                    </button>
                </div>
            </div>
        </div>
    )


}