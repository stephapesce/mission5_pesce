$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = $("#hours").val();
        var rate = $("#rate").val();
        var errorMessage = $("#error-message");
        var total = $("#total");

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            errorMessage.text("Please enter a positive number.");
            total.val('');
        } else {
            errorMessage.text('');
            // Perform calculation
            var totalCost = hours * rate;
            total.val("$" + totalCost.toFixed(2)); // To fix the value to 2 decimal places
        }
    });
});
