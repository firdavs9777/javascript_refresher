let now = new Date();

console.log('Full Year:', now.getFullYear()); // e.g., 2024
console.log('Month:', now.getMonth()); // e.g., 7 for August
console.log('Day of Month:', now.getDate()); // e.g., 18
console.log('Day of Week:', now.getDay()); // e.g., 0 for Sunday
console.log('Hours:', now.getHours()); // e.g., 13
console.log('Minutes:', now.getMinutes()); // e.g., 45
console.log('Seconds:', now.getSeconds()); // e.g., 30
console.log('Milliseconds:', now.getMilliseconds()); // e.g., 500

console.log('ISO String:', now.toISOString());
console.log('UTC String:', now.toUTCString());
console.log('Locale Date String:', now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
console.log('Locale Time String:', now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
console.log('Locale String:', now.toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long' }));
console.log('Date String:', now.toDateString());
console.log('Time String:', now.toTimeString());
