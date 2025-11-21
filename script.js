document.addEventListener('DOMContentLoaded', function() {
    // 1. टॉगल बटन और नेविगेशन मेनू को HTML से प्राप्त करें
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav'); 

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            // main-nav में 'active' क्लास को टॉगल करें
            mainNav.classList.toggle('active');

            // आइकॉन को Hamburger से 'X' में बदलें
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                // मेनू खुला है, 'X' दिखाएं (fa-times)
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                // मेनू बंद है, Hamburger दिखाएं (fa-bars)
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. मेनू खुलने के बाद लिंक पर क्लिक करने पर मेनू को बंद कर दें
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // केवल तभी बंद करें जब active क्लास मौजूद हो (यानी मोबाइल व्यू पर)
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // आइकॉन को Hamburger पर वापस बदलें
                navToggle.querySelector('i').classList.remove('fa-times');
                navToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});
