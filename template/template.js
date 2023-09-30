  // onscroll get the current heading
  // and set the active class on it
  getCurrentAnchor = function (withOffset) {
    var headings = document.querySelectorAll('h1, h2');
    var current = '';
    headings.forEach(heading => {
      const headingTop = heading.offsetTop;
      const headingHight = heading.clientHeight;
      const windowHeight = window.innerHeight;
      var offset = withOffset ? windowHeight/5 : windowHeight/100;
      // if (heading.offsetTop - document.body.scrollTop < 0) {
      if (pageYOffset >= headingTop - offset) {
        current = heading.id;
      }
    });
    return current;
  }

  window.onscroll = function() {
    var current = getCurrentAnchor(true);
    var active = document.querySelector('.active-heading');
    if (active) {
      active.classList.remove('active-heading');
    }
    var link = document.querySelector('.side-toc')?.querySelector('[href="#' + current + '"]')?.parentNode;
    if (link) {
      // link.forEach(link => link.classList.add('active-heading'));
      link.classList.add('active-heading');
    }
  }

  document.addEventListener('keydown', function(event) {
    
    if(event.keyCode == 37 || event.keyCode == 39) {
      var current = getCurrentAnchor(false);
      var idList = [];
      document.querySelectorAll('h1, h2').forEach(h => idList.push(h.id));
      idList.shift();
      idList.shift();
      idList[0] = '';

      var index = idList.indexOf(current);

      // console.log(current);
      // console.log(idList);
      // console.log(index);

      if(event.code == "ArrowLeft") {
        index--;
        if (index >= 0 && index < idList.length) {
          window.location.hash = idList[index]
        }
      } else if (event.code == "ArrowRight") {
        index++;
        if (index >= 0 && index < idList.length) {
          window.location.hash = idList[index]
        }
      }
    } else if (event.code == "Escape") {
      var toggle = document.querySelector('#toc-toggle');
      toggle.checked = !toggle.checked;
    }

    
});


// syntax highlighting
// hljs.highlightAll();