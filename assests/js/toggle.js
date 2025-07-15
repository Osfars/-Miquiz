function toggleMenu() {
   const sidebar = document.getElementById('sidebar');
   const content = document.getElementById('mainContent');

   sidebar.classList.toggle('active');
   content.classList.toggle('shifted');
}

/// Open the Modal
function openModal(){
    document.getElementById('infoModal').style.display = 'block';
}
// Close the Modal
function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Make the selected menu item active
function setActive(element) {
      const links = document.querySelectorAll('.sidebar a');
      links.forEach(link => link.classList.remove('active'));
      element.classList.add('active');
    }

