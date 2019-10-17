import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680
const guidelineiphonexWidth = 1440
const Scaling = {}

Scaling.scale = (size) => Math.round((width / guidelineBaseWidth) * size)
Scaling.verticalScale = (size) => Math.round((height / guidelineBaseHeight) * size)
Scaling.moderateScale = (size, factor = 0.5) => Math.round(size + (Scaling.scale(size) - size) * factor)
Scaling.moderateVScale = (size, factor = 0.5) => Math.round(size + (Scaling.verticalScale(size) - size) * factor)

Scaling.width = (size, factor = 0.5) => Math.round(size + (Scaling.scale(size) - size) * factor)
Scaling.height = (size, factor = 0.5) => Math.round(size + (Scaling.verticalScale(size) - size) * factor)

Scaling.base1440

export default Scaling
