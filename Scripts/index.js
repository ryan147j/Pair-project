var players = localStorage.getItem("players") || [    /////get items from localstorage or from array of objects containing players data
  {
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    jerseyNumber: 1,
    image: "../Assets/Goalkeepers/Courtois.webp",
    overallRating: 90,
  },
  {
    name: "Lunin",
    position: "Goalkeeper",
    jerseyNumber: 13,
    image: "../Assets/Goalkeepers/Lunin.webp",
    overallRating: 98,
  },
  {
    name: "Carvajal",
    position: "Defender",
    jerseyNumber: 2,
    image: "../Assets/Defenders/Carvajal.webp",
    overallRating: 97,
  },
  {
    name: "Alaba",
    position: "Defender",
    jerseyNumber: 4,
    image: "../Assets/Defenders/Alaba.webp",
    overallRating: 93,
  },

  {
    name: "Fran Garcia",
    position: "Defender",
    jerseyNumber: 20,
    image: "../Assets/Defenders/FranGarcia.webp",
    overallRating: 71,
  },
  {
    name: "Lucas",
    position: "Defender",
    jerseyNumber: 17,
    image: "../Assets/defenders/Lucas.webp",
    overallRating: 80,
  },
  {
    name: "Mendy",
    position: "defenders",
    jerseyNumber: 23,
    image: "../Assets/Defenders/Mendy.webp",
    overallRating: 80,
  },
  {
    name: "Militao",
    position: "Defender",
    jerseyNumber: 3,
    image: "../Assets/Defenders/Militao.webp",
    overallRating: 85,
  },
  {
    name: "Rudiger",
    position: "Defender",
    jerseyNumber: 22,
    image: "../Assets/Defenders/Rudiger.webp",
    overallRating: 83,
  },
  {
    name: "Vallejo",
    position: "Defender",
    jerseyNumber: 18,
    image: "../Assets/Defenders/Vallejo.webp",
    overallRating: 60,
  },
  {
    name: "Arda Guler",
    position: "Midfielder",
    jerseyNumber: 15,
    image: "../Assets/Midfielders/ArdaGuler.webp",
    overallRating: 91,
  },
  {
    name: "J.Bellingham",
    position: "Midfielder",
    jerseyNumber: 5,
    image: "../Assets/Midfielders/Bellingham.webp",
    overallRating: 98,
  },
  {
    name: "Ceballos",
    position: "Midfielder",
    jerseyNumber: 19,
    image: "../Assets/Midfielders/Ceballos.webp",
    overallRating: 90,
  },
  {
    name: "Luka Modric",
    position: "Midfielder",
    jerseyNumber: 10,
    image: "../Assets/Midfielders/Modric.webp",
    overallRating: 100,
  },
  {
    name: "Camavinga",
    position: "Midfielder",
    jerseyNumber: 6,
    image: "../Assets/Midfielders/Camavinga.webp",
    overallRating: 94,
  },
  {
    name: "Tchouameni",
    position: "Midfielder",
    jerseyNumber: 14,
    image: "../Assets/Midfielders/Tchouameni.webp",
    overallRating: 91,
  },
  {
    name: "Valverde",
    position: "Midfielder",
    jerseyNumber: 8,
    image: "../Assets/Midfielders/Valverde.webp",
    overallRating: 97,
  },
  {
    name: "Vini Jr",
    position: "Forward",
    jerseyNumber: 7,
    image: "../Assets/Forwards/Vinijr.webp",
    overallRating: 99,
  },
  {
    name: "Rodrygo",
    position: "Forward",
    jerseyNumber: 11,
    image: "../Assets/Forwards/Rodrygo.webp",
    overallRating: 99,
  },
  {
    name: "Mbappe",
    position: "Forward",
    jerseyNumber: 9,
    image: "../Assets/Forwards/Mbappe.webp",
    overallRating: 99,
  },
  {
    name: "Endrick",
    position: "Forward",
    jerseyNumber: 16,
    image: "../Assets/Forwards/Endrick.webp",
    overallRating: 89,
  },
  {
    name: "Brahim",
    position: "Forward",
    jerseyNumber: 21,
    image: "../Assets/Forwards/Brahim.webp",
    overallRating: 90,
  },
  {
    name: "Z.Zidane",
    position: "Coach",
    image: "../Assets/Coaches/Zidane.webp",
    overallRating: 90,
  },
];

players.map(function (e) {                         ////////// mapping over the array to append the data into a div player card
  if (e.position === "Goalkeeper") {
    $(".gk").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  } else if (e.position === "Defender") {
    $(".df").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  } else if (e.position === "Midfielder") {
    $(".md").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  } else if (e.position === "Forward") {
    $(".fw").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4>Player name : ${e.name}</h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  } else if (e.position === "Coach") {
    $(".ch").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Coach name : ${e.name}</h4>
  </div>
</div> `);
  }
});

var button = document.querySelector(".searchbtn");           ///////////// a search function that loops over player cards 

button.onclick = function () {
  var input = document.getElementById("search").value.toLowerCase();

  var squad = document.querySelectorAll(".card");

  for (var i = 0; i < squad.length; i = i + 1) {
    var playerName = squad[i].querySelector("h4").textContent.toLowerCase();

    if (playerName.includes(input)) {
      squad[i].style.display = "block";
    } else {
      squad[i].style.display = "none";
    }
  }
};
