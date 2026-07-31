import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAfAL_Fw3ScSXT5W_Z9pdxz-_PTD1wASso",
  authDomain: "little-memory-46ca0.firebaseapp.com",
  projectId: "little-memory-46ca0",
  storageBucket: "little-memory-46ca0.firebasestorage.app",
  messagingSenderId: "911159081602",
  appId: "1:911159081602:web:a95a5a96822f328cfc529b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const button = document.querySelector("button");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const messages = document.querySelector("#messages");


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
    <small>${today}</small>
  `;


  messages.prepend(card);


  nameInput.value = "";
  messageInput.value = "";

});
