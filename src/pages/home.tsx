import Image from "next/image";
import { Inter } from "next/font/google";
import {
  authControllerGetSessionInfo,
  authControllerSignOut,
} from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-fuild";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <UiButton variant="primery">text</UiButton>
      <UiButton variant={"secondary"}>text</UiButton>
      <UiButton variant={"outlined"}>text</UiButton>
      <UiButton variant={"primery"} disabled>
        text
      </UiButton>
      <UiTextField
        label="Text field"
        inputProps={{ placeholder: "Enter email..." }}
      />
      <UiSelectField selectProps={{ placeholder: "Enter email..." }} options={[{value : '1', label: 'option1'}]}/>
    </main>
  );
}
