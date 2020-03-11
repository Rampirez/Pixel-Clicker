$(document).ready(function() {

    let userName = $("User");
    let hiScore = $("High-Score");

    // $(document).on("click", ".delete-user", handleDeleteButtonPress);

    getUsers();

    upsertUser({
        name: userName,
        highscore: hiScore
          .val()
          .trim()
      });

    function upsertUser(userData) {
        $.post("/api/highscores", userData)
          .then(getUsers);
      }

      function createUserRow(userData) {
        let newTr = $("<tr>");
        newTr.data("userName", userData);
        newTr.append("<td>" + userData.name + "</td>");
        if (userData.Posts) {
          newTr.append("<td> " + userData.Posts.length + "</td>");
        } else {
          newTr.append("<td>0</td>");
        }
        newTr.append("<td><a href='/user_id=" + userData.id + "'>User's highdcore</a></td>");
        return newTr;
      }

      function getUsers() {
        $.get("/api/highscores", function(data) {
          let rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createUserRow(data[i]));
          }
          renderUserList(rowsToAdd);
          nameInput.val("");
        });
      }

      function renderUserList(rows) {
        userName.children().not(":last").remove();
        hiScore.children(":last").remove();
        if (rows.length) {
          console.log(rows);
          userList.prepend(rows);
        }
        else {
          renderEmpty();
        }
      }

      function renderEmpty() {
        let alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must upsert the user's highscore before you can create a Post.");
        userName.append(alertDiv);
      }

      // function handleDeleteButtonPress() {
      //   let listItemData = $(this).parent("td").parent("tr").data("user");
      //   let id = listItemData.id;
      //   $.ajax({
      //     method: "DELETE",
      //     url: "/api/highscores/" + id
      //   })
      //     .then(getUsers);
      // }

});