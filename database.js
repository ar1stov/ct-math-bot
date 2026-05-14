const database = {
    "Математика": {
        "type": "nested",
        "sections": {
            "Алгебра": {
                "Тригонометрия": [
                    { question: "img/math/alg_trig_1.png", solution: "img/math/alg_trig_sol1.png", answer: "1" }
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
                { question: "img/phys/mech_1.png", solution: "img/phys/mech_sol1.png", answer: "10" }
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
