import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/grateful_dead.svg"
          alt="Grateful Dead logo"
          width={500}
          height={535}
          priority
        />
        <div className="flex flex-col gap-1 items-end">
          <h1>Hi Mom! Hi Dad! 😀</h1>
        </div>
      </main>
    </div>
  );
}
