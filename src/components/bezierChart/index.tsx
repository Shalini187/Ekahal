import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import firestore from '@react-native-firebase/firestore';

const screenWidth = Dimensions.get("window").width;

const BezierChart = () => {
    let [state, setState] = useState<any>({ userId: '', data: '' });

    useEffect(() => {
        init();
        () => { return; }
    }, [])

    let init = async () => {
        await firestore().collection('BeizerChart').doc('QGESSurgwgxLjhRqWgmv').onSnapshot(documentSnapshot => {
            setState({ ...state, userId: documentSnapshot.id, data: documentSnapshot.data() });
        })
    };

    return (
        <View>
            {
                state?.data ?
                    <LineChart
                        data={state?.data}
                        width={screenWidth}
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1}
                        chartConfig={{
                            backgroundColor: "#E432C1",
                            backgroundGradientFrom: "#E432C1",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                    : <></>
            }
        </View>
    )
}

export default BezierChart;