import React, {useEffect, useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {CardIOView, CardIOUtilities} from 'react-native-awesome-card-io';

console.disableYellowBox = true;

const App = () => {
  const [card, setCard] = useState();
  const [scannerVisible, setScannerVisible] = useState();

  useEffect(() => {
    CardIOUtilities.preload();
  }, []);

  if (scannerVisible) {
    return (
      <View style={{flex: 1}}>
        <CardIOView
          didScanCard={(data) => {
            setCard(data);
            setScannerVisible(false);
          }}
          style={{flex: 1}}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {card && card.scanned && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Карта нөмірі: {card.cardNumber}</Text>
            <Text style={{fontSize: 20}}>Типі: {card.cardType}</Text>
          </View>
        )}
      </View>
      <Button onPress={() => setScannerVisible(true)} title="Картаны скандау" />
    </SafeAreaView>
  );
};

export default App;
