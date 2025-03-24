
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height ) {
         navlinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });  
      };
   });
};

let navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        let targetId = link.getAttribute('href').substring(1); 
        let targetSection = document.getElementById(targetId);

        
        window.scrollTo({
            top: targetSection.offsetTop - 120, 
            behavior: 'smooth' 
        });
    });
});
