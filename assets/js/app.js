let allNamesInDom = document.getElementsByClassName("name");

document.getElementById("searchInput").addEventListener("keyup", function (e) {
  let searchQuery = e.target.value.toLowerCase();

  for (let i = 0; i < allNamesInDom.length; i++) {
    const currentName = allNamesInDom[i].textContent.toLowerCase();
    if (!currentName.includes(searchQuery)) {
      allNamesInDom[i].style.display = "none";
    } else {
      allNamesInDom[i].style.display = "block";
    }
  }
});
