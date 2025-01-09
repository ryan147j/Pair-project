
    
var players = JSON.parse(localStorage.getItem("players")) || [
  /////get items from localstorage or from array of objects containing players data
  {
    name: "Thibaut Courtois",
    position: "goalkeeper",
    jerseyNumber: 1,
    image: "../Assets/Goalkeepers/Courtois.webp",
    overallRating: 90,
  },
  {
    name: "Lunin",
    position: "goalkeeper",
    jerseyNumber: 13,
    image: "../Assets/Goalkeepers/Lunin.webp",
    overallRating: 98,
  },
  {
    name: "Carvajal",
    position: "defender",
    jerseyNumber: 2,
    image: "../Assets/Defenders/Carvajal.webp",
    overallRating: 97,
  },
  {
    name: "Alaba",
    position: "defender",
    jerseyNumber: 4,
    image: "../Assets/Defenders/Alaba.webp",
    overallRating: 93,
  },

  {
    name: "Fran Garcia",
    position: "defender",
    jerseyNumber: 20,
    image: "../Assets/Defenders/FranGarcia.webp",
    overallRating: 71,
  },
  {
    name: "Lucas",
    position: "defender",
    jerseyNumber: 17,
    image: "../Assets/defenders/Lucas.webp",
    overallRating: 80,
  },
  {
    name: "Mendy",
    position: "defender",
    jerseyNumber: 23,
    image: "../Assets/Defenders/Mendy.webp",
    overallRating: 80,
  },
  {
    name: "Militao",
    position: "defender",
    jerseyNumber: 3,
    image: "../Assets/Defenders/Militao.webp",
    overallRating: 85,
  },
  {
    name: "Rudiger",
    position: "defender",
    jerseyNumber: 22,
    image: "../Assets/Defenders/Rudiger.webp",
    overallRating: 83,
  },
  {
    name: "Vallejo",
    position: "defender",
    jerseyNumber: 18,
    image: "../Assets/Defenders/Vallejo.webp",
    overallRating: 60,
  },
  {
    name: "Arda Guler",
    position: "midfielder",
    jerseyNumber: 15,
    image: "../Assets/Midfielders/ArdaGuler.webp",
    overallRating: 91,
  },
  {
    name: "J.Bellingham",
    position: "midfielder",
    jerseyNumber: 5,
    image: "../Assets/Midfielders/Bellingham.webp",
    overallRating: 98,
  },
  {
    name: "Ceballos",
    position: "midfielder",
    jerseyNumber: 19,
    image: "../Assets/Midfielders/Ceballos.webp",
    overallRating: 90,
  },
  {
    name: "Luka Modric",
    position: "midfielder",
    jerseyNumber: 10,
    image: "../Assets/Midfielders/Modric.webp",
    overallRating: 100,
  },
  {
    name: "Camavinga",
    position: "midfielder",
    jerseyNumber: 6,
    image: "../Assets/Midfielders/Camavinga.webp",
    overallRating: 94,
  },
  {
    name: "Tchouameni",
    position: "midfielder",
    jerseyNumber: 14,
    image: "../Assets/Midfielders/Tchouameni.webp",
    overallRating: 91,
  },
  {
    name: "Valverde",
    position: "midfielder",
    jerseyNumber: 8,
    image: "../Assets/Midfielders/Valverde.webp",
    overallRating: 97,
  },
  {
    name: "Vini Jr",
    position: "forward",
    jerseyNumber: 7,
    image: "../Assets/Forwards/Vinijr.webp",
    overallRating: 99,
  },
  {
    name: "Rodrygo",
    position: "forward",
    jerseyNumber: 11,
    image: "../Assets/Forwards/Rodrygo.webp",
    overallRating: 99,
  },
  {
    name: "Mbappe",
    position: "forward",
    jerseyNumber: 9,
    image: "../Assets/Forwards/Mbappe.webp",
    overallRating: 99,
  },
  {
    name: "Endrick",
    position: "forward",
    jerseyNumber: 16,
    image: "../Assets/Forwards/Endrick.webp",
    overallRating: 89,
  },
  {
    name: "Brahim",
    position: "forward",
    jerseyNumber: 21,
    image: "../Assets/Forwards/Brahim.webp",
    overallRating: 90,
  },
  {
    name: "Z.Zidane",
    position: "coach",
    image: "../Assets/Coaches/Zidane.webp",
    overallRating: 90,
  },
];

var display = function () {
  players.map(function (e) {
     ////////// mapping over the array to append the data into a div player card
    if (e.position === "goalkeeper") {
      $(".gk").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}<input type="text" class="inp" style="display: none;"></p>
    <p>overAll rating: ${e.overallRating}<input type="text" class="inp" style="display: none;"></p></p>
    <button class="rmv">remove</button>
    <button class="upd">update</button>
  </div>
</div> `);
    } else if (e.position === "defender") {
      $(".df").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}<input type="text" class="inp" style="display: none;"></p></p>
    <p>overAll rating: ${e.overallRating}<input type="text" class="inp" style="display: none;"></p></p>
    <button class="rmv">remove</button>
    <button class="upd">update</button>
  </div>
</div> `);
    } else if (e.position === "midfielder") {
      $(".md").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}<input type="text" class="inp" style="display: none;"></p></p>
    <p>overAll rating: ${e.overallRating}<input type="text" class="inp" style="display: none;"></p></p>
    <button class="rmv">remove</button>
    <button class="upd">update</button>
  </div>
</div> `);
    } else if (e.position === "forward") {
      $(".fw").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}<input type="text" class="inp" style="display: none;"></p></p>
    <p>overAll rating: ${e.overallRating}<input type="text" class="inp" style="display: none;"></p></p>
    <button class="rmv">remove</button>
    <button class="upd">update</button>
  </div>
</div> `);
    } else if (e.position === "coach") {
      $(".ch").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Coach name : ${e.name}</h4>
    <button class="rmv">remove</button>
  </div>
</div> `);
    }
  });
};

display();

$(".searchbtn").on("click", function () {
  var input = $("#search").val().toLowerCase().trim();

  $(".card").map(function (index, element) {
    var playerName = $(element).find("h4").text().toLowerCase();

    if (playerName.includes(input)) {
      $(element).show();
    } else {
      $(element).hide();
    }
  });
});
function Createplayer(name, position, jerseyNumber, image = "", overallRating) {
  //factory function to create a new player
  var player = {
    name: name,
    position: position,
    jerseyNumber: jerseyNumber,
    image: image,
    overallRating: overallRating,
  };
  return player;
}

$("#createplayerform").on("click", "#add", function () {
  /// add player to the squad

  var newName = document.querySelector("#playername").value.toLowerCase().trim();
  var newPosition = document .querySelector("#playerposition") .value.toLowerCase().trim();
  var newjerseyNumber = document.querySelector("#jerseynumber").value;
  var newOverallrating = document.querySelector("#overallrating").value;
  var newImg = document.querySelector("#playerimage").value;

  var newOne = Createplayer(
    newName,
    newPosition,
    newjerseyNumber,
    newImg,
    newOverallrating
  );
  players.push(newOne);

  localStorage.setItem("players", JSON.stringify(players)); // set new player to the localstorqge
  window.location.href = "../Pages/index.html";
});


$(".rmv").on("click", function () {
   // hides the player card when clicked
 
     $(this).closest(".card").hide(); 
});

$(".upd").on("click",function(){
  alert("confirm to update ")

  
})






