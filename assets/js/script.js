// Select container element where data planner will be appended
const containerEl = $(".container");

// Variable to store current date
let date = moment().format("dddd, MMMM Do YYYY");

// Data object to be saved in local storage
let plannerData;

// Check local storage for planner data
if (!localStorage.getItem("planner-data")) {
    plannerData = {};
}
else {
    plannerData = JSON.parse(localStorage.getItem("planner-data"))
};

// Append date to header
const dateEl = $("#currentDay");
dateEl.text(`${date}`)

// Function to create rows and columns for each time block
const renderTimeBlocks = () => {
    // Start i at 9 because first time block starts at 9 am
    for (let i = 9; i < 18; i++) {
        let time;
        if (i < 12) {
            time = `${i}am`
        } 
        else if (i === 12) {
            time = `${i}pm`
        }
        // when i is larger than 12 subtract 12 so we can use 12 hour clock times
        else {
            time = `${i - 12}pm`
        }
        
        // Append rows to container
        containerEl.append(`<div class='row no-gutters d-flex justify-content-center' data-time='time-${time}'</div>`)

        // Select row to make sure columns are appended to the correct row
        const row = $(`.row[data-time='time-${time}']`);

        // Append columns to row

        // Time column
        row.append(`<div class='col-2 col-md-2 col-lg-1  hour' data-time='time-${time}'>${time} </div>`);

        // Text input column
        row.append(`<div class='col-8 col-md-8 col-lg-10 border-top border-bottom border-light' data-time='time-${time}'><textarea>test</textarea></div>`);

        // Save button column
        row.append("<div class='col-2 col-md-2 col-lg-1 d-flex justify-content-center align-items-center saveBtn'><i class='far fa-save fa-2x'></i></div>")
    }
};

const saveData = () => {
    containerEl.children(".row").each(function () {
        const key = $(this).children("div").attr("data-time");
        const value = $(this).children("div").children("textarea").text();
        console.log(key, value);
        plannerData[key] = value
        
    });
};

renderTimeBlocks();

saveData();