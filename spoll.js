function rgbToRgba(rgb, alpha = 1) {
  return `rgba(${rgb
    .substring(rgb.indexOf("(") + 1, rgb.length - 1)
    .split(",")
    .join()}, ${alpha})`;
}

window.poll_name = "";
window.cand_1 = "";
window.cand_2 = "";
window.cand_3 = "";
window.cand_4 = "";

const pollData = [
  {
    id: "1",
    option1: localStorage.getItem("c1-name"),
    votes: localStorage.getItem("c1_votes"),
    color: "rgb(255, 99, 132)",
  },
  {
    id: "2",
    option2: localStorage.getItem("c2-name"),
    votes: localStorage.getItem("c2_votes"),
    color: "rgb(54, 162, 235)",
  },
  {
    id: "3",
    option3: localStorage.getItem("c3-name"),
    votes: localStorage.getItem("c3_votes"),
    color: "rgb(36, 36, 36)",
  },
  {
    id: "4",
    option4: localStorage.getItem("c4-name"),
    votes: localStorage.getItem("c4_votes"),
    color: "rgb(255, 159, 64)",
  },
];

window.pollForm = document.querySelector("#pollForm");
let title = document.getElementById("poll");
console.log(title);
if (localStorage.getItem("poll-name"))
  title.innerHTML = localStorage.getItem("poll-name");
if (localStorage.getItem("c1-name")) {
  document.getElementById("1").innerHTML = localStorage.getItem("c1-name");
}
if (localStorage.getItem("c2-name")) {
  document.getElementById("2").innerText = localStorage.getItem("c2-name");
}
if (localStorage.getItem("c3-name")) {
  document.getElementById("3").innerText = localStorage.getItem("c3-name");
}
if (localStorage.getItem("c4-name")) {
  document.getElementById("4").innerText = localStorage.getItem("c4-name");
}

if (
  $("#poll").is(":empty") ||
  $("#1").is(":empty") ||
  $("#2").is(":empty") ||
  $("#3").is(":empty") ||
  $("#4").is(":empty")
) {
  if ($("#h_btn").attr("hidden")) {
    $("#contain").attr("hidden", "hidden");
    $(".chart-container").attr("hidden", "hidden");
    $("#h_btn").removeAttr("hidden");

    $("#h_btn").click(function () {
      window.location.href = "createPoll.html";
    });
  }
}
if (localStorage.getItem("poll-name")) {
  $("#h_btn").attr("hidden", "hidden");
  $("#contain").removeAttr("hidden");
}

pollForm.addEventListener("submit", pollFormSubmit);
var id;
function pollFormSubmit(event) {
  event.preventDefault();
  const pollOptionInput = pollForm.querySelectorAll(
    "input[name='pollOptions']"
  );
  for (radioButtons of pollOptionInput)
    if (radioButtons.checked) {
      id = radioButtons.id;
      console.log(id);
    }

  if (pollOptionInput) {
    switch (id) {
      case "first":
        let first = localStorage.getItem("c1_votes");
        first++;
        localStorage.removeItem("c1_votes");
        localStorage.setItem("c1_votes", first);

        pollData.votes = localStorage.getItem("c1_votes");
        break;
      case "second":
        let second = localStorage.getItem("c2_votes");
        second++;
        localStorage.removeItem("c2_votes");

        localStorage.setItem("c2_votes", second);

        pollData.votes = localStorage.getItem("c2_votes");
        break;
      case "third":
        let third = localStorage.getItem("c3_votes");
        third++;
        localStorage.removeItem("c3_votes");

        localStorage.setItem("c3_votes", third);

        pollData.votes = localStorage.getItem("c3_votes");
        break;
      case "fourth":
        let fourth = localStorage.getItem("c4_votes");
        fourth++;
        localStorage.removeItem("c4_votes");

        localStorage.setItem("c4_votes", fourth);

        pollData.votes = localStorage.getItem("c4_votes");
        console.log(pollData.votes);
        break;
    }

    pollChart.data.datasets[0].data = pollData.map(
      (pollOption) => pollOption.votes
    );
    console.log(pollChart);
    pollChart.update();
    window.location = window.location;
  }
}

if ($("#poll").is(":empty")) {
} else {
  let label1 = localStorage.getItem("c1-name");
  let label2 = localStorage.getItem("c2-name");
  let label3 = localStorage.getItem("c3-name");
  let label4 = localStorage.getItem("c4-name");

  let arr = [label1, label2, label3, label4];

  const ctx = document.getElementById("chart").getContext("2d");
  console.log(ctx);

  var pollChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: arr.map((pollOption) => pollOption),
      datasets: [
        {
          label: "# of Votes",
          data: pollData.map((pollOption) => pollOption.votes),
          backgroundColor: pollData.map((pollOption) =>
            rgbToRgba(pollOption.color, 0.75)
          ),
          borderWidth: 3,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: localStorage.getItem("poll-name"),
        fontColor: "#333",
        fontSize: 20,
        padding: 20,
      },
      legend: {
        display: false,
      },
    },
  });
}
