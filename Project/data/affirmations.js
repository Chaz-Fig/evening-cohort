export const affirmations = [
   "Believe in yourself!",
   "You are stronger than you think.",
   "Keep pushing forward.",
   "The sky's the limit...I guess",
   "You are awesome!",
   "Stay positive, work hard, make it happen.",
   "Sometimes the universe has a funny way of showing you're cool",
   "You are enough, I suppose.",
   "Love yourself, because if no one doesn't, who will lol"
];

export function generateAffirmation() {
   const randomIndex = Math.floor(Math.random() * affirmations.length);
   document.querySelector('#affirmations').textContent = affirmations[randomIndex];
}