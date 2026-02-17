function validateSearch() {
    const value = document.getElementById("searchInput").value.trim();
    if (!value) {
        alert("Please enter something to search");
        return false;
    }
    return true;
}
