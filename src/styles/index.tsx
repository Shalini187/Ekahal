import { Dimensions, PixelRatio, StyleSheet } from "react-native";

let { width } = Dimensions.get('window');

export const mainContainer = StyleSheet.create({
    container: {
        flex: 1,
        top: '5%',
        paddingBottom: 24
    }
})

export const introStyles = StyleSheet.create({
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(120),
        width: '100%',
    },
    wrapper: {
        height: 220,
        width: 350,
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 28,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderTopRightRadius: 50
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: '5%',
        textTransform: 'capitalize'
    },
    paragraph: {
        fontSize: 12,
    },
    paginationWrapper: {
        bottom: 200,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    paginationDots: {
        width: 30,
        height: 10,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: '#E432C1',
    },
    button: {
        padding: 12,
        width: 90,
        borderRadius: 20,
        marginVertical: '10%',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    fontText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 8
    }
});

export const styleBottom = StyleSheet.create({
    bottomSheetContainer: {
        bottom: 0,
        padding: 8,
        width: width,
        elevation: 10,
        height: '80%',
        shadowRadius: 8,
        borderRadius: 45,
        shadowOpacity: 1,
        shadowColor: '#000',
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#0B0B45',
        shadowOffset: { width: 0, height: 4 },
    },
    footerStyle: {
        padding: 8,
        width: 250,
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: '5%',
        backgroundColor: 'red'
    },
    itemStyle: {
        flex: 1,
        paddingBottom: 16,
        alignSelf: 'center',
        paddingVertical: '10%'
    },
    closeStyle: {
        height: 62,
        width: 62,
        borderRadius: 100,
        backgroundColor: '#000'
    },
    subContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnStyle: {
        padding: 8,
        alignSelf: 'center'
    },
    closeContainer: {
        top: '10%',
        alignSelf: 'center'
    },
    xStyle: {
        top: '24%',
        alignSelf: 'center'
    }
});

export const header = StyleSheet.create({
    headerContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        height: 80,
        width: '100%',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 16,
        textTransform: 'uppercase',
    }
});

export const secondScreen = StyleSheet.create({
    container: {
        width: 200,
        margin: 16,
        borderWidth: 1,
        padding: 12,
        alignSelf: 'center',
        borderRadius: 20
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: '15%',
        alignSelf: 'center',
        borderRadius: 100
    }
});


export const thirdScreen = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 12,
        fontSize: 12,
        borderRadius: 20,
        alignSelf: 'center',
        marginHorizontal: 8
    },
});

export const fourthScreen = StyleSheet.create({
    centeredView: {
        flex: 1,
        top: '4%'
    },
    modalView: {
        width: '90%',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '100%',
        fontSize: 18,
        padding: 8,
        color: '#000',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#c3c3c3',
        paddingHorizontal: 16,
    }
});

export const loginScreen = StyleSheet.create({
    loginLayout: {
        paddingBottom: -15,
        alignItems: 'flex-start',
        marginVertical: '20%',
    },
    imageNew: {
        flex: 1,
        height: 450,
        width: '100%',
        transform: [
            { rotateX: '360deg' },
            { rotateY: '360deg' },
            { scaleX: 1 },
            { scaleY: 1 }
        ]
    },
    inputContainer: {
        height: 55,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 16,
        top: '15%',
        paddingHorizontal: 24,
        position: 'relative',
        alignSelf: 'center',
        marginVertical: 12,
        width: '95%',
    },
    viewLayout: {
        flex: 1,
        borderWidth: 1,
        paddingVertical: 30,
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        borderColor: '#e5e5e5',
        paddingHorizontal: 18,
    },
    textWelcome: {
        color: 'grey',
        fontWeight: '900',
        fontSize: 30,
        alignSelf: 'center',
    },
    button: {
        borderColor: '#01579B',
        width: '95%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 15,
    },
    loginText: {
        flexWrap: 'wrap',
        alignSelf: 'center',
        paddingLeft: 8,
        bottom: 30,
        fontWeight: 'bold',
        fontSize: 48,
        marginVertical: 24,
        marginBottom: -32,
    },
    subText: {
        flexWrap: 'wrap',
        alignSelf: 'center',
        paddingLeft: 8,
        fontSize: 18,
        paddingVertical: 8,
    },
    welcomeText: {
        flexWrap: 'wrap',
        alignSelf: 'center',
        top: '5%',
        fontSize: 24,
        color: 'grey',
        fontWeight: 'bold',
    },
    footerStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
});