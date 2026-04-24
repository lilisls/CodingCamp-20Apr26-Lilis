// --- GREETING & CLOCK ---
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    
    // Update Time & Date
    document.getElementById('time').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById('date').innerText = now.toDateString();

    // Greeting Logic
    let greeting = "Good Night";
    if (hours < 12) greeting = "Good Morning";
    else if (hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";
    
    document.getElementById('greeting-text').innerHTML = `${greeting}, <span id="username">User</span>`;
}
setInterval(updateClock, 1000);
updateClock();

// --- FOCUS TIMER (Pomodoro) ---
let timer;
let timeLeft = 25 * 60;

const display = document.getElementById('timer-display');

function updateTimerDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    display.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                alert("Time's up!");
            }
        }, 1000);
    }
});

document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60;
    updateTimerDisplay();
});

