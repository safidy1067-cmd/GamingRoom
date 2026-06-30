document.addEventListener('DOMContentLoaded', function() {
    
    const toggleMenu = document.querySelector('.responsive-menu');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    
    if (toggleMenu && menu) {
        toggleMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            menu.classList.toggle('responsive');
        });
        
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                toggleMenu.classList.remove('active');
                menu.classList.remove('responsive');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!toggleMenu.contains(e.target) && !menu.contains(e.target)) {
                toggleMenu.classList.remove('active');
                menu.classList.remove('responsive');
            }
        });
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 820) {
                toggleMenu.classList.remove('active');
                menu.classList.remove('responsive');
            }
        });
    }
    
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        if (type === 'success') {
            notification.style.backgroundColor = '#4CAF50';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#f44336';
        } else {
            notification.style.backgroundColor = '#2196F3';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            notification.style.transform = 'translateX(100%)';
            notification.style.opacity = '0';
            
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

        const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks1 = document.querySelectorAll("nav ul li a");
    
    navLinks1.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ff0000";
            link.style.borderBottom = "2px solid #ff0000";
            link.style.paddingBottom = "5px";
        }})

        window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.menu a');
    
    function updateActiveLink() {
        let current = '';
        const scrollY = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                current = section.getAttribute('id');
            }
        })
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').replace('#', '');
            if (linkHref === current) {
                link.classList.add('active');
            }
        })
    
    
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                if (menu.classList.contains('responsive')) {
                    toggleMenu.classList.remove('active');
                    menu.classList.remove('responsive');
                }
                
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    function addToCart(productName) {
        console.log(`Ajouté : ${productName}`);
        
        alert(`${productName} a été commender !`);
    }

    let cartCount = 0;
    const cartIndicator = document.getElementById('cart-count');


    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            if(cartIndicator) cartIndicator.innerText = cartCount;
        });
    });

    
    document.head.appendChild(style);

    document.addEventListener('DOMContentLoaded', () => {
        const gameCards = document.querySelectorAll('.game-card');
        const modal = document.getElementById('gameModal');
        const closeBtn = document.querySelector('.close-btn');

        const modalTitle = document.getElementById('modal-title');
        const modalGenre = document.getElementById('modal-genre');
        const modalPlayers = document.getElementById('modal-players');
        const modalReq = document.getElementById('modal-req');
        const modalDesc = document.getElementById('modal-desc');
        const modalBg = document.getElementById('modal-bg');

gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const genre = card.getAttribute('data-genre');
        const players = card.getAttribute('data-players');

        modalTitle.textContent = title;
        modalGenre.textContent = genre;
        modalPlayers.textContent = `🎮 ${players}`;

        modal.classList.add('active');
    });
});
        const closeModal = () => {
            modal.classList.remove('active');
        };
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
             closeModal();
         }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    });

        const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes slideMenuIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideMenuOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .menu a.active {
            color: aqua !important;
            font-weight: bold;
        }

        @media (max-width: 820px) {
            header .menu.responsive {
                display: flex;
                position: fixed;
                top: 60px;
                right: 0;
                left: auto;
                width: 280px;
                flex-direction: column;
                background-color: #222;
                padding: 20px;
                border-left: 2px solid aqua;
                border-bottom: 2px solid aqua;
                border-radius: 0 0 0 15px;
                box-shadow: -5px 5px 15px rgba(255, 0, 0, 0.3);
                animation: slideMenuIn 0.4s ease forwards;
                z-index: 1000;
            }
            
            header .menu {
                display: none;
            }
            
            header .menu.responsive li {
                margin: 15px 0;
                width: 100%;
                text-align: left;
                padding-left: 15px;
                border-left: 3px solid transparent;
                transition: all 0.3s ease;
            }
            
            header .menu.responsive li:hover {
                border-left-color: red;
                background: linear-gradient(90deg, rgba(255, 0, 0, 0.1), transparent);
            }
            
            header .menu.responsive li a {
                display: block;
                padding: 12px 15px;
                font-size: 1.8rem;
                color: #fff;
                transition: all 0.3s ease;
            }
            
            header .menu.responsive li a:hover {
                color: aqua;
                transform: translateX(5px);
            }
            
            header .menu.responsive li a.active {
                color: aqua !important;
                font-weight: bold;
                border-left-color: red;
            }
        }
        
        @media (max-width: 480px) {
            header .menu.responsive {
                width: 100%;
                top: 55px;
                border-radius: 0;
                border-left: none;
                animation: slideDown 0.4s ease forwards;
            }
            
            header .menu.responsive li {
                text-align: center;
                padding-left: 0;
                border-left: none;
            }
            
            header .menu.responsive li:hover {
                border-left-color: transparent;
            }
            
            header .menu.responsive li a {
                text-align: center;
            }
        }
    `;

    
}});