import { UiSelectField } from "@/shared/ui/ui-select-fuild";
import { useAddBlockItemForm } from "../model/use-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  {label: 'WebSite', value: AddBlockItemDtoType.Website},
  {label: 'KeyWord', value: AddBlockItemDtoType.KeyWord}
]

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField options={typeOptions} className="grow min-w-[200px]" selectProps={{ ...register("type") }} />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter Website",
          ...register("data"),
        }}
      />
      <UiButton variant="primery" disabled={isLoading}>Add Block Item</UiButton>
    </form>
  );
}
