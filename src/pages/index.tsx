import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <ul>
      <li>
        <Link href="/stores">Store List</Link>
      </li>
      <li>
        <Link href="/stores/create">Create Store Item</Link>
      </li>
      <li>
        <Link href="/stores/1">Store Detail Page</Link>
      </li>
      <li>
        <Link href="/stores/1/edit">Edit Store Detail Page</Link>
      </li>
      <li>
        <Link href="/stores/map">Map Page</Link>
      </li>
      <li>
        <Link href="/users/login">Login Page</Link>
      </li>  
      <li>
        <Link href="/users/my-page">My Page</Link>
      </li>
      <li>
        <Link href="/users/favorite">Favorite Stores</Link>
      </li>
    </ul>
    </main>
  );
}
