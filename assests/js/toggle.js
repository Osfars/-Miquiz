function toggleMenu() {
   const sidebar = document.getElementById('sidebar');
   const content = document.getElementById('mainContent');

   sidebar.classList.toggle('active');
   content.classList.toggle('shifted');
}

// Make the selected menu item active
function setActive(element) {
      const links = document.querySelectorAll('.sidebar a');
      links.forEach(link => link.classList.remove('active'));
      element.classList.add('active');

      const quizContainer = document.getElementById('quizContainer');
      quizContainer.innerHTML = ''; // Clear previous content

      const startButton = document.createElement('button');
      startButton.id = 'startQuizBtn';
      startButton.textContent = 'Start Quiz';
      startButton.onclick = function() {
          // Assuming a startQuiz function exists in script.js
          if (typeof startQuiz === 'function') {
              startQuiz();
          } else {
              console.error('startQuiz function not found in script.js');
          }
      };
      quizContainer.appendChild(startButton);
    }