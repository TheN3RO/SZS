document.addEventListener('DOMContentLoaded', () => {
    const calendars = document.querySelectorAll('.calendarDate');

    //calendar month pop-up
    calendars.forEach(calendar => {
        const calendarDate = new VanillaCalendar(calendar, {
            input: true,
            type: "month",
            actions: {
                clickMonth(e, self) {
                    if (!self.HTMLInputElement) return;
                    if (self.selectedMonth && self.selectedYear) {
                        self.HTMLInputElement.value = self.locale['months'][self.selectedMonth] + " " + self.selectedYear;
                        console.log();
                    } else {
                        self.HTMLInputElement.value = '';
                    }
                },
            },
            settings: {
                lang: 'pl',
                visibility: {
                    themeDetect: 'html[data-theme]',
                    positionToInput: 'center',
                },
            },
            
        });
        calendar.value = "Styczeń 2013";
        calendar.classList.add('calendarDate');
        calendarDate.init();
    })
})