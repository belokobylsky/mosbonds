function separateElem(elem, spanClass, lineTag = "") {
    let idx = 0,
        maxIdx = 0;
    elem.innerHTML = [...elem.innerText].map(function(letter) {
        if (letter === " ") {
            if (idx > maxIdx) {
                maxIdx = idx;
            }
            idx = 0;
            if (lineTag) {
                return `</${lineTag}><${lineTag}>`;
            }
        }
        idx++;
        if (idx > maxIdx) {
            maxIdx = idx;
        }
        return `<span class="${spanClass}"><span data-index="${idx}">${letter}</span></span>`;
    }).join("");
    if (lineTag) {
        elem.innerHTML = `<${lineTag}>${elem.innerHTML}</${lineTag}>`;
    }
    return maxIdx;
}