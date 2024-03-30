import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/hooks/useAuth";
import Text from "@/components/ui/Text";
import useAuthStore from "@/stores/auth.store";

const schema = z.object({
  email: z.string().email("Ingresa un correo electrónico"),
  password: z
    .string()
    .min(8, "Ingresa una contraseña de al menos 8 caracteres"),
});

type FormValues = z.infer<typeof schema>;

export default function TabTwoScreen() {
  const { signInWithPassword, signOut } = useAuth();
  const uid = useAuthStore((s) => s.uid);
  const { register, formState, handleSubmit, control } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (values: FormValues) => {
    const { email, password } = values;
    try {
      setIsLoading(true);
      setError("");
      await signInWithPassword(email, password);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderForm = () => {
    return (
      <>
        <Input
          {...register("email")}
          control={control}
          label="Correo electrónico"
          placeholder="example@email.com"
          errorMessage={formState.errors.email?.message}
        />
        <Input
          {...register("password")}
          control={control}
          label="Contraseña"
          placeholder="********"
          password
          errorMessage={formState.errors.password?.message}
          wrapperClassName="mt-3"
        />
        <Button
          wrapperClassName="mt-4 py-3"
          onPress={handleSubmit(submitHandler)}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Continuar
        </Button>
        {error ? (
          <Text font="regular" textClassName="text-danger text-sm mt-1">
            {error}
          </Text>
        ) : null}
      </>
    );
  };

  const renderSignOut = () => {
    return (
      <Button wrapperClassName="py-3" onPress={signOut}>
        Cerrar sesión
      </Button>
    );
  };

  return (
    <ScrollView className="bg-surface">
      <View className="m-4">{!uid ? renderForm() : renderSignOut()}</View>
    </ScrollView>
  );
}
