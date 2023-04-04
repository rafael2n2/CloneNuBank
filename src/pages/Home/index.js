import { View } from 'react-native';
import CardCartaoCredito from '../../components/CardCartaoCredito';

import CardMeusCartoes from '../../components/CardMeusCartoes';
import Header from '../../components/Header';
import styles from './style';

export default function Home() {
  return (
    <View style={styles.container}>

      <Header/>

      <View style={styles.CardMeusCartoesView}>
        <CardMeusCartoes/>
      </View>

      <View style={styles.BorderSeparetion}></View>

      <CardCartaoCredito/>

    </View>
  );
}
