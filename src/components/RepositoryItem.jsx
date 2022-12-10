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
        paddingBottom: 20
    },
    flexBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
                    <LanguageTag language={item.language} />
                </View>
            </View>
            <View style={styles.flexBottom}>
                <Stat count={item.stargazersCount < 1000
                    ? item.stargazersCount
                    : (item.stargazersCount / 1000).toFixed(1) + 'k'}
                    text={'Stars'} />
                <Stat count={item.forksCount < 1000
                    ? item.forksCount
                    : (item.forksCount / 1000).toFixed(1) + 'k'}
                    text={'Forks'} />
                <Stat count={item.reviewCount} text={'Reviews'} />
                <Stat count={item.ratingAverage} text={'Rating'} />
            </View>
        </View>
    )
}

const Stat = ({ count, text }) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
        }}>
            <Text fontWeight={'bold'}>{count}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const LanguageTag = ({ language }) => {
    return (
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
                {language}
            </Text>
        </View>
    )
}

export default RepositoryItem;