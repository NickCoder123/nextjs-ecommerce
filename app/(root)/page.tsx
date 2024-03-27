import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
      This is a protected route.
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
