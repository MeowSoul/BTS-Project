
import style from "./TestPage.module.css"
import {useState} from "react";


export default function  TestPage()
{
    const [count, setCount] = useState(1);

    return(
        <div className={style.container}>
            <div className={style.counter__container}>
                <button className={style.button}
                        onClick={() =>{
                            setCount(count + 1)
                            if (count >= 8){
                                setCount(1);
                            }
                        }

                        }
                    >Дальше
                </button>
                <div className={style.counter}>{count}/8</div>
            </div>
        </div>


    )


}