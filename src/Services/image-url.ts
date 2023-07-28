import noImage from "../assets/images/1bf0a2eb21537488818c8ff5de1dd845.jpg"

const getCroppedImageUrl = ( url : string) => {
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length ;
    return url.slice(0 , index) + 'crop/600/400/' + url.slice(index) ; 
}

export default getCroppedImageUrl; 