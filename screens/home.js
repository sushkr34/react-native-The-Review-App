import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm';


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: 'Data Structure and algorithm', rating: 3, body: 'dsa by java', key: '1' },
        { title: 'React.Js and redux ', rating: 4, body: 'Html /css / Javascript', key: '2' },
        { title: 'Node JS and express', rating: 4, body: 'express / mongoDb', key: '3' },
    ])

    const addReview=(review)=>{
        review.key=Math.random.toString()
        setReviews((currentReviews)=>{
            return[review,...currentReviews]
        });
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons name='close'
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />

                   <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (

                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderBottomColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex:1,
    }
})