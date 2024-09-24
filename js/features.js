// show donate
document.getElementById('btn-show-donate').addEventListener('click', function() {
    showSectionById('donate-action');
    changeButton('btn-show-donate', 'btn-show-history');

}); 

// show history
document.getElementById('btn-show-history').addEventListener('click', function() {
    showSectionById('history-action');
    changeButton('btn-show-history', 'btn-show-donate');
});