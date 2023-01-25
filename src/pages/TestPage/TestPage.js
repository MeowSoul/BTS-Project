
import style from "./TestPage.module.css"
import {useState} from "react";


export default function  TestPage()
{
    const [count, setCount] = useState(1);

    const [score,setScore ] = useState(0);

    const questions = [

        {
            id:1,
            img:"1.jpg",
            question:"Ты любишь Чон Гука?",
            answers:[
                {
                    id: 1,
                    text: "Да"
                },
                {
                    id: 2,
                    text: "Да"
                },
                {
                    id: 3,
                    text: "ДА,АБСОЛЮТНО"
                }
            ],
            correctAnswer:3,
        },

        {
            id:1,
            img:"2.jpg",
            question:"Ты любишь Чон Гука?",
            answers:[
                {
                    id: 1,
                    text: "yes"
                },
                {
                    id: 2,
                    text: "YES!"
                },
                {
                    id: 3,
                    text: "ДА,АБСОЛЮТНО"
                }
            ],
            correctAnswer:3,
        },

        {
            id:1,
            img:"3.jpg",
            question:"Ты любишь Чон Гука?",
            answers:[
                {
                    id: 1,
                    text: "Да"
                },
                {
                    id: 2,
                    text: "Да"
                },
                {
                    id: 3,
                    text: "ДА,АБСОЛЮТНО"
                }
            ],
            correctAnswer:3,
        }
    ]



    return(
        <div className={style.container}>

            <div className={style.img} style={{backgroundImage:`url(img/${questions[count - 1].img})`}}></div>

            <div className={style.question}>
                <div className={style.question__caption}>{questions[count - 1].question}</div>
                <div className={style.question__answers}>
                            {questions[count - 1].answers.map(question => (
                                question.id === questions[count - 1].correctAnswer ? (

                                    <div className={style.question__answer}>
                                        <input type={"radio"} name={count}/>

                                        <p>{question.text}</p>

                                    </div>
                                    )
                                    : (

                                    <div className={style.question__answer}>
                                            <input type={"radio"} name={count} />

                                            <p>{question.text}</p>

                                    </div>
                                    )
                            ))}
                </div>
            </div>

            <div className={style.counter__container}>
                <button className={style.button}
                        onClick={() =>{
                            setCount(count + 1)
                            if (count >= questions.length){
                                setCount(1);
                            }


                        }

                        }
                    >Дальше
                </button>
                <div className={style.counter}>{count}/{questions.length}</div>
            </div>
        </div>


    )


}