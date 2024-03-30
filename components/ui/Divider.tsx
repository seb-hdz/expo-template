import { jn } from "@/utils/styles.utils";
import { View } from "react-native";

interface DividerProps {
  wrapperClassName?: string;
}

const Divider = (props: DividerProps) => {
  const { wrapperClassName } = props;

  return (
    <View className={jn("bg-contrast/30 h-[1] w-full", wrapperClassName)} />
  );
};

export default Divider;
