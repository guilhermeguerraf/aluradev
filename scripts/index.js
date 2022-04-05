const language = document.querySelector(".language");
const wrapperCode = document.querySelector(".wrapper-code");
const highlightButton = document.querySelector(".highlight-button");

function applyHighlight() {
    const code = wrapperCode.innerText;

    wrapperCode.innerHTML = `<code class="code-area hljs ${language.value}" contenteditable="true" area-label="Editor de código">Comece a digitar aqui...</code>`;
    wrapperCode.querySelector("code").textContent = code;
    hljs.highlightElement(wrapperCode.querySelector("code"));
}

highlightButton.addEventListener('click', () => {
    applyHighlight();
});


var colorInput = document.querySelector(".color-input");

function applyBgColor() {
    var bg = document.getElementById("bg");

    bg.style.backgroundColor = colorInput.value;
}

colorInput.addEventListener('focusout', () => {
    applyBgColor();
});