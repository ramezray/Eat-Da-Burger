// $(function () {
//     $("#eat").on("click", function (event) {
//         var id = $(this).data("id");
//         var new_burger = $(this).data("new_burger");

//         var new_burger_state = {
//             new_burger: new_burger
//         };

//         // Send the PUT request.
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: new_burger_state
//         }).then(
//             function () {
//                 location.reload();
//             }
//         );
//     });

//     $(".create-form").on("submit", function (event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         var new_burger = {
//             name: $("#burger_name").val().trim(),
//             devoured: $("#devoured").val().trim()
//         };

//         // Send the POST request.
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: new_burger
//         }).then(
//             function () {
//                 location.reload();
//             }
//         );
//     });

//     $("#eat").on("click", function (event) {
//         var id = $(this).data("id");

//         // Send the DELETE request.
//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(
//             function () {
//                 location.reload();
//             }
//         );
//     });
// });