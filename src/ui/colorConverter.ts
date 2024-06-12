export const colorConverter = (color: string) => {
  switch (color) {
    case "red":
      return "rgb(252 165 165)";
    case "green":
      return "rgb(134 239 172)";
    case "blue":
      return "rgb(147 197 253)";
    case "purple":
      return "rgb(216 180 254)";
    case "yellow":
      return "rgb(253 224 71)";
    case "brown":
      return "rgb(217 119 6)";
    case "pink":
      return "rgb(249 168 212)";
    case "gray":
      return "rgb(209 213 219)";
    case "black":
      return "rgb(82 82 91)";
    default:
      return null;
  }
};
