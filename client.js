
$(document).ready(onReady);

let startingNumberOfRocks = 0;

function onReady (){
    $('#addRockPicker').on('click', addNewRockPicker);
}//end onReady

function addNewRockPicker(){
   let firstName = $('#rockPickerName').val();
    $('#rockPickerTable').append(`
        <tr>
            <td>${firstName}</td>
            <td>${startingNumberOfRocks}</td>
            <td><button class="addOneButton">Add 1</button></td>
            <td><button class="minusOneButton">Minus 1</button></td>
            <td><button class="resetToZeroButton">Reset to 0</button></td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>    
    `);
    //clear inputs
    $('#rockPickerName').val('');
    //
    $('.addOneButton').on('click', addOneRock);
    $('.minusOneButton').on('click', minusOneRock);
    $('.resetToZeroButton').on('click', resetToZero);
    $('.deleteButton').on('click', deleteRockPicker);
}//end addNewRockPicker

function addOneRock(){
    startingNumberOfRocks = startingNumberOfRocks +1;
    console.log(startingNumberOfRocks);
}//end addOneRock

function minusOneRock(){
    startingNumberOfRocks = startingNumberOfRocks -1;
    console.log(startingNumberOfRocks);
}

function resetToZero(){
    startingNumberOfRocks = 0;
    console.log(startingNumberOfRocks);
}

function deleteRockPicker(){
    console.log('hi sadie');
}