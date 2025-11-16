import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Switch,} from "react-native";
import { styles } from "./styles";

export const Login = () => {
  const [faceIdEnabled, setFaceIdEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/metamask-text.png")}
        style={styles.wordmark}
      />
      <Image
        source={require("../../../assets/metamask.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Boas-vindas de volta!</Text>

      <Text style={styles.label}>Senha</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Insira a senha da MetaMask"
          placeholderTextColor="#666"
          secureTextEntry
        />

        <Image
          source={require("../../../assets/faceid.png")}
          style={styles.faceIdIcon}
        />
      </View>
      <View style={styles.faceIdRow}>
        <Text style={styles.faceIdLabel}>Desbloquear com Face ID?</Text>
        <Switch
          value={faceIdEnabled}
          onValueChange={setFaceIdEnabled}
          trackColor={{ false: "#555", true: "#6f7dff" }}
          thumbColor="#fff"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Desbloquear</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};
