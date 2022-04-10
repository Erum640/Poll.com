$(".save-btn").click(function () {
  console.log(document.getElementById("p1-input").value);
  console.log("details updated");
  console.log($.trim($("#p1-input").val()));
  if (
    $.trim($("#p1-input").val()) == "" ||
    $.trim($("#cn1-inp").val()) == "" ||
    $.trim($("#cn2-inp").val()) == "" ||
    $.trim($("#cn3-inp").val()) == "" ||
    $.trim($("#cn4-inp").val()) == ""
  ) {
    alert("Input can not be left blank");
  } else {
    poll_name = document.getElementById("p1-input").value;
    cand_1 = document.getElementById("cn1-inp").value;
    cand_2 = document.getElementById("cn2-inp").value;
    cand_3 = document.getElementById("cn3-inp").value;
    cand_4 = document.getElementById("cn4-inp").value;

    localStorage.removeItem("poll-name", poll_name);
    localStorage.removeItem("c1-name", cand_1);
    localStorage.removeItem("c2-name", cand_2);
    localStorage.removeItem("c3-name", cand_3);
    localStorage.setItem("c4-name", cand_4);

    localStorage.setItem("poll-name", poll_name);
    localStorage.setItem("c1-name", cand_1);
    localStorage.setItem("c2-name", cand_2);
    localStorage.setItem("c3-name", cand_3);
    localStorage.setItem("c4-name", cand_4);

    localStorage.removeItem("c1_votes", cand_1);
    localStorage.removeItem("c2_votes", cand_2);
    localStorage.removeItem("c3_votes", cand_3);
    localStorage.setItem("c4_votes", cand_4);

    localStorage.setItem("c1_votes", 0);
    localStorage.setItem("c2_votes", 0);
    localStorage.setItem("c3_votes", 0);
    localStorage.setItem("c4_votes", 0);

    window.location.href = "spoll.html";
  }
});
