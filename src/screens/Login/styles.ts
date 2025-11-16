import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  wordmark: {
    width: 110,
    height: 50,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 0,
  },
  logo: {
    alignSelf: "center",
    width: 210,
    height: 170,
    marginBottom: 25,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 40,
  },
  label: {
    color: "#ccc",
    marginBottom: 6,
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: "#121315",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#444",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#fff",
    paddingVertical: 12,
    fontSize: 16,
  },
  faceIdIcon: {
    width: 44,
    height: 44,
    tintColor: "#ffffffff",
    marginLeft: 5,
  },
  faceIdRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  faceIdLabel: {
    color: "#fff",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#3b3b3b",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  forgot: {
    marginTop: 10,
    alignSelf: "center",
    color: "#4a9afd",
    fontSize: 15,
  },
});
