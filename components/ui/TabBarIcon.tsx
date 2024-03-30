import Icons from "@expo/vector-icons/Feather";

interface TabBarIconProps {
  name: React.ComponentProps<typeof Icons>["name"];
  color: string;
}

const TabBarIcon = (props: TabBarIconProps) => {
  return <Icons size={20} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
