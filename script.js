document.addEventListener('DOMContentLoaded', function() {
    
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            
            mainNav.classList.toggle('active');

            
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});
