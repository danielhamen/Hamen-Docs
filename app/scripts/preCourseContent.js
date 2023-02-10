/*

    THIS FILE IS RUN BEFORE ANY OTHER JS FILE. IT SHOULD BE USED TO ADD STUFF TO THE <HEAD>

*/

window.addEventListener("load", function() {
    document.querySelector("main").innerHTML = `<div class="documentation"><div class="go-to-top"><span class="material-symbols-outlined"> expand_less </span></div><div class="docs-tree"><div class="docs-tree-content"><tree-title></tree-title><tree-body></tree-body></div></div><div class="docs-content"></div></div>`;
})
