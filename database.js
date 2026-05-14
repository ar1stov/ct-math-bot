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
    }
};
