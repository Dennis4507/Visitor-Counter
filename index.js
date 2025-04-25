var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('counterVisitor').innerHTML = n;
document.getElementById('counterVisitor').style.color = "red";
document.getElementById('counterVisitor').style.fontSize = "60px";


function incrementAndShowValue() {
    var value = getCookie("visitcounter") || 0; // Retrieve the cookie value
    var counter = Number(value); // Convert to a number
    var newValue = ("00000" + (counter + 1)).slice(-6);
    var container = document.getElementById("counterVisitor");
    if (!container) {
        console.error("Element with ID 'counterVisitor' not found.");
        return;
    }
    String(newValue).split("").forEach(function(item, index) {
        container.children[index].innerHTML = item;
    });
    counter++; // Increment the counter
    setCookie("visitcounter", counter, 7); // Save the updated counter in a cookie (valid for 7 days)
}

// Call the function to increment and show the value
incrementAndShowValue();