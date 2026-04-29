const actionButton = document.getElementById('actionBtn') as HTMLButtonElement | null;
const statusParagraph = document.getElementById('status');
let clickCount = 0;

function formatStatus(name: string, count: number): string {
  return `Olá ${name}! Você clicou ${count} vez${count === 1 ? '' : 'es'}.`;
}

if (actionButton && statusParagraph) {
  actionButton.addEventListener('click', () => {
    clickCount += 1;
    statusParagraph.textContent = formatStatus('Visitante', clickCount);
  });
}
