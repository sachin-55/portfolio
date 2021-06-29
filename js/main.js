(function(){

let navBar = document.getElementById('nav-list');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');
let navItems = document.querySelectorAll('.nav-link');

document.addEventListener('scroll',function(){
  let scrollPositionY = window.scrollY;
  let aboutY = about.offsetTop;
  let projectsY = projects.offsetTop;
  let contactY = contact.offsetTop;
console.log({scrollPositionY});
console.log({aboutY, projectsY, contactY});
  if(scrollPositionY > 450){
    navBar.classList.add('floatingNav');
    if(scrollPositionY >= aboutY){
      navBar.classList.add('aboutBg');
      navBar.classList.remove('projectsBg');
      navBar.classList.remove('contactsBg');
      navItems[0].focus();
    }
    if(scrollPositionY >= projectsY ){
      navBar.classList.remove('aboutBg');
      navBar.classList.add('projectsBg');
      navBar.classList.remove('contactsBg');
      navItems[1].focus();

    }
    if(scrollPositionY >= contactY ){
      navBar.classList.remove('aboutBg');
      navBar.classList.remove('projectsBg');
      navBar.classList.add('contactsBg');
      navItems[2].focus();

    }
  }
  else{
    navBar.classList.remove('floatingNav');
    navBar.classList.remove('aboutBg');
    navBar.classList.remove('projectsBg');
    navBar.classList.remove('contactsBg');
    navItems[0].blur();


  }
})
})();