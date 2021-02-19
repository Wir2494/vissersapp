// Flatpickr

var f1 = flatpickr(document.getElementById('basicFlatpickr'));
var f2 = flatpickr(document.getElementById('basicFlatpickr2'));
var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
    mode: "range",
});
console.log(f3)
var f4 = flatpickr(document.getElementById('timeFlatpickr'), {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    defaultDate: "13:45"
});