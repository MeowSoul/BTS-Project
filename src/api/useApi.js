const questionData = [
    {
        id:1,
        img:"1.jpg",
        question:"Какой из нижеперечисленных растений компаньон RM?",
        answers:[
            {
                id: 1,
                text: "Вишневое дерево"
            },
            {
                id: 2,
                text: "Дерево корейского можжевельника"
            },
            {
                id: 3,
                text: "Дерево Гинкго"
            }
        ],
        correctAnswer:3,
    },
    {
        id:1,
        img:"2.jpg",
        question:"Какая из нижеперечисленных длина плеч Джина?",
        answers:[
            {
                id: 4,
                text: "47 см"
            },
            {
                id: 5,
                text: "48 см"
            },
            {
                id: 6,
                text: "49 см"
            }
        ],
        correctAnswer:5,
    },
    {
        id:1,
        img:"3.jpg",
        question:"Какой вариант из перечисленных дат и мест основания АРМИ является верным?",
        answers:[
            {
                id: 7,
                text: "29 марта 2014, Olympic Hall"
            },
            {
                id: 8,
                text: "30 марта 2014, Olympic Hall"
            },
            {
                id: 9,
                text: "22 марта 2014, Olympic Hall"
            }
        ],
        correctAnswer:7,
    }
]

function getQuestionsData() {
    return questionData
}

export default function useApi() {

    return {getQuestionsData}
}