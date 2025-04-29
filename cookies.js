// Function to set a cookie
function setCookie(name, value, days) {
    console.log(`Setting cookie: ${name}=${value}`);
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    console.log("Cookie set successfully");
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    console.log("Cookie not found");
    return null;
}

// Test the cookie functions
setCookie("counterVisitor"); // Set a cookie with a 7-day expiration
console.log("Counter Visitor Cookie: " + getCookie("counterVisitor")); // Get the cookie value
// Set a cookie with a 7-day expiration
