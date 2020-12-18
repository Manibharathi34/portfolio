(function () {
    console.log('starting even handlers');

    function loadMain(filePath) {
        fetch(filePath)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.getElementById('main').innerHTML = data;
        });
    }

    loadMain('./html/intro.html');
    
    document.getElementById('skills-menu').addEventListener('click', (e) => {
        (e || window.event).preventDefault();
        loadMain('./html/skills.html');
    });

    document.getElementById('main-menu').addEventListener('click', (e) => {
        (e || window.event).preventDefault();
        loadMain('./html/intro.html');
    });
    

})();