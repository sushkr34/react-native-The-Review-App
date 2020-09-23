import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={formikProps.handleChange('title')}
              onBlur={formikProps.handleBlur('title')} 
              value={formikProps.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Review details'
              onChangeText={formikProps.handleChange('body')}
              onBlur={formikProps.handleBlur('body')}
              value={formikProps.values.body}
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={formikProps.handleChange('rating')}
              onBlur={formikProps.handleBlur('rating')} 
              value={formikProps.values.rating}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
            
            <FlatButton onPress={formikProps.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}
