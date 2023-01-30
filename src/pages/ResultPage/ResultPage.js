import style from "../ResultPage/ResultPage.module.css";
import {useContext} from "react";
import {ScoreContext} from "../../context/ScoreContext";




export default function ResultPage()
{
    const {FinalScore, setFinalScore} = useContext(ScoreContext)

    console.log(FinalScore)

    return(
        <div className={style.container}>
            <div className={style.image_block}>
                <img src={"/img/0-24.jpg"} alt={"Google.com"} ></img>
            </div>
        </div>
    )
}