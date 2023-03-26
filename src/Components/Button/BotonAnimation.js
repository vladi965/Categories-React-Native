import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import * as Animatable from 'react-native-animatable';


const BotonAnimation = () => {
    const bounceAnimRef = useRef();
    const flashAnimRef = useRef();
    const jelloAnimRef = useRef();
    const pulseAnimRef = useRef();
    const rubberBandAnimRef = useRef();
    const shakeAnimRef = useRef();
    const swingAnimRef = useRef();
    const tadaAnimRef = useRef();
    const wobbleAnimRef = useRef();

  return (
    //BOUNCE
    <View style={styles.contain}>
      <Animatable.View ref={bounceAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#1289A7' }]}
            onPress={() => {
                //Your condition here
                if(true){
                    bounceAnimRef.current.bounce(800);
                }
            }}
        >
        <Text style={styles.animButtonText}>Bounce</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* FLASH */}
      <Animatable.View style={{paddingTop: 15}} ref={flashAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#eb4d4b' }]}
            onPress={() => {
                flashAnimRef.current.flash(800);
            }}
        >
        <Text style={styles.animButtonText}>Flash</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* JELLO */}
      <Animatable.View style={{paddingTop: 15}} ref={jelloAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#30336b' }]}
            onPress={() => {
                jelloAnimRef.current.jello(800);
            }}
        >
        <Text style={styles.animButtonText}>Jello</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* PULSE */}
      <Animatable.View style={{paddingTop: 15}} ref={pulseAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#f0932b' }]}
            onPress={() => {
                pulseAnimRef.current.pulse(800);
            }}
        >
        <Text style={styles.animButtonText}>Pulse</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* RUBBERBAND */}
      <Animatable.View style={{paddingTop: 15}} ref={rubberBandAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#e81764' }]}
            onPress={() => {
              if(true) {
                rubberBandAnimRef.current.rubberBand(800);
              }
            }}
        >
        <Text style={styles.animButtonText}>RubberBand</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* SHAKE */}
      <Animatable.View style={{paddingTop: 15}} ref={shakeAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#be2edd' }]}
            onPress={() => {
              if(true) {
                shakeAnimRef.current.shake(800);
              }
            }}
        >
        <Text style={styles.animButtonText}>Shake</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* SWING */}
      <Animatable.View style={{paddingTop: 15}} ref={swingAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#79dd7e' }]}
            onPress={() => {
              if(true) {
                swingAnimRef.current.swing(800);
              }
            }}
        >
        <Text style={styles.animButtonText}>Swing</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* TADA */}
      <Animatable.View style={{paddingTop: 15}} ref={tadaAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#386dbd' }]}
            onPress={() => {
              if(true) {
                tadaAnimRef.current.tada(800);
              }
            }}
        >
        <Text style={styles.animButtonText}>Tada</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* WOBBLE */}
      <Animatable.View style={{paddingTop: 15}} ref={wobbleAnimRef}>
        <TouchableOpacity style={[styles.animButton, { backgroundColor: '#76bcad' }]}
            onPress={() => {
              if(true) {
                wobbleAnimRef.current.wobble(800);
              }
            }}
        >
        <Text style={styles.animButtonText}>Wobble</Text>
        </TouchableOpacity>
      </Animatable.View>


    </View>
    
  )
}

export default BotonAnimation

const styles = StyleSheet.create({
    contain: {
      width: '100%',
      paddingTop: 15,
      paddingHorizontal: 20,
    },

    animButton: {
      backgroundColor: '#0652dd',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 4,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
    },

    animButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
    }
})