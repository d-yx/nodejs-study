async function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

delay(500).then((d) => {
  console.log(d);
});
