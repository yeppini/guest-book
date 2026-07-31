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

const date = new Date();

const today = 
  date.getFullYear() + "." +
  String(date.getMonth() + 1).padStart(2, "0") + "." +
  String(date.getDate()).padStart(2, "0");


card.innerHTML = `
    <strong>${name}</strong>
    <p>${message}</p>
    <small>${today}</small>
`;


  messages.appendChild(card);


  nameInput.value = "";
  messageInput.value = "";

});
