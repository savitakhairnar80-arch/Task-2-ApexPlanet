// Dark Mode Toggle
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Contact Form Display User Input
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const password = contactForm.password.value.trim();
  const message = contactForm.message.value.trim();

  if(!name || !email || !password){
    formMessage.innerHTML = "<span style='color:red'>Please fill out all required fields!</span>";
    return;
  }

  formMessage.innerHTML = `
    <strong>Your Submitted Information:</strong><br>
    Name: ${name}<br>
    Email: ${email}<br>
    Password: ${password}<br>
    Message: ${message || "(No message provided)"}<br>
  `;

  formMessage.style.color = "#0077ff";
  contactForm.reset();
});

// To-Do List
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if(task === "") return;

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.addEventListener('click', () => li.remove());
  li.appendChild(delBtn);

  todoList.appendChild(li);
  todoInput.value = "";
});
