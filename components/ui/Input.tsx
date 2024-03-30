import Icons from "@expo/vector-icons/Feather";
import { forwardRef, useState } from "react";
import Text from "@/components/ui/Text";
import Colors from "@/constants/Colors";
import { TextInput, TextInputProps } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { jn } from "@/utils/styles.utils";
import { Controller, Control } from "react-hook-form";

interface InputProps extends TextInputProps {
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  errorMessage?: string;
  password?: boolean;
  control: Control<any, any>;
  name?: string;
}

const p = { size: 20, color: Colors.contrast };

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { wrapperClassName, inputClassName } = props;
  const { label, errorMessage, password = false } = props;
  const { name = "", control, ...rest } = props;
  const [showPassword, setShowPassword] = useState(password);

  const renderTogglePassword = () => {
    if (!password) return null;
    return (
      <TouchableOpacity
        className="absolute top-3 right-3"
        onPress={() => setShowPassword((p) => !p)}
      >
        {showPassword ? (
          <Icons name="eye" {...p} />
        ) : (
          <Icons name="eye-off" {...p} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View className={jn(wrapperClassName)}>
      {label ? (
        <Text font="regular" textClassName="text-sm mb-1">
          {label}
        </Text>
      ) : null}
      <View className="flex flex-row relative w-full">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              ref={ref}
              id={name}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              className={jn(
                "bg-surface-2 p-2 rounded w-full text-typography",
                inputClassName
              )}
              placeholderTextColor={Colors["low-contrast"]}
              cursorColor={Colors.primary}
              secureTextEntry={showPassword}
              {...rest}
            />
          )}
        />
        {renderTogglePassword()}
      </View>
      {errorMessage ? (
        <Text font="regular" className="text-danger text-xs mt-1">
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
});

export default Input;
