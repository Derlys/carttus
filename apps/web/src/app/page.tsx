"use client"
import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";
import Link from "next/link";


export default function Home() {
  const healthCheck = useQuery(orpc.healthCheck.queryOptions());

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
            <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                    WELCOME TO NX2
                </h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                    Follow our adventure during travel around the world
                </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="https://www.youtube.com/@nomadaxtwo"
                    className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Follow in our Youtube
                </Link>

            </div>
        </section>
      </div>
    </div>
  );
}
