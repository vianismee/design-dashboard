import CalendarsHero from "./CalendarsHero";

export default function Hero() {
  return (
    <main className="w-full flex gap-[2%]">
      <div className="w-[75%] h-[360px]  rounded-2xl px-[50px] py-[50px] flex bg-linear-to-r from-sky-500 to-sky-800 items-center">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-5xl text-white">
            Welcome to Design <br /> Dashboard
          </h1>
          <p className="font-semibold text-white">Hello World</p>
        </div>
      </div>
      <div className="grow  rounded-2xl p-4 bg-white">
        <div className="flex justify-center items-start">
          <CalendarsHero />
        </div>
      </div>
    </main>
  );
}
