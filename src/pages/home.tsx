import { Inter } from "next/font/google";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const {data} = useSessionQuery()

  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader
        right={
          <div className="flex items-center gap-4">
            {data?.email} <SignOutButton />
          </div>
        }
      />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10"></aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-8">Block list</h1>
        </main>
      </div>
    </div>
  );
}
