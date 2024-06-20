import { PokemonType, typeColor } from "@/ui/typeColor";
import Image from "next/image";

interface TypeIconProps {
  type: string | string[];
}

const TypeIcon = ({ type }: TypeIconProps) => {
  let type1;
  let type2;
  let color;
  let color1;
  let color2;
  if (type.length === 2) {
    type1 = type[0] as PokemonType;
    type2 = type[1] as PokemonType;
    color1 = typeColor[type1];
    color2 = typeColor[type2];
  } else {
    color = typeColor[type[0]];
  }

  return (
    <div className="flex justify-center w-[100%] pt-3">
      {type.length === 1 ? (
        <div
          className={`flex flex-row gap-2 items-center justify-evenly ${color} rounded-3xl px-2 py-1`}
        >
          <Image
            src={`/img/${type}_icon.png`}
            alt="icon"
            width={30}
            height={30}
          />
          <p className="first-letter:uppercase self-center text-black">
            {type}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div
            className={`flex flex-row items-left gap-2  ${color1} rounded-3xl px-2 py-1`}
          >
            <Image
              src={`/img/${type1}_icon.png`}
              alt="icon"
              width={30}
              height={30}
            />
            <p className="first-letter:uppercase self-center text-black">
              {type1}
            </p>
          </div>
          <div
            className={`flex flex-row items-left gap-2 ${color2} rounded-3xl px-2 py-1`}
          >
            <Image
              src={`/img/${type2}_icon.png`}
              alt="icon"
              width={30}
              height={30}
            />
            <p className="first-letter:uppercase self-center text-black">
              {type2}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeIcon;
