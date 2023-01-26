import style from "./header.module.css"

export default function Header()
{
    return(

        <header className={style.header}>
            <div className={style.logo} > <img src={"img/logo.png"} alt={"https://github.com/"}/> </div>
            <div className={style.tests}>Тесты</div>
            <div className={style.test__name}>Насколько ты знаешь BTS?</div>
        </header>

    )


}
