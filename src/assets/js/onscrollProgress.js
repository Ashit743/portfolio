function working(){
    window.onload = function(){
    var element = document.getElementById('box');
    var w1 = document.getElementById('w1');
    var w2 = document.getElementById('w2');
    var w3 = document.getElementById('w3');
    var elementHeight = element.clientHeight;
    var elementHeight1 = w1.clientHeight;
    var elementHeight2 = w2.clientHeight;
    var elementHeight3 = w3.clientHeight;

    document.addEventListener('scroll', animate);

    function inViewWork(elementH,elem) {
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;
        var scrollPosition = scrollY + windowHeight;
        var elementPosition = elem.getBoundingClientRect().top + scrollY + elementH;
        if (scrollPosition > elementPosition) {
          // console.log(scrollPosition,elementPosition)
          return true;
        }
        return false;

    }



    function inView() {
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
      if (scrollPosition > elementPosition) {
        return true;
      }
        return false;
      }
      function animate() {
        if (inView()) {
        element.classList.add('progress-value');

        if(inViewWork(elementHeight1,w1)){
            w1.className = 'cbp_tmlabel fadeInRight animated'   
        }
        if(inViewWork(elementHeight2,w2)){
            w2.className = 'cbp_tmlabel fadeInRight animated'
        }
        if(inViewWork(elementHeight3,w3)){
            w3.className = 'cbp_tmlabel fadeInRight animated'
        }

        }
        
      }  
      




}



}

