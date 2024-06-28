document.getElementById('generateBtn').addEventListener('click', generateCalendar);

function generateCalendar() {
    const month = parseInt(document.getElementById('month').value) - 1; // Місяці в JS нумеруються з 0
    const year = parseInt(document.getElementById('year').value);

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
    const date = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0).getDate();

    let calendar = '<table border="1" cellspacing="0" cellpadding="5"><thead><tr>';
    for (let day of daysOfWeek) {
        calendar += `<th>${day}</th>`;
    }
    calendar += '</tr></thead><tbody><tr>';

    // Додаємо пусті комірки, якщо місяць починається не з понеділка
    let startDay = date.getDay() - 1;
    if (startDay < 0) startDay = 6; // Переводимо неділю (0) на останнє місце (6)

    for (let i = 0; i < startDay; i++) {
        calendar += '<td></td>';
    }

    // Заповнюємо календар числами
    for (let day = 1; day <= lastDay; day++) {
        if (startDay > 6) {
            startDay = 0;
            calendar += '</tr><tr>';
        }
        calendar += `<td>${day}</td>`;
        startDay++;
    }

    calendar += '</tr></tbody></table>';
    document.getElementById('calendar').innerHTML = calendar;
}