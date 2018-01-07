export function Present(panel) {
    const ev = new CustomEvent("present", { detail : { wrapper : panel } });
    document.dispatchEvent(ev);
}
