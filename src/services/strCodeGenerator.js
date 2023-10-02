import hexToRgba from "./hexToRgba"

function strCodeGenerator(properties) {
    const { background, blur, opacity, saturation } = properties

    return `.box {\n\tbackground: ${hexToRgba(background, opacity / 100)};\n\tbackdrop-filter: blur(${blur}px) saturate(${saturation}%);\n\t-webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);\n}`
}

export default strCodeGenerator