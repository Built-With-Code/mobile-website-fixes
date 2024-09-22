import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-neutral-200">
      <header className="px-8 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-xl">Built With Code</h1>
        <span className="uppercase text-sm">Menu</span>
      </header>
      <main className="relative flex flex-1 flex-col gap-6 sm:gap-12 justify-center items-center p-8 sm:py-16">
        <h1 className="text-3xl sm:text-6xl font-semibold text-center">
          Learn to craft web interfaces.
        </h1>
        <button className="px-5 py-2 bg-black rounded-full font-semibold text-white">
          Get started
        </button>
        <div className="relative h-[30vh] max-w-[90%] aspect-video rounded-lg overflow-hidden shadow-md">
          <img
            className="object-cover"
            src="/bg-image.jpg"
            alt="Built With Code"
          />
        </div>
      </main>
      <footer className="flex items-center justify-center text-sm px-8 py-4 text-neutral-700 text-center">
        Copyright © 2024 Built With Code.
      </footer>
    </div>
  );
}
