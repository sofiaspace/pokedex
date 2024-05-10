import Image from "next/image";
import logo from "../../public/img/logo.svg";
import PokemonList from "@/components/pokemonList";

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url('../../public/img/background-image.jpg')] overflow-auto">
      <div className="flex flex-col items-center pt-12">
        <Image src={logo} alt="Logo" width={200} priority />
      </div>
      <PokemonList />
    </div>
  );
}
