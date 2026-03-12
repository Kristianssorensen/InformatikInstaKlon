import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'

export default function UploadScreen() {
  const [image, setImage] = useState(null);
  

  //funktion til at vægle billed
  const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
  });

  if (!result.canceled) {
    setImage(result.assets[0].uri)
  }
};

//det der bliver printet til skærmen
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Upload billed</Text>
      <TouchableOpacity style={styles.imagePicker}>
        <Text style={styles.imagePlaceholder} onPress={pickImage}>Tryk for at vælge billede</Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#ffffff', paddingTop: 80 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  imagePicker: { width: '100%', height: 300, backgroundColor: '#f0f0f0', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16,},
  imagePlaceholder: { color: '#999', fontSize: 16 },
});