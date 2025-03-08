import Icon from '@react-native-vector-icons/fontawesome5';
import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';

const TagContainer = styled.View`
margin: 5%;
padding: 5%;
border-radius: 5px;
background-color: #eaeaea;
`

const ExchangeScreen = () => {
    const [exchangeData, setExchangeData] = useState([]);
        useEffect(() => {
            const fetchTag = async () => {
            try {
                const response = await fetch('https://api.coinpaprika.com/v1/exchanges');
                const data = await response.json();
                setExchangeData(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            }
            };
            fetchTag();
            }, []);
    return (
        <ScrollView>
        <Text style={{fontSize: 28, textAlign: 'center', margin: '5%', fontWeight: '500'}}>All Coin Exchanges</Text>
        {exchangeData && 
        exchangeData.map(e => {
            return (
            <TagContainer key={e.id}>{e.active === true ? (
                    <View style={{backgroundColor: '#47ce12', borderRadius: 5, width: '20%', paddingVertical: "1%"}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>Active</Text>
                        </View>
                ) : (
                    <View style={{backgroundColor: '#bc1717', borderRadius: 5, width: '20%', paddingVertical: "1%"}}>
                    <Text style={{color: 'white', textAlign: 'center'}}>Passive</Text>
                    </View>
        )}
        <View style={{flexDirection: 'row', gap: '3%'}}>
                <Text style={{fontSize : 24}}>{e.name}</Text>
                {e.links && e.links.website && (<Icon name='atlas' iconStyle="solid" size={18} style={{marginTop: "2%"}} color={'#1263CE'} onPress={() => Linking.openURL(e.links.website[0])} />)}
                {e.links && e.links.twitter && (<Icon name='twitter' iconStyle="brand" size={18} style={{marginTop: "2%"}} color={'#1DA1F2'} onPress={() => Linking.openURL(e.links.twitter[0])}/>)}
        </View>
                {e.description ?
                <Text>{e.description}</Text> : <Text>No Description.</Text>}
            </TagContainer>
            );
            })}
        </ScrollView>
    );
};

export default ExchangeScreen;