document.addEventListener('DOMContentLoaded', () => {
    const eventHeading = document.querySelector('#eventHeading');
    const activeDates = ['2023-12-09', '2023-12-10', '2023-12-11', '2023-12-12', '2023-12-13', '2023-12-22'];
    
    const calendar = new VanillaCalendar('#calendar', {
        settings: {
            lang: 'pl',
            visibility: {
                themeDetect: 'html[data-theme]',
            },selection: {
                day: 'multiple-ranged',
            },
            selected: {
                dates: activeDates,
                month: 12,
                year: 2023,
            },
        },
        actions: {
          clickDay(event, self) {
            setEventHeading(self.selectedDates);
          },
        },
    });
    calendar.init();
    setEventHeading(activeDates);

    function setEventHeading(activeDates) {
        const dates = activeDates.map(date => new Date(date));
        const d = new Date();
        if (activeDates[0] == null) {
            eventHeading.innerHTML=`Wydarzenia: ${translateDateMonth(d)}`;
        } else if (activeDates.length == 1) {
            eventHeading.innerHTML=`Wydarzenia: ${formatDate(dates[0])}`;
        } else {
            if (dates[0].getMonth() != dates[dates.length - 1].getMonth()) {
                eventHeading.innerHTML=`Wydarzenia: ${translateDateMonth(dates[0])} - ${translateDateMonth(dates[dates.length - 1])}`;
            } else {
                eventHeading.innerHTML=`Wydarzenia: ${translateDateMonth(dates[0])}`;
            }
        }
    }

    function translateDateMonth(date) {
        date = date.toLocaleString('pl-PL', { month: 'long' });
        date = date.charAt(0).toUpperCase() + date.slice(1);
        return date;
    }

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}.${month}.${year}`;
      }
});

