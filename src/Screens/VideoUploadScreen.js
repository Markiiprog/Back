import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import DocumentPicker from 'react-native-document-picker';

const VideoUploadScreen = () => {
  const uploadVideo = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
      });

      const fileUri = result.uri;
      const fileName = result.name;

      const data = [
        {
          name: 'file',
          filename: fileName,
          type: result.type,
          data: RNFetchBlob.wrap(fileUri),
        },
      ];

      const response = await RNFetchBlob.fetch(
        'POST',
        'http://localhost:8000/transcribe', // Replace with your server endpoint
        {
          'Content-Type': 'multipart/form-data',
        },
        data
      );

      if (!response.respInfo || !response.respInfo.status || response.respInfo.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.respInfo.status}`);
      }

      const responseData = response.json();

      if (responseData && responseData.Transcription !== undefined) {
        // Display the result (you can use the state to render it in your component)
        console.log('Transcription:', responseData.Transcription);
      } else {
        console.error('Unexpected API response format:', responseData);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick a video from library" onPress={uploadVideo} />
      {/* You can add UI elements to display the selected video or transcription result */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoUploadScreen;
