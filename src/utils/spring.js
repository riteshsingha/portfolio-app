/**
 * Apple's Spring Configuration Presets
 * Based on "Designing Fluid Interfaces" WWDC 2018
 * 
 * Key insight: Think in damping ratio + response, not mass/stiffness/damping
 * - Damping ratio: 1.0 = critically damped (no bounce), < 1.0 = bouncy
 * - Response: How quickly it reaches target (not duration - springs have no fixed duration)
 */

// Default UI spring - critically damped, graceful and non-distracting
export const springDefault = {
  type: 'spring',
  damping: 30,
  stiffness: 300,
  mass: 1
}

// Snappy spring - for quick responses
export const springSnappy = {
  type: 'spring',
  damping: 35,
  stiffness: 400,
  mass: 0.8
}

// Bouncy spring - for momentum interactions (flicks, throws)
// "Add bounce only when the gesture itself carried momentum"
export const springBouncy = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
  mass: 1
}

// Slow spring - for large movements, drawer/sheet
export const springSlow = {
  type: 'spring',
  damping: 30,
  stiffness: 200,
  mass: 1.2
}

// Gentle spring - for subtle hover effects
export const springGentle = {
  type: 'spring',
  damping: 40,
  stiffness: 200,
  mass: 1
}

/**
 * Apple's momentum projection function
 * "Take a small input and make a big output"
 * 
 * Projects where a flick would naturally end based on velocity
 * This is what makes a flick feel like it throws the element
 */
export function projectMomentum(velocity, decelerationRate = 0.998) {
  return (velocity / 1000) * decelerationRate / (1 - decelerationRate)
}

/**
 * Find nearest snap point from projected position
 */
export function nearestSnapPoint(position, snapPoints) {
  return snapPoints.reduce((nearest, point) => 
    Math.abs(position - point) < Math.abs(position - nearest) ? point : nearest
  )
}

/**
 * Rubber-band function for boundary resistance
 * "At an edge, resist progressively instead of stopping hard"
 */
export function rubberband(overshoot, dimension, constant = 0.55) {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot))
}

/**
 * Convert Apple's damping ratio + response to Framer Motion spring config
 * 
 * Apple uses:
 * - damping ratio (1.0 = critical, < 1.0 = bouncy)
 * - response (seconds to reach target)
 * 
 * Framer Motion uses:
 * - damping
 * - stiffness
 * - mass
 */
export function appleSpringToFramer(dampingRatio = 1.0, response = 0.4) {
  // Convert Apple's parameters to physics-based spring
  const stiffness = Math.pow(2 * Math.PI / response, 2)
  const damping = 4 * Math.PI * dampingRatio / response
  
  return {
    type: 'spring',
    stiffness,
    damping,
    mass: 1
  }
}

// Pre-computed springs using Apple's parameters
export const springUI = appleSpringToFramer(1.0, 0.4)      // Default UI
export const springDrawer = appleSpringToFramer(0.8, 0.3)  // Sheet/drawer
export const springRotation = appleSpringToFramer(0.8, 0.4) // Rotation
export const springMove = appleSpringToFramer(1.0, 0.4)     // Move/reposition
