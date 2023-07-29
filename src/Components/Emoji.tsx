import { ImageProps  ,Image } from '@chakra-ui/react';
import bullsEye from '../assets/images/bulls-eye.webp';
import meh from '../assets/images/meh.webp'
import thumbs from '../assets/images/thumbs-up.webp'


interface Props{
    rating : number
}
const Emoji = ({rating}: Props) => {
    if(rating < 3) return null;
    const emojiMap:{[key : number] : ImageProps} = {
        3 : {src :meh , alt:'meh' , boxSize:'25px'},
        4 : {src :thumbs , alt:'Recommended' , boxSize:'25px'},
        5 : {src :bullsEye , alt:'exceptional', boxSize:'25px'},
    }
  return (
    <Image {...emojiMap[rating]}/>
  )
}

export default Emoji
