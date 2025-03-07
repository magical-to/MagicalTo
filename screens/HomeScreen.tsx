import React, { useEffect, useState } from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Coin from '../components/Coin';

const HomeScreen = () => {
    const [coinlistData, setCoinlistData] = useState([]);
    useEffect(() => {
        const fetchCoinList = async () => {
        try {
            const response = await fetch('https://api.coinpaprika.com/v1/coins');
            const data = await response.json();
            setCoinlistData(data.slice(0, 100));
            console.log(data.slice(0, 101));
        } catch (e) {
            console.error(e);
        }
        };
        fetchCoinList();
        }, []);
    return (
        <ScrollView contentContainerStyle={{paddingBottom: "25%"}}>
        <Image 
        source={require("../android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png")}
        style={{width: "20%", height: "5%"}}
        />
        {coinlistData ?
        <View>
            {coinlistData.map(l => {
                return (
                <View key={l.rank}>
                    <Coin id={l.id}/>
                </View>
                );
            })}
        </View> : <View></View>}
        </ScrollView>
    );
};

export default HomeScreen;