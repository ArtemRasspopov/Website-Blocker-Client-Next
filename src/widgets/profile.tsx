import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data: session } = useSessionQuery();

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {session?.email} <SignOutButton />
    </div>
  );
}
