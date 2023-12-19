document.addEventListener('DOMContentLoaded', () => {
    const calendarsMonth = document.querySelectorAll('.calendarMonth');
    const calendarsYear = document.querySelectorAll('.calendarYear');

    //calendar month pop-up
    calendarsMonth.forEach(calendar => {
        const calendarMonth = new VanillaCalendar(calendar, {
            input: true,
            type: 'month',
            settings: {
                lang: 'pl',
                visibility: {
                    themeDetect: 'html[data-theme]',
                },
            },
            actions: {
                changeToInput(e, calendar, self) {},
            },
        });
        calendarMonth.init();
    })
    

    //calendar year pop-up
    calendarsYear.forEach(calendar => {
        const calendarYear = new VanillaCalendar(calendar, {
            input: true,
            type: 'year',
            settings: {
                lang: 'pl',
                visibility: {
                    themeDetect: 'html[data-theme]',
                },
            },
            actions: {
                changeToInput(e, calendar, self) {},
            },
        });
        calendarYear.init();
    })
})