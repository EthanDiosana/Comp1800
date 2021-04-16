// The method below will show a user an alert when they
// interact with an element that does not have a feature yet.
$(document).ready(function () {
    console.log("un_imp_feats.js is functioning.");

    $('.active').click(
        function () {
            console.log("Button clicked.");
            alert("Unimplemented Feature.");
        }
    );
})