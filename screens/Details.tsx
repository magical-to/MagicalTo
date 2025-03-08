import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, Image, Linking } from "react-native";
import { useRoute } from "@react-navigation/native";
import Icon from "@react-native-vector-icons/fontawesome5";

const { width, height } = Dimensions.get("window");

const Details = () => {
    const route = useRoute();
    const { coinId } = route.params;
    const [coinData, setCoinData] = useState(null);
    const [priceData, setPriceData] = useState(null);


    useEffect(() => {
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
        const fetchPrice = async () => {
            try {
                const response = await fetch(
                    `https://api.coinpaprika.com/v1/tickers/${coinId}?quotes=KRW`
                );
                const data = await response.json();
                setPriceData(data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchCoin();
        fetchPrice();
    }, []);
    return (
        <View>
            {coinData && priceData ? (
                <View>
                    {/* Coin Info */}
                    <View style={{ flexDirection: 'row', margin: "5%", gap: "3%" }}>
                        <Image style={{
                            width: width / 5,
                            height: width / 5,
                        }} source={{uri: coinData.logo}}/>
                        <View>
                            <Text>{coinData.symbol}</Text>
                            <Text style={{ fontSize: 24 }}>{coinData.name}</Text>
                            <View style={{flexDirection: 'row', gap: "5%"}}>
                            {coinData.links.explorer && (
                                <Icon name="info-circle" color="#1263CE" iconStyle="solid" size={18} onPress={() => {Linking.openURL(coinData.links.explorer[0])}}/>
                            )}
                            {coinData.links.facebook && (
                                <Icon name="facebook" color="#1877fe" iconStyle="brand" size={18} onPress={() => {Linking.openURL(coinData.links.explorer[0])}}/>
                            )}
                            {coinData.links.website && (
                                <Icon name="atlas" color="#1263CE" iconStyle="solid" size={18} onPress={() => {Linking.openURL(coinData.links.website[0])}}/>
                            )}
                            {coinData.links.youtube && (
                                <Icon name="youtube" color="#FF0000" iconStyle="brand" size={18} onPress={() => {Linking.openURL(coinData.links.youtube[0])}}/>
                            )}
                            {coinData.links.reddit && (
                                <Icon name="reddit" color="#ff4500" iconStyle="brand" size={18} onPress={() => {Linking.openURL(coinData.links.reddit[0])}}/>
                            )}
                            {coinData.links.source_code && (
                                <Icon name="code" color="#008000" iconStyle="solid" size={18} onPress={() => {Linking.openURL(coinData.links.source_code[0])}}/>
                            )}
                            </View>
                        </View>
                    </View>

                    {/* Coin Price */}
                    <Text style={{ fontSize: 28, margin: "5%", marginTop: 0 }}>
                        {coinData.price || priceData.quotes.KRW.price} KRW
                    </Text>

                    {/* Description */}
                    <View style={{
                        width: width / 1.11,
                        backgroundColor: '#eaeaea',
                        alignSelf: 'center',
                        alignItems: 'center',
                        padding: "3%",
                        borderRadius: 10
                    }}>
                        <Text style={{ fontSize: 20 }}>Description</Text>
                        <Text>{coinData.description || "No description available"}</Text>
                    </View>

                    {/* Rank & Start Date */}
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        gap: "10%",
                        margin: "5%"
                    }}>
                        <View style={{
                            width: width / 2.5,
                            backgroundColor: '#eaeaea',
                            alignItems: 'center',
                            padding: "3%",
                            borderRadius: 5
                        }}>
                            <Text style={{ fontSize: 20 }}>Rank</Text>
                            <Text>{coinData.rank || "N/A"}</Text>
                        </View>
                        <View style={{
                            width: width / 2.5,
                            backgroundColor: '#eaeaea',
                            alignItems: 'center',
                            padding: "3%",
                            borderRadius: 5
                        }}>
                            <Text style={{ fontSize: 20 }}>Started At</Text>
                            <Text>{coinData.started_at || "N/A"}</Text>
                        </View>
                    </View>

                    {/* All Time High */}
                    <View style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        gap: "10%",
                        margin: "5%",
                        marginTop: 0
                    }}>
                        <View style={{
                            width: width / 2.5,
                            backgroundColor: '#eaeaea',
                            alignItems: 'center',
                            padding: "3%",
                            borderRadius: 5,
                            marginTop: 0
                        }}>
                            <Text style={{ fontSize: 20 }}>All Time High</Text>
                            <Text style={{textAlign: 'center'}}>{priceData.quotes.KRW.ath_price} KRW</Text>
                        </View>
                        <View style={{
                            width: width / 2.5,
                            backgroundColor: '#eaeaea',
                            alignItems: 'center',
                            padding: "3%",
                            borderRadius: 5,
                            marginTop: 0
                        }}>
                            <Text style={{ fontSize: 20 }}>% from ATH</Text>
                            <Text>{priceData.quotes.KRW.percent_from_price_ath}%</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <Text>Loading...</Text> // ✅ 로딩 상태 출력 명확히 구분
            )}
        </View>
    );
};

export default Details;
