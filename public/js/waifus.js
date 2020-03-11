$(document).ready(function() {

    let waifuThing = $("waifu");

    $(document).on("click", ".delete-waifu", handleDeleteButtonPress);

    getWaifu();

    upsertWaifu({
        waifu: waifuThing
          .val()
          .trim()
      });

    function upsertWaifu(waifuData) {
        $.post("/api/waifus", waifuData)
          .then(getWaifu);
    }

    function createWaifuRow(waifuData) {
        let newTr = $("<tr>");
        newTr.data("waifu", waifuData);
        newTr.append("<td>" + waifuData.name + "</td>");
        if (waifuData.Posts) {
          newTr.append("<td> " + waifuData.Posts.length + "</td>");
        } else {
          newTr.append("<td>0</td>");
        }
        newTr.append("<td><a href='/waifu_id=" + waifuData.id + "'>Waifu</a></td>");
        return newTr;
    }

    function getWaifu() {
        $.get("/api/waifus", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createWaifuRow(data[i]));
          }
          renderWaifuList(rowsToAdd);
          nameInput.val("");
        });
    }

    function renderWaifuList(rows) {
        waifuThing.children().not(":last").remove();
        if (rows.length) {
          console.log(rows);
          waifuThing.prepend(rows);
        }
        else {
          renderEmpty();
        }
      }

      function renderEmpty() {
        let alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must upsert a waifu before you can create a Post.");
        waifuThing.append(alertDiv);
      }

      // function handleDeleteButtonPress() {
      //   let listItemData = $(this).parent("td").parent("tr").data("waifu");
      //   let id = listItemData.id;
      //   $.ajax({
      //     method: "DELETE",
      //     url: "/api/waifus/" + id
      //   })
      //     .then(getWaifu);
      // }

});