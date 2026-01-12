const themeToggle = document.getElementById('theme-toggle');
const addBtn = document.getElementById('add-btn');
const notesDisplay = document.getElementById('notes-display');

// Dark Mode Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Adding a Note
addBtn.addEventListener('click', () => {
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title === '' || content === '') {
        alert("Please fill in both fields!");
        return;
    }

    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');
    noteCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    notesDisplay.prepend(noteCard);

    // Clear inputs
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
});