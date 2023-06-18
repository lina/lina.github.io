const photos = [
    { src: 'diving-sharks-byron-bay.jpeg', caption: 'Diving with grey nurse sharks! Byron Bay Australia 2013' },
    { src: 'skydiving.jpeg', caption: 'Tandem skydiving from 19,000ft! Franz Josef New Zealand 2013' },
    { src: 'freediving-tulamben.jpeg', caption: 'Freediving course to learn breath hold! Tulamben Indonesia 2022' },
    { src: 'nevis-bungy.jpeg', caption: 'Nevis 134m Bungee Jumping! Queenstown New Zealand 2013' },
    { src: 'bolivia.jpeg', caption: 'Squeezing the rear brake tight! Death Road La Paz Bolivia 2014' },
    { src: 'torres-del-paine.jpeg', caption: 'Sunrise at Torres del Paine! Patagonia Chile 2013' },
    { src: 'volcan-villarrica.jpeg', caption: 'Peak of Volcano Villarrica at 2860m elevation! Chile 2013' },
    { src: 'balangan-surf.jpeg', caption: 'Surfing at Balangan Beach! Bali Indonesia 2022' },
    { src: 'react-compile.jpeg', caption: 'Waiting for React to compile! Brisbane Australia 2018' }
];

let currentIndex = 0;

function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    } else if (currentIndex >= photos.length) {
        currentIndex = 0;
    }
    document.getElementById('photo').src = photos[currentIndex].src;
    document.getElementById('caption').innerHTML = photos[currentIndex].caption;
}

// Mouse click event listener
document.addEventListener('keydown', function(event) {
    var eventName = event.key;
    var code = event.code;
    console.log("keydown name: "+ eventName)
    console.log("keydown code: " + code)
    // Left click
    if (eventName === "ArrowLeft") {
        navigate(-1);
    }
    // Right click
    else if (eventName === "ArrowRight") {
        navigate(1);
    }
});

// Initialize with the first photo
navigate(0);
// navigate(1);