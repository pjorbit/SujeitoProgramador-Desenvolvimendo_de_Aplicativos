import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/Sobre/Index";
import Contato from "../pages/Contato/Index";

import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return(
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor: '#00dae4',
      drawerActiveTintColor: '#f5f5f5',
      drawerInactiveBackgroundColor: '#f5f5f5',
      drawerInactiveTintColor: '#252525'
    }}
    >

      <Drawer.Screen
      name="HomeStack"
      component={StackRoutes}
      options={{
        title:'Inicio'
      }}
      />

      <Drawer.Screen
      name="Sobre"
      component={Sobre}
      />

      <Drawer.Screen
      name="Contato"
      component={Contato}
      />

    </Drawer.Navigator>
  )
}