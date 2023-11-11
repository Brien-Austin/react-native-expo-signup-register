const {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} = require("react-native");

const App = () => {
  return (
    <SafeAreaView style={styles.homeContent}>
      <View style={styles.titleContainer}>
        <Text style={styles.head}>Cookzee</Text>
        <Text style={styles.subHead}>cooking made easier</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.register}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    fontSize: 36,
    color: "#FBBB00",
    fontWeight: "bold",
  },
  subHead: {
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingBottom: 20,
  },

  login: {
    backgroundColor: "#FBBB00",
    height: 50,
    borderRadius: 8,
    width: 280,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  register: {
    borderColor: "#FBBB00",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    width: 280,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
  },
});
