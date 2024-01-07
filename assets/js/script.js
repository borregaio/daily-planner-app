//Display current date

var today = dayjs();
$('#currentDay').text(today.format("D MMM YYYY"));

// Timeblocks

var hours = ['8am', '9am', '10am', '11am'];
var timeBlock = '<div>'
var textarea = '<textarea>';
var hour = '<div>';
var saveBtn = '<button>';


// for (var i = 0; i < hours.length; i++) {

//     $('.container').children().eq(i).addClass('hour time-block');
//     $('.container').children().eq(i).addClass('row description present');
// }


var container = $('.container');

container.append(timeBlock);
container.children().eq(0).addClass("time-block");
var newTimeBlock = $('.time-block');

// container.addClass('row');

newTimeBlock.append(hour);
newTimeBlock.append(textarea);
newTimeBlock.append(saveBtn);

newTimeBlock.children().eq(0).addClass('hour');
newTimeBlock.children().eq(1).addClass('row');
newTimeBlock.children().eq(2).addClass('saveBtn');
