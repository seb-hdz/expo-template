import Divider from "@/components/ui/Divider";
import Text from "@/components/ui/Text";
import Colors from "@/constants/Colors";
import Icons from "@expo/vector-icons/Feather";
import { ScrollView, TouchableOpacity, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView className="bg-surface">
      <Text font="regular" textClassName="mt-4 mx-4 text-contrast">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        omnis nihil expedita nemo dolorem consectetur quam mollitia aut nam
        eligendi!
      </Text>
      <View className="bg-surface-2 rounded-lg m-4 flex flex-col items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <View key={i} className="w-full px-4">
            <TouchableOpacity className="flex flex-row items-center w-full py-4">
              <Icons name="info" size={24} color={Colors.contrast} />
              <Text
                font="medium"
                textClassName="text-typography ml-3 text-base"
              >
                Opción {i + 1}
              </Text>
            </TouchableOpacity>
            {i < 3 ? <Divider /> : null}
          </View>
        ))}
      </View>
      <View />
    </ScrollView>
  );
}
