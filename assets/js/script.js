const container = $(".container");


// Function to create rows and columns for each time block
const renderTimeBlocks = () => {
    // Start i at 9 because first time block starts at 9 am
    for (let i = 9; i < 18; i++) {
        let time;
        // use I to determine time for column block
        if (i < 12) {
            time = `${i} am`
        } 
        else if (i === 12) {
            time = `${i} pm`
        }
        else {
            time = `${i - 12} pm`
        }
        
        // Append rows to container
        container.append(`<div class='row no-gutters d-flex justify-content-center' data-time='${time}'</div>`)

        // Select row to make sure columns are appended to the correct row
        const row = $(`.row[data-time='${time}']`);

        // append columns to row
        row.append(`<div class='col-2 col-md-2 col-lg-1  hour'>${time} </div>`);
        row.append("<div class='col-8 col-md-8 col-lg-10 border-top border-bottom border-light'><textarea>test</textarea></div>");
        row.append("<div class='col-2 col-md-2 col-lg-1 d-flex justify-content-center align-items-center saveBtn'><i class='far fa-save fa-2x'></i></div>")
    }
}

renderTimeBlocks();