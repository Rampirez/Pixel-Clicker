// var db = require("../models");

// module.exports = function(app) {

//     app.get("/api/waifus", function(req, res) {
//         db.Waifu.findAll({
//           include: [db.Post]
//         }).then(function(dbWaifu) {
//           res.json(dbWaifu);
//         });
//       });

//       app.get("/api/waifus/:id", function(req, res) {
//         db.Waifu.findOne({
//           where: {
//             id: req.params.id
//           },
//           include: [db.Post]
//         }).then(function(dbWaifu) {
//           res.json(dbWaifu);
//         });
//       });

// }