import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from '../styles/styles';
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const AccordingComponent = (props) => {
    const Navigation = useNavigation()
    const [expanded, setExpanded] = useState(false);
    // console.log("hello world")
    // console.log(props?.data)

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const onClickHandler = (title, item) => {
        console.log("hello world")
        if (item.detail && props.link === "support") {
            return Navigation.navigate('singleDisease', { title, "spie": item.title })
        }
        console.log(title)
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    }
    // console.log(props.data)
    return (
        <View>
            <TouchableOpacity style={styles.row} onPress={toggleExpand}>
                <Text style={[styles.title]}> {props.title}</Text>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={"black"} />
            </TouchableOpacity>
            <View style={{ backgroundColor: "white", width: '100%', height: 1 }} />
            {expanded &&
                <View style={{}}>
                    {(props?.MainTitle) ? (<Text style={{
                        fontSize: responsiveFontSize(2.7),
                        fontWeight: '700', paddingHorizontal: responsiveWidth(2),
                        textAlign: "center",
                        paddingVertical: responsiveHeight(2)
                    }}>{props.data}</Text>) : (

                        <FlatList
                            data={props.data}
                            numColumns={1}
                            scrollEnabled={false}
                            renderItem={({ item, index }) =>
                                <View>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: colors.color4,
                                            // height:responsiveHeight(5)
                                        }}
                                        onPress={() => { onClickHandler(props.title, item) }}
                                    >
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <Text style={{
                                                paddingLeft: responsiveWidth(2),
                                                color: "black",
                                                paddingVertical: responsiveHeight(1),
                                                fontSize: responsiveFontSize(3)
                                            }}>{index + 1} </Text>
                                            <Text style={{
                                                color: "black",
                                                flex: 1, flexWrap: 'wrap',
                                                paddingVertical: responsiveHeight(1),
                                                marginLeft: responsiveWidth(2),
                                                fontSize: responsiveFontSize(3)
                                            }} >   {item.title}</Text>
                                        </View>

                                    </TouchableOpacity>
                                    <View style={{ backgroundColor: "black", width: '100%', height: 1 }} />
                                </View>
                            } />
                    )}

                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12,
    },
    title: {
        fontSize: responsiveScreenFontSize(3.5),
        fontWeight: 'bold',
        color: 'white',
    },
    // itemActive: {
    //     fontSize: 12,
    //     color: 'green',
    // },
    // itemInActive: {
    //     fontSize: 12,
    //     color: 'gray',
    // },
    // btnActive: {
    //     borderColor: 'green',
    // },
    // btnInActive: {
    //     borderColor: 'red',
    // },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: colors.color1,
    },
    childRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'gray',
    },

    childHr: {
        height: 1,
        backgroundColor: 'red',
        width: '100%',
    },
    colorActive: {
        borderColor: 'green',
    },
    colorInActive: {
        borderColor: 'gray',
    }

});

export default AccordingComponent;
