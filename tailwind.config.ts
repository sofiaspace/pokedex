import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-purple-300",
    "bg-red-300",
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-900",
    "bg-lime-200",
    "bg-pink-400",
    "bg-orange-300",
    "bg-amber-400",
    "bg-amber-600",
    "bg-green-300",
    "bg-green-400",
    "bg-yellow-300",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-sky-300",
    "bg-gray-300",
    "text-green-400",
    "text-yellow-300",
    "text-yellow-400",
    "text-yellow-500",
    "text-orange-300",
    "text-blue-300",
    "text-blue-400",
    "text-blue-900",
    "text-red-300",
    "text-pink-400",
    "text-amber-400",
    "text-gray-300",
    "text-lime-200",
  ],
};
export default config;
