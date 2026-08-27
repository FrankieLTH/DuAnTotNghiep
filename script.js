const button = document.querySelector("#changeMessage");
const description = document.querySelector(".description");

const messages = [
    "Day la trang web rieng cua toi, duoc tao bang HTML, CSS va JavaScript.",
    "Xin chao! Toi la Le Trung Hieu va day la san pham ca nhan cua toi.",
    "Moi dong code la mot buoc tien nho trong hanh trinh hoc lap trinh."
];

let currentMessage = 0;

button.addEventListener("click", () => {
    currentMessage = (currentMessage + 1) % messages.length;
    description.textContent = messages[currentMessage];
});
