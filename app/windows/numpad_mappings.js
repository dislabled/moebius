const libtextmode = require("../libtextmode/libtextmode");
const dev = require("electron-is-dev");
const ans_path = dev ? "./build/ans/" : `${process.resourcesPath}/ans/`;
const electron = require("electron");

document.addEventListener("keydown", (event) => electron.remote.getCurrentWindow().close(), true);

document.addEventListener("DOMContentLoaded", () => {
    libtextmode.animate({file: `${ans_path}numpad_mappings.ans`, ctx: document.getElementById("numpad_mappings_terminal").getContext("2d")});
});
