// import mermaid from "https://cdn.skypack.dev/mermaid@9.1.7";
// select <pre class="mermaid"> _and_ <pre><code class="language-mermaid">

function copySourceCodeToClipboard(code) {
  // alert(code)
  // navigator.clipboard.writeText(code);
}

document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach($el => {
  // if the second selector got a hit, reference the parent <pre>
  if ($el.tagName === "CODE")
    $el = $el.parentElement
  // put the Mermaid contents in the expected <div class="mermaid">
  // plus keep the original contents in a nice <details>
  $el.outerHTML = `
    <div class="mermaid-wrapper">
      <div class="mermaid">
        ${$el.textContent}
      </div>
    </div>`
    // <details>
    //   <summary>Diagram source</summary>
    //   <pre>${$el.textContent}</pre>
    // </details>
})



// initialize Mermaid to [1] log errors, [2] have loose security for first-party
// authored diagrams, and [3] respect a preferred dark color scheme
mermaid.initialize({
  logLevel: "error", // [1]
  securityLevel: "loose", // [2]
  theme: (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ?
    "dark" :
    "neutral", // [3]
  sequence: {
    // 'useMaxWidth': true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 35, // between actors
    // bottomMarginAdj: 100,
    useMaxWidth: false,
    mirrorActors: false,
    showSequenceNumbers: false,
    actorFontFamily: 'Roboto',
    noteFontFamily: 'Roboto',
    messageFontFamily: 'Roboto',
    width: 100, // of boxes
    height: 45, // of boxes
    // wrap: false,
    // wrapPadding: 10
    messageFontWeight: 100,
    actorFontWeight: 900,
  },
  

})
