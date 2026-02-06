document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    if(searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchInput = this.parentElement.querySelector('input[type="search"]');
            if(searchInput.value.trim()) {
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
                setTimeout(() => {
                    this.innerHTML = 'Search';
                    alert('Searching for: ' + searchInput.value);
                }, 800);
            }
        });
    }

    const applyFilter = document.getElementById('applyFilter');
    if(applyFilter) {
        applyFilter.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
                const genre = document.getElementById('genreFilter').value;
                const platform = document.getElementById('platformFilter').value;
                const rating = document.getElementById('ratingFilter').value;
                alert(`Filters applied:\nGenre: ${genre}\nPlatform: ${platform}\nRating: ${rating}`);
            }, 500);
        });
    }

    const readMoreBtns = document.querySelectorAll('.read-more');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            setTimeout(() => {
                this.innerHTML = 'Read Full Review';
                alert(`Loading full review for ${game.toUpperCase()}...`);
            }, 1000);
        });
    });

    const viewImageBtns = document.querySelectorAll('.view-image');
    viewImageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.card');
            card.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                card.style.animation = '';
                const imgSrc = card.querySelector('img').src;
                alert(`Viewing image: ${imgSrc}`);
            }, 500);
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            this.innerHTML = document.body.classList.contains('dark-theme') 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
            
            this.style.animation = 'rotate 0.5s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    }

    const reviewForm = document.getElementById('reviewForm');
    if(reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
            submitBtn.classList.add('btn-success');
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Submit Review';
                submitBtn.classList.remove('btn-success');
                this.reset();
            }, 1500);
        });
    }

    const uploadForm = document.getElementById('uploadForm');
    if(uploadForm) {
        uploadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Uploaded!';
                submitBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.classList.remove('btn-success');
                    this.reset();
                }, 1500);
            }, 1500);
        });
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.95)';
        });
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if(img) img.style.transform = 'scale(1.1) rotate(1deg)';
        });
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if(img) img.style.transform = 'scale(1) rotate(0)';
        });
    });

    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollIndicator.style.display = 'none';
    document.body.appendChild(scrollIndicator);

    scrollIndicator.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollIndicator.style.display = 'flex';
            setTimeout(() => scrollIndicator.classList.add('visible'), 10);
        } else {
            scrollIndicator.classList.remove('visible');
            setTimeout(() => {
                if(!scrollIndicator.classList.contains('visible')) {
                    scrollIndicator.style.display = 'none';
                }
            }, 300);
        }
    });

    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    const statsTable = document.querySelector('table');
    if(statsTable) {
        const rows = statsTable.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
            row.style.animationDelay = `${index * 0.1}s`;
            row.classList.add('animate__animated', 'animate__fadeInUp');
        });
    }

    const listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.classList.add('animate__animated', 'animate__fadeInRight');
    });
});