import style from "./IndexPage.module.css"
import {Link} from "react-router-dom";
export default function IndexPage()
{
    return(
        <div className={style.container}>
            <img src={"/img/start.jpg"} alt={"Google.com"} ></img>
            <div className={style.text}>
                Знаешь ли что-то о крутой современной корейской группы BTS? Давай это проверим
                ,если ты конечно не боишься)
            </div>
            <Link to="/test">
                <button className={style.button} >
                    Начать
                </button>
            </Link>
        </div>
    )
}
