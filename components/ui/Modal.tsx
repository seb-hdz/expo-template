import Colors from "@/constants/Colors";
import BottomSheet, { BottomSheetProps } from "@gorhom/bottom-sheet";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { View, StyleSheet } from "react-native";

interface ModalProps extends BottomSheetProps {}

const ModalHandle = () => (
  <View className="rounded-t-xl flex flex-row justify-center">
    <View className="w-8 bg-contrast h-1 rounded-full mt-4 mb-2" />
  </View>
);

const Modal = forwardRef<BottomSheet, ModalProps>(
  ({ children, ...props }, ref) => {
    return (
      <BottomSheet
        ref={ref}
        backgroundStyle={{ backgroundColor: Colors["surface-3"] }}
        handleComponent={() => <ModalHandle />}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.5}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[
              { backgroundColor: "rgba(0, 0, 0, 1)" },
              StyleSheet.absoluteFillObject,
            ]}
          />
        )}
        {...props}
      >
        {children}
      </BottomSheet>
    );
  }
);

export default Modal;
