import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="h-40 sm:h-64 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-400 py-10 sm:py-20 text-center relative border-b-8 border-blue-500">
        <div>
          <h3 className="font-bold text-3xl bg-gradient-to-r from-white to-purple-200 inline-block text-transparent bg-clip-text">
            Hi, I&apos;m Sivanesh
          </h3>
        </div>
        <div className="h-32 w-32 sm:h-48 sm:w-48 absolute inset-x-0 top-[100px] sm:top-[150px] m-auto">
          <Image
            src="https://github.com/sivanesh-dsp.png"
            sizes="100%"
            fill
            priority
            alt="Sivanesh Dsp"
            className="rounded-full shadow-2xl"
          />
        </div>
      </header>
      <main className="mt-24 sm:mt-32 mb-10 w-full flex justify-center">
        <div className="w-[550px] bg-white px-10 pt-10 pb-7 m-2 rounded-[25px] shadow">
          <h3 className="font-semibold">Share your reviews</h3>
          <ul className="py-5 space-y-4">
            <li>
              <Link
                href="/reviews/youtube"
                className="youtube-card border border-black px-4 py-2 flex items-center space-x-4 rounded hover:border-purple-600 hover:text-sky-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-red-500"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
                <span>YouTube Reviews</span>
                <span className="bg-green-500 px-1 rounded-full text-sm text-white">
                  40
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/event"
                className="event-card border border-black px-4 py-2 flex items-center space-x-4 rounded hover:border-purple-600 hover:text-sky-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-purple-500"
                >
                  <path
                    fill="currentColor"
                    d="M12 14q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                  />
                </svg>
                <span>Event Reviews</span>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
