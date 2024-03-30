import { jn } from "@/utils/styles.utils";
import { Text as RnText, TextProps as RnTextProps } from "react-native";

interface TextProps extends RnTextProps {
  font: "regular" | "medium" | "bold";
  textClassName?: string;
}

const Text = (props: TextProps) => {
  const { font, textClassName, children, style, ...rest } = props;

  const getFont = () => {
    switch (font) {
      case "regular":
        return "Exo2-Regular";
      case "medium":
        return "Exo2-SemiBold";
      case "bold":
        return "Exo2-Bold";
    }
  };

  const fontFamily = { fontFamily: getFont() };

  return (
    <RnText
      style={[...((style as []) ?? []), fontFamily]}
      className={jn("text-typography", textClassName)}
      {...rest}
    >
      {children}
    </RnText>
  );
};

export default Text;
