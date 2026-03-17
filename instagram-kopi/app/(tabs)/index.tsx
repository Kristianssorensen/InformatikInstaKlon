import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, Firestore } from 'firebase/firestore';
import { storage, db } from '@/firebase';

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

  //funktion til uplaod
  const uploadImage = async () => {
    

  }
};


//det der bliver printet til skærmen
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Tryk for at vælge billede</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#e9e9e9', paddingTop: 80 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  imagePicker: { width: '100%', height: 300, backgroundColor: '#d00000', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16,},
  imagePlaceholder: { color: '#999', fontSize: 16 },
  image: { width: '100%', height: 300, borderRadius: 12, justifyContent: 'center', alignItems: 'center',},
  button: { backgroundColor: '#0a7ea4', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});