function goToBlog() {
    window.location.href = '../actions/blog.html'
}

function goToIndex() {
    window.location.href = '../index.html'
}

function showSectionById(id) {
    document.getElementById('donate-action').classList.add('hidden');
    document.getElementById('history-action').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');   
}

function changeButton(activeButton, inactiveButton) {
    // Set the active button to green
    document.getElementById(activeButton).classList.remove('bg-transparent', 'border', 'border-black');
    document.getElementById(activeButton).classList.add('bg-btnPrimary', 'border-none');
  
    // Set the inactive button to white
    document.getElementById(inactiveButton).classList.remove('bg-btnPrimary', 'border-none');
    document.getElementById(inactiveButton).classList.add('bg-transparent', 'border', 'border-black');
}
