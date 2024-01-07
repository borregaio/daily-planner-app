//Display current date
var today = dayjs();
$('#currentDay').text(today.format("D MMM YYYY"));


// Generate timeblocks
var hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

for (var i = 0; i < hours.length; i++) {

    var container = $('.container');
    var timeBlock = $('<div>').addClass('time-block');
    var hour = $('<div>').addClass('hour').text(hours[i]);
    var textarea = $('<textarea>').addClass('row');
    var saveBtn = $('<button>').addClass('saveBtn').html('<i class="fa-solid fa-floppy-disk"></i>');

    // Append hour, textarea, and save button to the timeblock
    timeBlock.append(hour, textarea, saveBtn);

    // Append the timeblock to the container
    container.append(timeBlock);


    //Add colours to each timeblock according to real time
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
