
import start from "../../img/start.jpg"
import style from "./IndexPage.module.css"
export default function IndexPage()
{
    return(
        <div className={style.container}>
            <img src={start}></img>
            <div className={style.text}>
                Знаешь ли что-то о крутой современной корейской группы BTS? Давай это проверим
                ,если ты конечно не боишься)
            </div>
            <button className={style.button}>
                Начать
            </button>
        </div>
    )
}
