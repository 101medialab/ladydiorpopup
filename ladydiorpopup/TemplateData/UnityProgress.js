function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module)
        return;
    if (!gameInstance.logo) {
        gameInstance.logo = document.createElement("div");
        gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
        gameInstance.container.appendChild(gameInstance.logo);
    }

    if (progress == "complete") {
        gameInstance.logo.style.display = "none";
        $('#overlay').hide();
        $('#ProgressLine').hide();
        $('#loadingInfo').hide();
        $('#progressC').hide();
        $('#loadingBox').hide();
        document.getElementById("ProgressLineB").style.display = "none";
        return;
    } else if (progress == 1) {
        document.getElementById("ProgressLine").style.width = (200 * (progress)) + "px";
        document.getElementById("loadingInfo").innerHTML = "loading";
        document.getElementById("progressC").innerHTML = Math.floor((100 * progress)) + "%";
    } else {
        document.getElementById("loadingInfo").innerHTML = "downloading";
        document.getElementById("progressC").innerHTML = Math.floor((100 * progress)) + "%";
        document.getElementById("ProgressLine").style.width = (200 * (progress)) + "px";
    }

}