$(document).ready(() => {

    $("button[name='submit']").click(() => {

        let passwordField = $("#password");
        let password = passwordField.val();
        let isOkay = true;


        if (password.length < 10) {

            isOkay = false
            $('#atLeast10Char').show();
        };


        if (/\d/.test(password) == false) {

            isOkay = false
            $('#needsNumber').show();
        };


        if (isOkay === false) {

            $('#successMessage').hide();
            $('#errorMessage').show();
            passwordField.removeClass('goodBox').addClass('errorBox')

        } else {

            $('#errorMessage').hide();
            $('#successMessage').show();

            passwordField.removeClass('errorBox').addClass('goodBox')

        };


        return false;

    })






})