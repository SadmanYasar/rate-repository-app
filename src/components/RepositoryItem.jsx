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
            <Image
                style={styles.img}
                source={{
                    uri: item.ownerAvatarUrl
                }}
                fadeDuration={300}
                borderRadius={10}
            />
            <Text fontWeight={'bold'}>{item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text color={'textSecondary'}
                style={{
                    backgroundColor: theme.colors.buttonPrimary,
                    alignSelf: 'flex-start',
                    padding: 5,
                    borderRadius: 5
                }}
            >
                {item.language}
            </Text>
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
    )
}

export default RepositoryItem;