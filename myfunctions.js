
    function addItemFruit() {

        if (totalItems() >= 6) {
          window.alert("Can only have 6 total items");
  
        } else {
          var count = parseInt(document.getElementById("item-counter-fruit").innerHTML, 10);
          count++;
          document.getElementById("item-counter-fruit").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
        }
  
      }
  
      function subItemFruit() {
        if (parseInt(document.getElementById("item-counter-fruit").innerHTML, 10) <= 0) {
          document.getElementById("item-counter-fruit").innerHTML = "0";
  
        } else {
          var count = parseInt(document.getElementById("item-counter-fruit").innerHTML, 10);
          count--;
          document.getElementById("item-counter-fruit").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
        }
      }
  
      function addItemGreens() {
        if (totalItems() >= 6) {
          window.alert("Can only have 6 total items");
  
        } else {
          var count = parseInt(document.getElementById("item-counter-greens").innerHTML, 10);
          count++;
          document.getElementById("item-counter-greens").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
  
        }
  
      }
  
      function subItemGreens() {
        if (parseInt(document.getElementById("item-counter-greens").innerHTML, 10) <= 0) {
          document.getElementById("item-counter-greens").innerHTML = "0";
  
  
        } else {
          var count = parseInt(document.getElementById("item-counter-greens").innerHTML, 10);
          count--;
          document.getElementById("item-counter-greens").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
        }
      }
  
      function addItemRoots() {
        if (totalItems() >= 6) {
          window.alert("Can only have 6 total items");
  
        } else {
          var count = parseInt(document.getElementById("item-counter-roots").innerHTML, 10);
          count++;
          document.getElementById("item-counter-roots").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
  
        }
      }
  
      function subItemRoots() {
        if (parseInt(document.getElementById("item-counter-roots").innerHTML, 10) <= 0) {
          document.getElementById("item-counter-roots").innerHTML = "0";
  
        } else {
          var count = parseInt(document.getElementById("item-counter-roots").innerHTML, 10);
          count--;
          document.getElementById("item-counter-roots").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
        }
      }
  
      function addItemSprouts() {
        if (totalItems() >= 6) {
          window.alert("Can only have 6 total items");
          return false;
  
        } else {
          var count = parseInt(document.getElementById("item-counter-sprouts").innerHTML, 10);
          count++;
          document.getElementById("item-counter-sprouts").innerHTML = count.toString();
          updateProgressBar(totalItems());
          return false;
  
        }
  
      }
  
      function subItemSprouts() {
        if (parseInt(document.getElementById("item-counter-sprouts").innerHTML, 10) <= 0) {
          document.getElementById("item-counter-sprouts").innerHTML = "0";
  
        } else {
          var count = parseInt(document.getElementById("item-counter-sprouts").innerHTML, 10);
          count--;
          document.getElementById("item-counter-sprouts").innerHTML = count.toString();
          updateProgressBar(totalItems());
  
        }
      }
  
      function totalItems() {
        var itemTotal = 0;
        itemTotal = parseInt(document.getElementById("item-counter-fruit").innerHTML, 10);
  
        itemTotal += parseInt(document.getElementById("item-counter-greens").innerHTML, 10);
  
        itemTotal += parseInt(document.getElementById("item-counter-roots").innerHTML, 10);
  
        itemTotal += parseInt(document.getElementById("item-counter-sprouts").innerHTML, 10);
        return itemTotal;
      }
  
      function updateProgressBar(count) {
        if (count === 0) {
          document.getElementById("prog-bar").setAttribute("aria-valuenow", "0%");
          document.getElementById("prog-bar").style.width = "0%";
          document.getElementById("prog-bar").innerHTML = "";
  
        } else {
          var percent = Math.round(count / 6 * 100);
          percent = percent.toString();
          percent = percent + "%";
          document.getElementById("prog-bar").setAttribute("aria-valuenow", percent);
          document.getElementById("prog-bar").style.width = percent;
          document.getElementById("prog-bar").innerHTML = `(${count}/6)`;
          return false;
        }
  
  
      }