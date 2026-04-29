var actionButton = document.getElementById('actionBtn');
var statusParagraph = document.getElementById('status');
var clickCount = 0;
function formatStatus(name, count) {
    return "Olá " + name + "! Você clicou " + count + " vez" + (count === 1 ? '' : 'es') + ".";
}
if (actionButton && statusParagraph) {
    actionButton.addEventListener('click', function () {
        clickCount += 1;
        statusParagraph.textContent = formatStatus('Visitante', clickCount);
    });
}
