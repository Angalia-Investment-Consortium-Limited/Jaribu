import { proxy } from "valtio";


const state = proxy ({

    intro: true,
    color: '#F2F2F2',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './aicljs.png',
    fullDecal: './aicljs.png'
})

export default state;