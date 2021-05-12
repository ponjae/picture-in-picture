const videoElem = document.getElementById('video');
const button = document.getElementById('button')

// Prompt to select media stream, pass to video elem then play
async function selectMediaStream() {
    try {
        const mediaStrean = await navigator.mediaDevices.getDisplayMedia();
        videoElem.srcObject = mediaStrean;
        videoElem.onloadedmetadata = () => {
            videoElem.play();
        }
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElem.requestPictureInPicture();
    button.disabled = false;
});


// On load
selectMediaStream()