import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

const Coin = ({name, rank, symbol, isNew, id}) => {
    return (
        <View>
            <Image source={{uri: `https://static.coinpaprika.com/coin/${id}/logo.png`}}/>
            style={{width: 30, height: 30}}
        </View>
    );
};

export default Coin;