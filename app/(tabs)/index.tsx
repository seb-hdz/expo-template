import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Modal from "@/components/ui/Modal";

export default function TabOneScreen() {
  const modalRef = useRef<BottomSheet>(null);

  return (
    <View>
      <View className="flex flex-col h-full justify-center items-center bg-surface">
        <Button onPress={() => modalRef.current?.expand()}>Open Modal</Button>
      </View>
      <Modal
        ref={modalRef}
        index={-1}
        enablePanDownToClose
        snapPoints={["97%"]}
      >
        {/* Modal contents */}
        <View className="px-4 py-2 flex flex-col h-full justify-between">
          {/* Modal header */}
          <View>
            <Text
              font="bold"
              className="text-center uppercase text-xl text-white"
            >
              Lorem ipsum dolor sit amet
            </Text>
          </View>
          {/* Modal body */}
          <View className="flex-grow my-4">
            <Text font="regular" textClassName="mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              laudantium sit tempore illo temporibus quod adipisci laborum
              deleniti ex! Fugiat?
            </Text>
            <Text font="regular" textClassName="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              dolore?
            </Text>
            <Text font="regular">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              iste quasi sint culpa sequi quidem facilis delectus modi inventore
              perferendis vitae tempore ea, pariatur voluptatem impedit, libero
              reprehenderit ipsum nobis!
            </Text>
          </View>
          {/* Modal Footer */}
          <View className="flex flex-row justify-center gap-x-4">
            <Button className="bg-secondary my-2 flex-grow">Botón 2</Button>
            <Button className="my-2 flex-grow">Botón 1</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
