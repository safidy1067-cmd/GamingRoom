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
            const req = card.getAttribute('data-req');
            const desc = card.getAttribute('data-desc');
            const bgImage = card.getAttribute('data-bg');

            modalTitle.textContent = title;
            modalGenre.textContent = genre;
            modalPlayers.textContent = `🎮 ${players}`;
            modalReq.textContent = req;
            modalDesc.textContent = desc;
            modalBg.style.backgroundImage = `url('${bgImage}')`;

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

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#ff0000";
            link.style.borderBottom = "2px solid #ff0000";
            link.style.paddingBottom = "5px";
        }})

function addToCart(productName) {
    console.log(`Ajouté : ${productName}`);
    
    alert(`${productName} a été commander !`);
}

let cartCount = 0;
const cartIndicator = document.getElementById('cart-count');


document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        if(cartIndicator) cartIndicator.innerText = cartCount;
    });
});

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

    
});