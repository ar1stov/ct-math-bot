const database = {
    "Математика": {
        "type": "nested",
        "sections": {
            "Алгебра": {
                "Тригонометрия": [
                    { question: "img/math/trig/1.png", solution: "img/math/trig/1_resh.png", "options": ["1", "2", "3", "4", "5"], answer: "1,2,3" },
                    { question: "img/math/trig/2.png", solution: "img/math/trig/2_resh.png", answer: "24" }
                ],
                "Прогрессии": []
            },
            "Геометрия": {
                "Планиметрия": [],
                "Стереометрия": []
            }
        }
    },
    "Физика": {
        "type": "flat",
        "topics": {
            "Механика": [
                {
                    "question": "https://i.imgur.com/42M4oBy.png",
                    "solution": "https://i.imgur.com/7xYxTS5.png",
                    "answer": "56"
                }
            ],
            "Электричество": []
        }
    },
    "Русский язык": {
        "type": "flat",
        "topics": { "Орфография": [], "Пунктуация": [] }
    },
   "География": {
        "type": "flat",
        "topics": {
             "Физическая география": [
            {
                "question": "img/geo/phys_q1.png",
                "solution": "img/geo/phys_sol1.png",
                "options": ["Эверест", "Килиманджаро", "Эльбрус", "Монблан"],
                "answer": "Эверест"
            },
            {
                "question": "img/geo/phys_q2.png",
                "solution": "img/geo/phys_sol2.png",
                "options": ["Тихий", "Атлантический", "Индийский", "Северный Ледовитый"],
                "answer": "Тихий"
            }
        ],
             "Социально-экономическая география": [
            {
                "question": "img/geo/econ_q1.png",
                "solution": "img/geo/econ_sol1.png",
                "options": ["Китай", "Индия", "США", "Индонезия"],
                "answer": "Индия"
            }
        ]
        }
    },
};
