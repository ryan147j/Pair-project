$(".managebtn").on("click", function () {
  window.location.href = "managep.html";
});

var players = localStorage.getItem("players") || [
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
];

players.map(function (e) {
  if (e.position === "Goalkeeper") {
    $(".gk").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>player name : ${e.name}</b></h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  } else if (e.position === "Defender") {
    $(".df").append(`
            
            <div class="card">
  <img src=${e.image} alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>player name : ${e.name}</b></h4>
    <p>jursey number : ${e.jerseyNumber}</p>
    <p>overAll rating: ${e.overallRating}</p>
  </div>
</div> `);
  }
});
