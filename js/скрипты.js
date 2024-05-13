
document.getElementById('кнопка').addEventListener ('click', loadTxt);

function loadTxt() {
    fetch('список/list.txt')
    .then (function(response)
    { 
        return response.text();
    })
}
