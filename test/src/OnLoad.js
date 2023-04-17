export default

window.onload = function() {
    (function() {
      var elems = document.querySelectorAll("div[data-index]"), len = elems.length, div;
  
      for (var i = 0; i < len; i++) {
        div = elems[i];
        div.onclick = clickAction;
      }
  
      function clickAction(e) {
        var index = e.target.dataset.index, target = document.querySelector("div[data-index=\"" + index + "\"].over-menu");
        resetSelectedElements();
        target.classList.add("selected");
      }
  
      function resetSelectedElements() {
        var targetElements = document.getElementsByClassName("over-menu"), len = targetElements.length, targetElement;
  
        for (var i = 0; i < len; i++) {
          targetElement = targetElements[i];
          targetElement.classList.remove("selected");
        }
      }
    }());
  };
