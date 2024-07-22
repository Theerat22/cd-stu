import Image from "next/image";
import Navbar from "../navbar";
import { Button } from '@headlessui/react'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar
        navigationType={"single"}
        items={[
          {
            name: "Home",
            path: "#home",
          },
          { name: "Booking", path: "#booking" },
          {
            name: "Your Booking",
            path: "#your-booking",
          },
        ]}
      />
      <div className="mt-12 flex-col items-center">
        <h1 className="mt-10 text-4xl text-center text-black">เว็ปจองห้องประชุมห้องสมุดจ้าาา</h1>
        {/* <p className="pt-2 text-lg text-center text-black">ทับกันไม่รู้จะยังไงละ</p> */}
      </div>
      <Link href={"https://github.com/Theerat22"}>
        <Button className={"rounded-full bg-black py-2 px-8 text-xl text-white data-[hover]:bg-black-300 data-[active]:bg-sky-700"}>
          จอง
        </Button>
      </Link>

      <footer>
        <a className="text-black underline"
        href="https://github.com/Theerat22"
        >
          ทำโดย สิทธาเอง
        </a>
      </footer>
    </main>
    
  );
}