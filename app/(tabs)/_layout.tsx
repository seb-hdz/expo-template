import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import Styles from "@/constants/Styles";
import TabBarIcon from "@/components/ui/TabBarIcon";
import Header from "@/components/global/Header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: Styles.tabBarStyle,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: { paddingBottom: 6, fontFamily: "Exo2-SemiBold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          header: () => <Header>Inicio</Header>,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          header: () => <Header>Explorar</Header>,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          header: () => <Header>Perfil</Header>,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Opciones",
          header: () => <Header>Opciones</Header>,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
