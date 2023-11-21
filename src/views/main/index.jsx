import { CustomButton, CustomMap, CustomText } from "../../components/index";
import { React, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";

const dataFromArduino = [];
for (let a = 0; a < 2; a++) {
  for (let angle = 0; angle <= 360; angle++) {
    // Simulamos datos de distancia en cm, podrías obtenerlos de tu Arduino
    const distance = Math.random() * (30 - 0) + 0; // Valores aleatorios de 0 a 20 cm
    dataFromArduino.push({ angle, distance });
  }
}

const MainView = () => {
  return (
    <View style={styles.maincont}>
      <CustomMap scannedData={dataFromArduino} />
      <CustomButton
        ChildComponnet={() => <CustomText text="Mapear Entorno" />}
      />
    </View>
  );
};

export default MainView;
