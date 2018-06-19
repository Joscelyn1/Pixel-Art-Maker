

let rows = "<tr> </tr>\n";
let columns = "<td> </td>\n";



$('#button').on('click', function makeGrid() {

    debugger;
    /* clears the table*/
    $('tr').remove();
    $('td').remove();

    /* get the value of the grid's height and width*/
    let inputHeight = $('#input_height').val();
    let inputWidth = $('#input_width').val();

    /*add <tr> </tr>\n as a child element of the table*/
    for (x = 1; x <= inputHeight; x++) {
        $('#pixel_canvas').append(rows);
    }
    /*add <td> </td>\n as a child element of the <tr> tags*/
    for (i = 1; i <= inputWidth; i++) {
        $('tr').append(columns);


    }
    /*when the user clicks on a cell, get the color value from the colorPicker and then
    change the clicked cell's background to that color*/
    $('td').on('click', function changeColor() {
    let cellColor = $('#colorPicker').val();
    $(this).attr("bgcolor", cellColor);
});
});








