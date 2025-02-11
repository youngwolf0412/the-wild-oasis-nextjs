import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import { supabase } from "./_lib/supabase";

export default function Page() {
  // console.log(supabase);
  // async function testSupabaseConnection() {
  //   const { data, error } = await supabase
  //     .from("cabins") // Replace with your table name
  //     .select("*");

  //   if (error) {
  //     console.error("Error fetching data:", error);
  //   } else {
  //     console.log("Data fetched successfully:", data);
  //   }
  // }
  // testSupabaseConnection();
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
