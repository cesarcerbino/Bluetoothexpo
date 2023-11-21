import Svg, { Circle } from "react-native-svg";
import { Text, View } from "react-native";

import React from "react";

const CustomMap = ({ scannedData }) => {
  // Factor de escala para convertir distancias a unidades de visualización
  const factorDeEscala = 5; // Ajusta según tus necesidades

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
        Mapa del Entorno
      </Text>
      <Svg
        style={{ backgroundColor: "white", borderRadius: 200 }}
        width="300"
        height="300"
      >
        {scannedData.map((dataPoint, index) => {
          const { angle, distance } = dataPoint;

          // Convierte ángulo y distancia en coordenadas x, y
          const x =
            distance * factorDeEscala * Math.cos((angle * Math.PI) / 180);
          const y =
            distance * factorDeEscala * Math.sin((angle * Math.PI) / 180);

          // Dibuja un círculo en las coordenadas calculadas
          return (
            <Circle
              key={index}
              cx={150 + x} // 100 es el centro del lienzo
              cy={150 + y} // 100 es el centro del lienzo
              r={1} // Radio del círculo
              fill="blue" // Color del objeto
            />
          );
        })}
      </Svg>
    </View>
  );
};

export default CustomMap;
