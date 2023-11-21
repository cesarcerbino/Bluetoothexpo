// bluetoothFunctions.js

import { BleManager } from "react-native-ble-plx";

const manager = new BleManager();

export const checkBluetoothEnabled = async () => {
  const state = await manager.state();
  if (state !== "PoweredOn") {
    // Puedes mostrar una alerta o realizar alguna acción para habilitar Bluetooth
    console.warn("Bluetooth is not enabled.");
  }
};

export const startScanning = (onDeviceFound) => {
  manager.startDeviceScan(null, null, (error, device) => {
    if (error) {
      console.error("Error scanning for devices:", error);
      return;
    }
    onDeviceFound(device);
  });
};

export const stopScanning = () => {
  manager.stopDeviceScan();
};

export const connectToDevice = async (deviceId) => {
  const device = await manager.device(deviceId);
  await device.connect();
  return device;
};

export const disconnectDevice = async (device) => {
  await device.cancelConnection();
};

export const sendDataToDevice = async (
  device,
  serviceUUID,
  characteristicUUID,
  data
) => {
  const service = await device.service(serviceUUID);
  const characteristic = await service.characteristic(characteristicUUID);
  await characteristic.writeWithResponse(data);
};
