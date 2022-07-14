import React, { useEffect, useState } from "react";
import { ProgressChart } from "react-native-chart-kit";
import firestore from '@react-native-firebase/firestore';
import { Dimensions } from "react-native";
import { chartConfig } from "../../utils";

const screenWidth = Dimensions.get("window").width;

const ProgressCharts = () => {
    let [state, setState] = useState<any>({ userId: '', data: '' });

    useEffect(() => {
        init();
        () => { setState({ userId: '', data: '' }) }
    }, [])

    let init = async () => {
        await firestore().collection('ProgressChart').doc('LrX7pVxKq7DkhCcXLVGo').onSnapshot(documentSnapshot => {
            setState({ ...state, userId: documentSnapshot.id, data: documentSnapshot.data()?.data });
        });
    }

    return (
        state?.data ?
            <ProgressChart
                data={state?.data}
                width={screenWidth}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
            /> : <></>
    )
}

export default ProgressCharts;