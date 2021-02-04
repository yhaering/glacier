export default function (number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 2000);
  });
}
