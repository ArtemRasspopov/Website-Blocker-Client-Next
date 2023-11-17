import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function SignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((date) => signUpMutation.mutate(date))}
    >
      <UiTextField
        label="Email"
        inputProps={{type: 'email', ...register("email"), required: true }}
      />
      <UiTextField
        label="Password"
        inputProps={{type: 'password', ...register("password"), required: true }}
      />
      <UiButton disabled={signUpMutation.isPending} variant="primery">
        Sing Up
      </UiButton>
    </form>
  );
}
