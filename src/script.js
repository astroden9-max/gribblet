document.addEventListener('DOMContentLoaded', function() {
    const assets = {
        images: [
            'assets/images/image1.jpg',
            'assets/images/image2.jpg',
            'assets/images/image3.jpg'
        ],
        videos: [
            'assets/videos/video1.mp4',
            'assets/videos/video2.mp4'
        ],
        gifs: [
            'assets/gifs/animation1.gif',
            'assets/gifs/animation2.gif'
        ]
    };

    let currentIndex = 0;
    const bannerElement = document.getElementById('banner');

    function showNextAsset() {
        if (currentIndex >= assets.images.length) {
            currentIndex = 0;
        }
        bannerElement.style.backgroundImage = `url(${assets.images[currentIndex]})`;
        currentIndex++;
    }

    setInterval(showNextAsset, 5000); // Change image every 5 seconds
    showNextAsset(); // Show the first image immediately
});