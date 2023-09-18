let imgArr = [
    `http://thewowstyle.com/wp-content/uploads/2015/04/autumn-free-wallpaper-autumn-colors_2560x1600_93076.jpg`,
    `http://www.pixelstalk.net/wp-content/uploads/2016/06/High-Resolution-Images.jpg`,
    `http://www.hdwallpaper.nu/wp-content/uploads/2015/09/tropical_beach_blue_summer_sea_emerald_sand_hd-wallpaper-1701606.jpg`,
    `https://www.pixelstalk.net/wp-content/uploads/2016/09/Best-Beautiful-Images-For-Desktop-Nature.png`,
    `https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg`,
    `https://3.bp.blogspot.com/-AhBahdEd3Yg/VodhRsBc3RI/AAAAAAAAGtM/roFwvTANhmA/s1600/Red%2Bflowers%2Bgreen%2Blandscape%2Bdesktop%2Bwallpaper.jpg`,
    `https://wallpapercave.com/wp/wp2599594.jpg`,
    `https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Images-Wallpaper-HD-Background.jpg`,
    `http://thewowstyle.com/wp-content/uploads/2015/01/nature-images-6.jpg`,
    `http://wallsdesk.com/wp-content/uploads/2017/01/Autumn-Background.jpg`,
    `http://getwallpapers.com/wallpaper/full/3/f/0/869935-best-waterfall-desktop-backgrounds-2560x1600-for-iphone-5s.jpg`,
    `https://jooinn.com/images/lonely-tree-reflection-3.jpg`,
    `https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-15.jpg`,
    `http://s1.picswalls.com/wallpapers/2014/02/08/autumn-photo_063026334_28.jpg`
];

let imgIndex = 0;
let clearid;
let startstop = document.getElementById('startstop');
let last = document.getElementById('last');
let next = document.getElementById('next');

function show() {
    let imgbox = document.getElementById('imgbox');
    imgbox.innerHTML = `<img src=${imgArr[imgIndex]} alt="">`;

}
show();

startstop.addEventListener('click', movingImg)
last.addEventListener('click', lastImg)
next.addEventListener('click', nextImg)

function movingImg() {

    if (startstop.textContent == 'start') {

        startstop.textContent = 'stop';

        clearid = setInterval(() => {
            imgIndex = (imgIndex + 1) % imgArr.length;
            show();
        }, 2000);
    }
    else {
        startstop.textContent = 'start';
        clearInterval(clearid);

    }
}



function lastImg() {
    imgIndex = (imgIndex - 1 + imgArr.length) % imgArr.length;
    startstop.textContent = 'start';
    clearInterval(clearid);
    // console.log('last')
    show();

}
function nextImg() {
    imgIndex = (imgIndex + 1) % imgArr.length;
    startstop.textContent = 'start';
    clearInterval(clearid);
    show();

}



