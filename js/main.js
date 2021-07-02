(function(){

let navBar = document.getElementById('nav-list');
let about = document.getElementById('about');
let projects = document.getElementById('projects');
let contact = document.getElementById('contact');
let navItems = document.querySelectorAll('.nav-link');

let aboutY = about.offsetTop;
let projectsY = projects.offsetTop;
let contactY = contact.offsetTop;

let nameEle;
document.addEventListener('scroll',function(){
  let scrollPositionY = window.scrollY;
  if(scrollPositionY > 450){
    navBar.classList.add('floatingNav');
    if(!document.getElementById('navScrollName')){
      nameEle = document.createElement('div');
      nameEle.classList.add('navName');
      nameEle.setAttribute("id", "navScrollName");
      nameEle.innerText='Sachin Bhattarai';
      nameEle.onclick= function(){
        window.scrollTo(0,0);
      }
      navBar.appendChild(nameEle);
    }

    if(scrollPositionY >= aboutY){
      navBar.classList.add('aboutBg');
      navBar.classList.remove('projectsBg');
      navBar.classList.remove('contactsBg');
      navItems[0].classList.add('scroll-tab');
      navItems[1].classList.remove('scroll-tab');
      navItems[2].classList.remove('scroll-tab');

    }
    if(scrollPositionY >= projectsY ){
      navBar.classList.remove('aboutBg');
      navBar.classList.add('projectsBg');
      navBar.classList.remove('contactsBg');
      navItems[1].classList.add('scroll-tab');
      navItems[0].classList.remove('scroll-tab');
      navItems[2].classList.remove('scroll-tab');


    }
    if(scrollPositionY >= contactY-100 ){
      navBar.classList.remove('aboutBg');
      navBar.classList.remove('projectsBg');
      navBar.classList.add('contactsBg');
      navItems[2].classList.add('scroll-tab');
      navItems[1].classList.remove('scroll-tab');
      navItems[0].classList.remove('scroll-tab');

    }
  }
  else{
    navBar.classList.remove('floatingNav');
    navBar.classList.remove('aboutBg');
    navBar.classList.remove('projectsBg');
    navBar.classList.remove('contactsBg');
    navItems[1].classList.remove('scroll-tab');
    navItems[0].classList.remove('scroll-tab'); 
    navItems[2].classList.remove('scroll-tab');
    navBar.removeChild(nameEle);

  }
})
})();