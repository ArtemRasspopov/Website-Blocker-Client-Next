import { Inter } from "next/font/google";
import { UiHeader } from "@/shared/ui/ui-header";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { Profile } from "@/widgets/profile";
import { useBlockListQuery } from "@/entities/block-list/queries";
import { AddBlockItemForm, BlockList } from "@/features/block-list";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const { data } = useBlockListQuery({ q: "" });

  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl mb-8">Block list</h1>
          <AddBlockItemForm />
          <BlockList className="mt-5"/>
        </main>
      </div>
    </div>
  );
}
