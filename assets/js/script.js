//Display current date

var today = dayjs();
$('#currentDay').text(today.format("D MMM YYYY"));

// Timeblocks

var hours = ['8am', '9am', '10am', '11am'];

for (var i = 0; i < hours.length; i++) {

    var container = $('.container');
    var timeBlock = $('<div>').addClass('time-block');
    var hour = $('<div>').addClass('hour');
    var textarea = $('<textarea>').addClass('row');
    var saveBtn = $('<button>').addClass('saveBtn');

    // Append hour, textarea, and save button to the time-block
    timeBlock.append(hour, textarea, saveBtn);

    // Append the time-block to the container
    container.append(timeBlock);

}



// //Create a new time block and add class
// container.append(timeBlock);
// container.children().eq(0).addClass("time-block");
// var newTimeBlock = $('.time-block');

// //Create the hour/description/button setions of the time block and append
// newTimeBlock.append(hour);
// newTimeBlock.append(textarea);
// newTimeBlock.append(saveBtn);

// newTimeBlock.children().eq(0).addClass('hour');
// newTimeBlock.children().eq(1).addClass('row');
// newTimeBlock.children().eq(2).addClass('saveBtn');