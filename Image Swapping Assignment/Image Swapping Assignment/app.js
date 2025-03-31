var large = document.getElementById('largeImg');

function clickedImg(largeImgObj) {
    large.src = largeImgObj.src;
    console.log(large.src);
}