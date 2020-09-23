import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewForm({addReview}){
    return (
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            onSubmit={(values,actions)=>{
               actions.resetForm();
                addReview(values)
            }} 
            >
            {(formikProps)=>{
                <View>
                    <TextInput  
                        multiline
                    style={globalStyles.input}
                     placeholder='Review title'
                     onChangeText={formikProps.handleChange('title')}
                     value={formikProps.values.title}
                     />
                      <TextInput  
                      multiline
                    style={globalStyles.input}
                     placeholder='Review body'
                     onChangeText={formikProps.handleChange('body')}
                     value={formikProps.values.body}
                     />
                      <TextInput  
                    style={globalStyles.input}
                     placeholder='Rating (1-5)'
                     onChangeText={formikProps.handleChange('rating')}
                     value={formikProps.values.rating}
                     keyboardType='numeric'
                     />
                     <Button title='submit' color='maroon' onPress={formikProps.handleSubmit}/>
                </View>
            }}
            </Formik>
        </View>
    )
}