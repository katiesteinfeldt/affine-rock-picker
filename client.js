
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
            <td><button>Add 1</button></td>
            <td><button>Minus 1</button></td>
            <td><button>Reset to 0</button></td>
            <td><button>Delete</button></td>
        </tr>    
    `);
}//end addNewRockPicker