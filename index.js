
$(document).ready(function () {
    let currTableNum;
    let tableReservations = [];

$('.tableNum').on('click', function(){
    currTableNum = $(this).text();
    $("#hiddenReserveForm")
    .css("display", "flex")
    .hide()
    .fadeIn(1500);
    $("#tableToReserve").text(`Table Number ${currTableNum}`);
});

$('#cancelIcon').on('click', function(){
    $("#hiddenReserveForm").fadeOut(1500);
})

$('#saveReservation').on('click', function(){
    tableReservations[currTableNum] = {
        reserved:true,
        reservedBy:$("#reserver").val(),
        phoneNum:$("#phone").val(),
        guestCount:$("#guests").val()
    }

    $("#hiddenReserveForm").fadeOut(1500);
    updateReservedTables();

    $(`#t${currTableNum}`).append(`<span class="tooltiptext">Name: ${tableReservations[currTableNum].reservedBy}<br>Size of party: ${tableReservations[currTableNum].guestCount}</span>`)

    //$('.tableNum').tooltip({content: "bah"});

     $('.tableNum').tooltip({
        content: function(fn)
        {
            if(typeof(tableReservations[currTableNum])!=="undefined")
            {
                return `Name: ${tableReservations[currTableNum].reservedBy}<br>Size of party: ${tableReservations[currTableNum].guestCount}`;
            }
                return "";
        }});
});

function updateReservedTables()
{
    for(let i  = 0; i<tableReservations.length; i++)
    {
        if(typeof(tableReservations[i])!=="undefined" && tableReservations[i].reserved===true)
        {
            $(`#t${i}`).css("background","#ADAAAA");
        }
    }
}

});