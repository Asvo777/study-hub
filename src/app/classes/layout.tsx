"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-3">
        <div className="grow">
          <Link href="/classes">Classes</Link>
        </div>
        <div
          onClick={async () => {
            await fetch("/api/auth/logout");
            router.push("/login");
          }}
        >
          Logout
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
