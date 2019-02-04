
$(document).ready(onReady);

function onReady (){
    $('#addRockPicker').on('click', addNewRockPicker);
}//end onReady

function addNewRockPicker(){
   let firstName = $('#rockPickerName').val();
   let startingNumberOfRocks = 0;
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
    console.log('hi mom');
}//end addOneRock

function minusOneRock(){
    console.log('hi dad');
}

function resetToZero(){
    console.log('hi mary');
}

function deleteRockPicker(){
    console.log('hi sadie');
}