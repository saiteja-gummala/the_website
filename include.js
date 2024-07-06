
// for fotter load
// Function to include header
function includeHeader() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status === 200) {
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
}

// Function to include footer
function includeFooter() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if (this.status === 200) {
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
}

// Call includeHeader and includeFooter functions when the page loads
window.onload = function() {
     includeHeader();
     includeFooter();
};
