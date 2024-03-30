import { View } from "react-native";
import Constants from "expo-constants";
import Text from "../ui/Text";

interface HeaderProps {
  children: string | React.ReactNode;
}

const { statusBarHeight } = Constants;

const Header = (props: HeaderProps) => {
  const { children } = props;

  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <Text font="bold" textClassName="uppercase text-base">
          {children}
        </Text>
      );
    }
    return children;
  };

  return (
    <View style={{ marginTop: statusBarHeight }} className="bg-surface-2 p-4">
      {renderChildren()}
    </View>
  );
};

export default Header;
