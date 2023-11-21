import * as Permissions from "expo-permissions";

import { React, useEffect, useState } from "react";
import { Text, View } from "react-native";

import AppNavigator from "./navigation/index";
import { BleManager } from "react-native-ble-plx";

const checkBluetoothPermissions = async () => {
  try {
    // Obtén el estado actual del permiso de Bluetooth
    const { status } = await Permissions.getAsync(Permissions.BLUETOOTH);

    if (status === "granted") {
      console.log("Permisos de Bluetooth concedidos.");
      // Puedes realizar operaciones relacionadas con Bluetooth aquí
    } else {
      console.log("Los permisos de Bluetooth no están concedidos.");
      // Puedes manejar la falta de permisos según tu lógica
    }
  } catch (error) {
    console.error("Error al verificar permisos de Bluetooth:", error);
  }
};

// Llama a la función para verificar permisos
checkBluetoothPermissions();

const App = () => {
  return <AppNavigator />;
};

export default App;
