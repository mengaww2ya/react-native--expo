import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrol}>
      <View style={styles.main}>
        <Text style={styles.title}>welcome to mengaw</Text>
        <Text style={styles.subtitle}> i am mengaw wubetu</Text>

      </View>
 <View>
  <Text style={styles.label} >ENTER YOUR FIRST NAME  </Text>
  <TextInput style={styles.input} placeholder="enter your name here" />
  <Text style={styles.label}>ENTER YOUR LAST NAME  </Text>
  <TextInput  style={styles.input} placeholder="enter your name here" />
  <Text style={styles.label}>CREATE PASSWORD </Text>
  <TextInput  style={styles.input} placeholder="create password here" secureTextEntry />
  <Text style={styles.label}>CONFIRM PASSWORD  </Text>
  <TextInput  style={styles.input} placeholder="confirm password here" secureTextEntry />
  <Text style={styles.label}>ENTER YOU MASSAGE OR OPINION  </Text>
  <TextInput  style={styles.textarea }placeholder="enter your massage here" multiline/>
  <View style={styles.buttoncont}> <Button title="send" />
</View>
 </View>
 </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    borderColor:"blue"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
  },
  label:{
    width:"90%",
    height:"auto",
    fontSize:30,
    padding:10,
    margin:10,
  },
  input:{
    width:"90%",
    height:"auto",
    fontSize:30,
    padding:10,
    margin:10,
    backgroundColor:"gray"
  },
  textarea:{
    width:"90%",
    height:150,
    fontSize:30,
    padding:10,
    margin:10,
        backgroundColor:"gray"

  },
   buttoncont:{
width:"50%",
height:"auto",
marginLeft:"20%",
 },
  scrol:{
    width:"60%",
    height:"auto",
  },
});
