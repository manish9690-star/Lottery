// helper.js

export function genTicket(n) {
  let ticket = [];
  for (let i = 0; i < n; i++) {
    ticket.push(Math.floor(Math.random() * 10)); // Random number between 0-9
  }
  return ticket;
}

export function sum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}