const birthday = new Date(2026, 1, 7); // Feb = 1
const today = new Date();
today.setHours(0, 0, 0, 0);

const diffTime = birthday - today;
const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerText =
  daysLeft > 0
    ? `Only ${daysLeft} days to go 🤍`
    : "IT’S YOUR DAY 🎉🤍";

const messages = [
  "You make every single day brighter just by existing and even the thought just makes my day so much better🤍",
  "Still can’t believe thru thick and thin we are still strong together! 💕",
  "You were always my number 1 since day 1, MY RONALDOOO so gorgeous and handsomeeeee😭💕",
  "With you, everything feels better! Love you alottttttt MY LOVEEEEE💗.The way you love Ronaldo and Real Madrid 🤍💗⚽",
  "Almost your dayyy and I'm tooooooooo excited😘",
  "Tomorrow… something ICONIC and something so much special to me. Its like a festival to me👀🔥",
  "HAPPY BIRTHDAY MY LOVE 🎂🤍, been very excited for this day as you know, I will always be very grateful for this very day🥺😘.Hoping to celebrate many more birthdays together.I LOVE YOUUUUU ALOTTTTT💗💗"
];

const messageBox = document.getElementById("messages");

for (let i = 0; i < messages.length; i++) {
  if (i < 7 - daysLeft) {
    const div = document.createElement("div");
    div.className = "message";
    div.innerText = `Day ${i + 1}: ${messages[i]}`;
    messageBox.appendChild(div);
  }
}

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "🤍";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

// Final day only
if (daysLeft >= 0) {
  const overlay = document.getElementById("suiii");
  overlay.style.display = "flex";

  document.getElementById("celebrateBtn").addEventListener("click", () => {
    const sound = document.getElementById("suiiiSound");
    sound.currentTime = 0;
    sound.play();

    for (let i = 0; i < 300; i++) {
      const conf = document.createElement("div");
      //conf.innerText = "🤍⚽🎉";
      conf.innerText = ["🤍","⚽","🎉","🔥","👑"][Math.floor(Math.random()*5)];

      conf.style.position = "fixed";
      conf.style.zIndex = "20";

      conf.style.left = Math.random() * 100 + "vw";
      conf.style.top = "-10px";
      conf.style.fontSize = "22px";
      //conf.style.animation = "fall 3s linear";
      conf.style.animation = `fall ${Math.random() * 2 + 2}s linear`;

      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }
  });
}
