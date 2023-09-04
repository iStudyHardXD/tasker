document.addEventListener('DOMContentLoaded', function() {
    var openTaskButton = document.getElementById('open_task');
    var modal = document.getElementById('modal');
    var closeButton = document.getElementsByClassName('close')[0];

    openTaskButton.onclick = function() {
        modal.style.display = 'block';
    };

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});