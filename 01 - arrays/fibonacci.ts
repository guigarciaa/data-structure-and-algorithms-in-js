const finonacci = [];
finonacci[1] = 1;
finonacci[2] = 2;

for (let i = 3; i < 20; i++) {
  finonacci[i] = finonacci[i - 1] + finonacci[i - 2];
}

for (let i = 1; i < finonacci.length; i++) {
  console.log(finonacci[i]);
}
