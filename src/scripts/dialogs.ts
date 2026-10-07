/**
 * Wires native <dialog> elements:
 *   [data-open-dialog="id"]  opens the dialog with that id as a modal
 *   [data-close-dialog]      closes the dialog it sits in
 * Clicking the backdrop closes; Escape and focus return are handled by the browser.
 */
let wired = false;

export function wireDialogs() {
  if (wired) return;
  wired = true;

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const opener = target.closest<HTMLElement>('[data-open-dialog]');
    if (opener) {
      const dialog = document.getElementById(opener.dataset.openDialog ?? '');
      if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal();
      return;
    }

    if (target.closest('[data-close-dialog]')) {
      target.closest('dialog')?.close();
      return;
    }

    // A click that lands on the <dialog> itself (not its content) is a backdrop click.
    if (target instanceof HTMLDialogElement) target.close();
  });
}
