//script.js

//custom function
function calculateTip() {

      // store the data of inputs
      var billAmount = document.getElementById("billAmount").value;
      var serviceQuality = document.getElementById("serviceQuality").value;
      var numPeople = document.getElementById("totalPeople").value;

      //quick validation
      if(billAmount === "" || serviceQuality == 0) { //=== EXACTLY equal to (with type)
        return window.alert("Please enter some values to get this baby up and runnig!");
      }

      //check to see if this input is empty or less than or equal to 1
      if(numPeople === "" || numPeople <=) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";

      } else {

        document.getElementById("each").style.display = "block";
      }

      var total = (billAmount * serviceQuality) / numPeople;
      total = Math.round(total*100) / 100;
      total = total.toFixed(2);

      //display the Tip
      document.getElementById("totalTip").style.display = "block";
      document.getElementById("tip").innerHTML = total;
}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };
