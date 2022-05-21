const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeactive();
        if(panel.classList.contains('active')){
            panel.classList.remove('active');
        } else {
            panel.classList.add('active');
        }
    })
})

function removeactive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}