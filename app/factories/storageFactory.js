(function() {
    app.factory('storageFactory', function() {
        return {
            partners: ["муж", "жена"],
            history: [
                {
                    who: 'муж',
                    sum: 1,
                    from: 'Без категории',
                    to: 'Наличные',
                    date: '20.12.2017',
                    comment: '1111 1111'
                },
                {
                    who: 'муж',
                    sum: 2,
                    from: 'Без категории',
                    to: 'Наличные',
                    date: '20.12.2017',
                    comment: 'comment 2222'
                },
                {
                    who: 'муж',
                    sum: 3,
                    from: 'Без категории',
                    to: 'Наличные',
                    date: '20.12.2017',
                    comment: 'comment 3333'
                },
                {
                    who: 'муж',
                    sum: 400,
                    from: 'Зарплата',
                    to: 'Наличные',
                    date: '12.12.2017',
                    comment: 'comment comment comment'
                },
                {
                    who: 'жена',
                    sum: 1500,
                    from: 'Рента',
                    to: 'Карта1',
                    date: '14.12.2017',
                    comment: 'comment comment'
                },
                {
                    who: 'муж',
                    sum: 5000,
                    from: 'Без категории',
                    to: 'Наличные',
                    date: '20.12.2017',
                    comment: 'comment comment comment comment'
                }
            ],
            categories: [
                {
                    title: 'Без категории'
                },
                {
                    title: 'Зарплата'
                },
                {
                    title: 'Рента'
                },
                {
                    title: 'Долги'
                }
            ],
            counts: [
                {
                    title: 'Наличные',
                    amount: 1900,
                    regularRefill: false,
                    regularRefillSum: 0,
                    frequencyOfPayment: 0,
                    dateOfRefill: '',
                    incomeCategory: ''
                },
                {
                    title: 'Карта1',
                    amount: 5000,
                    regularRefill: false,
                    regularRefillSum: 0,
                    frequencyOfPayment: 0,
                    dateOfRefill: '',
                    incomeCategory: ''
                }
            ]
        };
    })
})();