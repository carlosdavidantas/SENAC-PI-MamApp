import { Image, StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style = {styles.backContainer}>
      <View style ={styles.secondBackContainer}>
        <View style = {styles.thirdContainer}>
          <Text style = {styles.titlesText}>Login</Text>
          <Text style = {styles.texts}>Email</Text>
          <TextInput style = {styles.input}></TextInput>
          <Text style = {styles.texts}>Senha</Text>
          <TextInput style = {styles.input}></TextInput>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonsText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: "#E2D3FF",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  secondBackContainer: {
    backgroundColor: "#A77BFF",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "90%",
    borderRadius: 10
  },
  thirdContainer: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    opacity: 0.5,
    borderRadius: 10
  },
  titlesText: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 50,
    color: "#9847FF"
  },
  texts: {
    fontSize: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    width: "80%",
    height: "7%"
  },
  button: {
    backgroundColor: "#9847FF",
    width: "60%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonsText: {
    fontSize: 30,
    fontWeight: "bold"
  }

})

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
