//App.js
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import Timer from './src/features/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => {}}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: colors.darkblue,
  },
});

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.counterText}>Hello World!!!</Text>
//       <Text style={styles.counterText}>Count: {counter}</Text>
//       <Button title="Increment" onPress={() => setCounter(counter + 1)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   counterText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

// export default function App() {
//   const [turn, setTurn] = useState('X');
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [gameOver, setGameOver] = useState(false);

//   const handlePress = (index) => {
//     if (board[index] !== null || gameOver) {
//       return;
//     }
//     const newBoard = [...board];
//     newBoard[index] = turn;
//     setBoard(newBoard);
//     if (checkWinner(newBoard, turn)) {
//       setTimeout(() => Alert.alert(`Player ${turn} Wins!`, null, [{ text: "OK", onPress: resetGame }]), 500);
//     } else if (newBoard.every(cell => cell !== null)) {
//       setTimeout(() => Alert.alert("It's a draw!", null, [{ text: "OK", onPress: resetGame }]), 500);
//     } else {
//       setTurn(turn === 'X' ? 'O' : 'X');
//     }
//   };

//   const checkWinner = (board, player) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     return lines.some(line => {
//       return line.every(index => {
//         return board[index] === player;
//       });
//     });
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setTurn('X');
//     setGameOver(false);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.board}>
//         {board.map((cell, index) => (
//           <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
//             <Text style={styles.cellText}>{cell}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   board: {
//     width: 300,
//     height: 300,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   cell: {
//     width: '33.33%',
//     height: '33.33%',
//     backgroundColor: '#ddd',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
//   cellText: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
// });
