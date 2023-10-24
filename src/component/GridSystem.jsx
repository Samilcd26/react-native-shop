import { View } from "react-native";

const styles = {
    app: {
      flex: 4, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",width: 400,
      backgroundColor: "red"
    },
    row: {
      flexDirection: "row"
    },
    "1col":  {
      backgroundColor:  "lightblue",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  1
    },
    "2col":  {
      backgroundColor:  "green",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  2
    },
    "3col":  {
      backgroundColor:  "orange",
      borderColor:  "#fff",
      borderWidth:  1,
      flex:  3
    },
    "4col":  {
      flex:  4
    }
  };

  function Col({ numRows, children }) {
    return (
        <View style={styles[`${numRows}col`]}>{children}</View>
    );
  }

  
  function Row({ children }) {
    return (
        <View style={styles.row}>{children}</View>
    );
  }

  export {Col, Row}