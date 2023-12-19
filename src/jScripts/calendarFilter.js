document.addEventListener('DOMContentLoaded', () => {
    //calendar month pop-up
    const calendarMonth = new VanillaCalendar('#calendarMonth', {
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

    const calendarYear = new VanillaCalendar('#calendarYear', {
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