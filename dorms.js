function search() {
    let filter = document.getElementById('search').value.toUpperCase(); //User Input
    let items = document.querySelectorAll('.residence'); //All of the Universities

    for (let i = 0; i < items.length; i++) {
        let h3 = items[i].getElementsByTagName('h3')[0];
        let value = h3.innerHTML || h3.innerText || h3.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {  
            items[i].style.display = ""; // Show the item
        } else {
            items[i].style.display = "none"; // Hide the item
        }
    }
}
