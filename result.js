if (localStorage.length > 0) {
  document.getElementById("poll-nme").innerHTML =
    localStorage.getItem("poll-name");
  console.log(localStorage.getItem("c1-name"));
  document.getElementById("c1-nme").innerHTML = localStorage.getItem("c1-name");
  document.getElementById("c2-nme").innerHTML = localStorage.getItem("c2-name");
  document.getElementById("c3-nme").innerHTML = localStorage.getItem("c3-name");
  document.getElementById("c4-nme").innerHTML = localStorage.getItem("c4-name");

  document.getElementById("c1-votes").innerHTML =
    localStorage.getItem("c1_votes");
  document.getElementById("c2-votes").innerHTML =
    localStorage.getItem("c2_votes");
  document.getElementById("c3-votes").innerHTML =
    localStorage.getItem("c3_votes");
  document.getElementById("c4-votes").innerHTML =
    localStorage.getItem("c4_votes");
}
