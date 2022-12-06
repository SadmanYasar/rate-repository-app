import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colors.bgCard,
        padding: 20
    },
    img: {
        width: 50,
        height: 50
    },
    flexItemTop: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    flexItemDesc: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20,
        flexGrow: 1,
        flexShrink: 1
    }
})

/*
==============================
TODO - Add flex to design card
==============================
*/
const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexItemTop}>
                <Image
                    style={styles.img}
                    source={{
                        uri: item.ownerAvatarUrl
                    }}
                    fadeDuration={300}
                    borderRadius={10}
                />
                <View style={styles.flexItemDesc}>
                    <Text fontWeight={'bold'}>{item.fullName}</Text>
                    <Text color={'textSecondary'}>{item.description}</Text>
                    <View style={{
                        paddingTop: 10
                    }}>
                        <Text color={'buttonTextPrimary'}
                            style={{
                                backgroundColor: theme.colors.buttonPrimary,
                                alignSelf: 'flex-start',
                                padding: 5,
                                borderRadius: 5
                            }}
                        >
                            {item.language}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
                <Text>
                    {item.stargazersCount < 1000
                        ? item.stargazersCount
                        : (item.stargazersCount / 1000).toFixed(1) + 'k Stars'}
                </Text>
                <Text>
                    {item.forksCount < 1000
                        ? item.forksCount
                        : (item.forksCount / 1000).toFixed(1) + 'k Forks'}
                </Text>
                <Text>Reviews: {item.reviewCount}</Text>
                <Text>Rating: {item.ratingAverage}</Text>
            </View>
        </View>
    )
}

export default RepositoryItem;