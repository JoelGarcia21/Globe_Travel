const buttons = document.querySelectorAll(".btn-pack");

buttons.forEach(btn => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip-box");
    tooltip.innerText = btn.dataset.tooltip;

    btn.appendChild(tooltip);

    btn.addEventListener("mouseenter", () => {
        tooltip.classList.add("active");
    });

    btn.addEventListener("mouseleave", () => {
        tooltip.classList.remove("active");
    });
});