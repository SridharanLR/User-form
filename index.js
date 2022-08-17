var lft = document.getElementById("lft");
var rit = document.getElementById("rit");

var active = 0;
var privious = 0;

function submit() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  var lftChild = document.createElement("div");
  lftChild.className = "lftChild";
  lftChild.id = "lftChild_" + active;
  lftChild.innerHTML =
    "<strong>Traveller name :</strong>" +
    " " +
    name +
    "<br>" +
    "<strong>Traveller age :</strong>" +
    " " +
    age +
    "<br>" +
    "<strong>From :</strong>" +
    " " +
    from +
    "<br>" +
    "<strong>To :</strong>" +
    " " +
    to;
  lft.append(lftChild);

  var ritChild = document.createElement("div");
  ritChild.className = "ritChild";
  ritChild.id = "ritChild_" + active;
  ritChild.innerHTML =
    "<button onclick='dlt(" +
    "ritChild_" +
    active +
    "," +
    "lftChild_" +
    active +
    ")'>Delete</button>";
  rit.append(ritChild);

  privious = active;

  active++;
  var total = document.getElementById("total");
  total.innerHTML = "Usesrs count :" + " " + active;
}

function dlt(rightId, leftId) {
  var count = document.getElementById("total");
  count.innerHTML = "Usesrs count :" + " " + privious--;
  console.log(count);
  rightId.remove();
  leftId.remove();
}
