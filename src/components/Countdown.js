// src/componente/Countdown.js

import React, { useState, useEffect, useRef, useCallback } from "react"
import { Text, StyleSheet } from "react-native"
import { fontSize, spacing } from "../utils/sizes"
import { colors } from "../utils/colors"

const minutesToMillis = min => min * 1000 * 60
const formatTime = time => (time < 10 ? `0${time}` : time)

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null)
  const [millis, setMillis] = useState(minutesToMillis(minutes))

  // Use useCallback to define reset
  const reset = useCallback(() => {
    setMillis(minutesToMillis(minutes))
    onProgress(1) // Reset progress when resetting
  }, [minutes, onProgress])

  // Now countDown uses the stable reset function
  const countDown = useCallback(() => {
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd(reset) // Call onEnd with reset function
        return time
      }
      return time - 1000
    })
  }, [reset, onEnd]) // Included reset in dependencies

  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes))
  }, [millis, minutes, onProgress])

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return
    }
    interval.current = setInterval(countDown, 1000)
    return () => clearInterval(interval.current)
  }, [isPaused, countDown])

  const minute = Math.floor(millis / 1000 / 60) % 60
  const seconds = Math.floor(millis / 1000) % 60

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)"
  }
})
