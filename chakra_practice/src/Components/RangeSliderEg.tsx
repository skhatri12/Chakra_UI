
import {Text,RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb} from '@chakra-ui/react'
const RangeSliderEg = () => {
  return (
    <>
      <Text>
        RangeSlider: The wrapper that provides context and functionality for all children. <br />
        RangeSliderTrack: The empty part of the slider that shows the track. <br />
        RangeSliderFilledTrack: The filled part of the slider. <br />
        RangeSliderThumb: The handle that's used to change the slider value. <br />
      </Text>

      <RangeSlider aria-label={['min','max']} defaultValue={[5,10]} step={3}   colorScheme='red'>
        <RangeSliderTrack>
          <RangeSliderFilledTrack/>
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <a href="/">Back to home</a>
    </>
  )
}

export default RangeSliderEg
