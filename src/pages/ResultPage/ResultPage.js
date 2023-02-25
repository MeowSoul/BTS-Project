import style from "../ResultPage/ResultPage.module.css";
import {useContext, useEffect} from "react";
import {ScoreContext} from "../../context/ScoreContext";
import {useNavigate} from "react-router-dom";
import useApi from "../../api/useApi";

export default function ResultPage()
{
    const {finalScore} = useContext(ScoreContext)
    const {getQuestionsData} = useApi()
    const navigate = useNavigate()

    const questionsData = getQuestionsData()

    useEffect(() => {
        if (finalScore == null)
            return navigate("/")
    })

    return(
        <div className={style.container}>
            <div className={style.image_block}>
                <img src={"/img/0-24.jpg"} alt={"Google.com"}/>
                <div className={style.result_block}>
                    {finalScore ?? 0}/{questionsData.length}
                </div>
            </div>
        </div>
    )
}