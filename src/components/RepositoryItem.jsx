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
            <Text>Full Name: {item.fullName}</Text>
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
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem;