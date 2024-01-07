//Display current date

var today = dayjs();
$('#currentDay').text(today.format("D MMM YYYY"));

// Timeblocks

var hours = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

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


    //Add colours to each time block depending on the real time
    var currentHour = dayjs().hour();

    if (parseInt(hours[i]) === currentHour) {
        textarea.addClass('present');
    } else if (parseInt(hours[i]) === currentHour + 1) {
        textarea.addClass('future');
    } else {
        textarea.addClass('past');
    }

}