import React, { useEffect, useState } from "react";
import { Dimensions, View, Text } from "react-native";
import { useRoute, } from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

const Details = () => {
    const route = useRoute();
    const {coinId} = route.params;
    const [coinData, setCoinData] = useState(null);
        /*useEffect(() => {
            const fetchCoin = async () => {
            try {
                const response = await fetch(
                    `https://api.coinpaprika.com/v1/coins/${coinId}`
                );
                const data = await response.json();
                setCoinData(data);
            } catch (e) {
                console.error(e);
            }
            };
            fetchCoin();
            }, [coinId]);*/

    return (
        <View>
            {coinData ? (
             <Text>{coinData.name}</Text>
            ) : ( 
            <View>
                <View style={{flexDirection: 'row', margin: "5%", gap: "3%"}}>
                <View style={{width: width / 5, height: width / 5, backgroundColor: '#cccccc', borderRadius: 50}}></View>
                <View>
                <Text>coin symbol</Text>
                <Text style={{fontSize: 24}}>coin name</Text>
                </View>
                </View>
                <Text style={{fontSize: 28, margin: "5%", marginTop: 0}}>Coin Price</Text>
                <View style={{width: width / 1.11, backgroundColor: '#eaeaea', alignSelf: 'center', alignItems: 'center', padding: "3%", borderRadius: 10}}>
                    <Text style={{fontSize: 20}}>Description</Text>
                    <Text>Coin Description</Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center', gap: "10%", margin: "5%"}}>
                <View style={{width: width / 2.5, backgroundColor: '#eaeaea', alignItems: 'center', padding: "3%", borderRadius: 5}}>
                    <Text style={{fontSize: 20}}>Rank</Text>
                    <Text>Coin Rank</Text>
                </View>
                <View style={{width: width / 2.5, backgroundColor: '#eaeaea', alignItems: 'center', padding: "3%", borderRadius: 5}}>
                    <Text style={{fontSize: 20}}>Started At</Text>
                    <Text>Coin started_at</Text>
                </View>   
                </View> 
                </View>
            )}
        </View>
    );
}

export default Details;