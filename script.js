const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentLocation = 1;
const numOfPages = pages.length;
const maxLocation = numOfPages + 1;

function openBook() {
    // Optional scaling effect if needed
}

function closeBook(isAtStart) {
    if (isAtStart) {
        // Reset states if needed
    }
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }
        pages[currentLocation - 1].classList.add('flipped');
        pages[currentLocation - 1].style.zIndex = currentLocation;
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;
        pages[currentLocation - 1].classList.remove('flipped');
        pages[currentLocation - 1].style.zIndex = numOfPages - currentLocation;
        
        if (currentLocation === 1) {
            closeBook(true);
        }
    }
}

// Initialize stacking order
pages.forEach((page, index) => {
    page.style.zIndex = numOfPages - index;
});

nextBtn.addEventListener('click', goNextPage);
prevBtn.addEventListener('click', goPrevPage);
