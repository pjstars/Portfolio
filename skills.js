const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remove active from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // add active to clicked tab
        tab.classList.add('active');
    });
});
