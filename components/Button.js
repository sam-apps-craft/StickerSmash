import { Pressable, StyleSheet, View } from "react-native";


export default function Button ({ label }) {
    return (
        <View style={StyleSheet.buttonContainer}>
            <Pressable style={StyleSheet.button} onPress={() => alert 
                ('You pressed a button.')}>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});