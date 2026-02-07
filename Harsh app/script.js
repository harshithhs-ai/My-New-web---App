document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const percentText = document.getElementById('percentText');
    
    let progress = 0;
    
    const fillBar = setInterval(() => {
        // Random speed for realistic loading
        progress += Math.floor(Math.random() * 3) + 1;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(fillBar);
            percentText.innerText = "COMPLETE";
            percentText.style.color = "#fff";
        } else {
            percentText.innerText = progress + "%";
        }
        
        progressBar.style.width = progress + "%";
    }, 60); // Speed control
});