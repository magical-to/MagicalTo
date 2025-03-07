import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

const Coin = ({ id }) => {
    const [coinData, setCoinData] = useState({}); // ✅ 빈 객체로 초기화

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await fetch(
                    `https://api.coinpaprika.com/v1/coins/${id}`
                );
                const data = await response.json();
                setCoinData(data);
            } catch (e) {
                console.error("Coin API Fetch Error:", e);
            }
        };

        if (id) { // ✅ id가 존재할 때만 API 호출
            fetchCoin();
        }
    }, [id]); // ✅ id가 변경될 때 API 다시 호출

    return (
        <View>
            <Text>{coinData?.name || "Loading..."}</Text> 
        </View>
    );
};

export default Coin;
