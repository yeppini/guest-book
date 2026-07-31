const button = document.querySelector("button");
const nameInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
const messages = document.querySelector(".messages");


button.addEventListener("click", function() {

  const name = nameInput.value;
  const message = messageInput.value;


  if (name === "" || message === "") {
    alert("이름과 내용을 입력해주세요 🤍");
    return;
  }


  const card = document.createElement("div");
  card.className = "message-card";


  card.innerHTML = `
    <strong>${name}</strong>
    <p>${message}</p>
  `;


  messages.appendChild(card);


  nameInput.value = "";
  messageInput.value = "";

});
