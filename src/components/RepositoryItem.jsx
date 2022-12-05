import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50
    }
})

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <Image
                style={styles.img}
                source={{
                    uri: item.ownerAvatarUrl
                }}
                fadeDuration={300}
            />
            <Text>Full Name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem;