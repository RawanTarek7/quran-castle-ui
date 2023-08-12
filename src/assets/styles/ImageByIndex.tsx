import image1 from '../images/bg.png'
import image2 from '../images/logo-light.png'
import image3 from '../images/bg.png'
import image4 from '../images/logo-light.png'

export const images: string[] = [image1, image2, image3, image4]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
