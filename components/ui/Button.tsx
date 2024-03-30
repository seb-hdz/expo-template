import { jn } from "@/utils/styles.utils";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Text from "./Text";
import Icons from "@expo/vector-icons/Feather";
import Colors from "@/constants/Colors";
import { useSpring, animated } from "@react-spring/native";

interface ButtonProps extends TouchableOpacityProps {
  wrapperClassName?: string;
  labelClassName?: string;
  children: string | React.ReactNode;
  isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { wrapperClassName, labelClassName, children } = props;
  const { isLoading = false, ...rest } = props;
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 1 },
    loop: true,
    config: { duration: 1000 },
  });

  const renderIsLoading = () => {
    if (!isLoading) return null;
    return (
      <animated.View
        className="mr-2"
        style={{
          transform: [{ rotate: rotate.to([0, 1], ["0deg", "360deg"]) }],
        }}
      >
        <Icons size={20} name="loader" color={Colors.typography} />
      </animated.View>
    );
  };

  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <Text
          font="medium"
          className={jn(
            "text-base text-typography text-center",
            labelClassName
          )}
        >
          {children}
        </Text>
      );
    }
    return children;
  };

  return (
    <TouchableOpacity
      className={jn(
        "bg-primary rounded-full py-2 px-4",
        !rest.disabled ? "opacity-100" : "opacity-70",
        wrapperClassName
      )}
      {...rest}
    >
      <View className="flex flex-row items-center justify-center">
        {renderIsLoading()}
        {renderChildren()}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
