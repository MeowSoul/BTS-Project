const questionData = [
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
                id: 4,
                text: "yes"
            },
            {
                id: 5,
                text: "YES!"
            },
            {
                id: 6,
                text: "ДА,АБСОЛЮТНО"
            }
        ],
        correctAnswer:6,
    },
    {
        id:1,
        img:"3.jpg",
        question:"Ты любишь Чон Гука?",
        answers:[
            {
                id: 7,
                text: "Да"
            },
            {
                id: 8,
                text: "Да"
            },
            {
                id: 9,
                text: "ДА,АБСОЛЮТНО"
            }
        ],
        correctAnswer:9,
    }
]

function getQuestionsData() {
    return questionData
}

export default function useApi() {

    return {getQuestionsData}
}