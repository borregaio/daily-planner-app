//Display current date
var today = dayjs();
$('#currentDay').text(today.format("D MMM YYYY"));


// Generate time-blocks
var hours = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

for (var i = 0; i < hours.length; i++) {

    var container = $('.container');
    var timeBlock = $('<div>').addClass('time-block');
    var hour = $('<div>').addClass('hour').text(hours[i]);
    var textarea = $('<textarea>').addClass('row');
    var saveBtn = $('<button>').addClass('saveBtn').html('<i class="fa-solid fa-floppy-disk"></i>');

    // Append hour, textarea, and save button to the time-block
    timeBlock.append(hour, textarea, saveBtn);

    // Append the time-block to the container
    container.append(timeBlock);


    //Add colours to each tim- block according to real time
    var currentHour = dayjs().hour();

    if (parseInt(hours[i]) === currentHour) {
        textarea.addClass('present');
    } else if (parseInt(hours[i]) === currentHour + 1) {
        textarea.addClass('future');
    } else {
        textarea.addClass('past');
    }

    // Add event handler for the save button click
    saveBtn.on('click', function () {
        var savedText = $(this).siblings('textarea').val();
        console.log(savedText);

        // Get the corresponding hour for the saved text
        var savedHour = $(this).siblings('.hour').text();
        console.log(savedHour);

        // Save the text to local storage using the hour as a key
        localStorage.setItem(savedHour, savedText);
    });

    // Load saved text from local storage and set it to the corresponding textarea
    var savedText = localStorage.getItem(hours[i]);
    if (savedText) {
        textarea.val(savedText);
    }
}
