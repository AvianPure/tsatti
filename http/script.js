chattername = "Chatter";
chatName = document.getElementById("chatname");
settingsButton = document.getElementById("settingsbutton");
inputsDiv = document.getElementById("inputsdiv");
settingsDiv = document.getElementById("settings");
saveSettingsButton = document.getElementById("savesettings");

settingsbutton.addEventListener("click", function() {
    chatName.value = chattername;
    inputsdiv.style.display = "none";
    settingsDiv.style.display = "block";
});

saveSettingsButton.addEventListener("click", function() {
    inputsdiv.style.display = "block";
    settingsDiv.style.display = "none";
    chattername = chatName.value;
});