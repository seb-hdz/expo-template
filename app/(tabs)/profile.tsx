import Text from "@/components/ui/Text";
import { ScrollView, View, TouchableOpacity } from "react-native";
import Divider from "@/components/ui/Divider";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import Colors from "@/constants/Colors";
import Modal from "@/components/ui/Modal";

export default function TabTwoScreen() {
  const modalRef = useRef<BottomSheet>(null);

  return (
    <View className="bg-surface flex-col h-full">
      <ScrollView>
        <View className="flex flex-col items-center justify-center m-4">
          <TouchableOpacity
            onPress={() => modalRef.current?.expand()}
            className="rounded-full bg-surface-3 w-32 h-32"
          />
          <Text font="bold" textClassName="text-center text-xl mt-3">
            Lorem ipsum dolor amet
          </Text>
          <Text font="regular" textClassName="text-contrast text-xs mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, aut
            vel officia blanditiis quisquam est nesciunt adipisci illo.
            Deleniti, eaque.
          </Text>
          <Divider wrapperClassName="my-4" />
        </View>
      </ScrollView>
      <Modal
        ref={modalRef}
        index={-1}
        enablePanDownToClose
        snapPoints={["20%"]}
      >
        <View className="m-4">
          <Text font="medium">Opción 1</Text>
          <Divider wrapperClassName="my-4" />
          <Text font="medium">Opción 2</Text>
        </View>
      </Modal>
    </View>
  );
}
