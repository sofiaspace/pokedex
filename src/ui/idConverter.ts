export const idConverter = (id: number) => {
  if (id < 9) {
    return `#00${id}`;
  } else if (id > 9 && id < 100) {
    return `#0${id}`;
  } else {
    return `#${id}`;
  }
};
