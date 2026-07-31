const button = document.querySelector("button");
const nameInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
const messages = document.querySelector(".messages");


button.addEventListener("click", function() {
  
const confirmSend = confirm("Send this letter? 🤍");

if (!confirmSend) {
  return;
}

  const name = nameInput.value;
  const message = messageInput.value;


  if (name === "" || message === "") {
    alert("이름과 내용을 입력해주세요 🤍");
    return;
  }


  const date = new Date();

  const months = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec"
];

const today =
  months[date.getMonth()] + " " +
  String(date.getDate()).padStart(2, "0") + ", " +
  date.getFullYear();

  const card = document.createElement("div");
  card.className = "message-card";


  card.innerHTML = `
    <strong>♡ ${name}</strong>
    <p>${message}</p>
    <hr>
    <small>${today}</small>
`;


  messages.prepend(card);


  nameInput.value = "";
  messageInput.value = "";

});
