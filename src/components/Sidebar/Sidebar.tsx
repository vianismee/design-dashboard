import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-full flex flex-col gap-[5%] px-3 py-5 h-full">
      <header className="h-[10%] flex items-center justify-center">
        <div className="h-full">
          <Image
            src={"/kitoshindologo.svg"}
            alt="kitoshindo logo"
            height={100}
            width={150}
          />
        </div>
      </header>
      <main className="h-[70%]">Sidebar Content</main>
      <footer className="h-[20%]">Sidebar Content</footer>
    </div>
  );
}
