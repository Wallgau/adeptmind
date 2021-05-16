export const getImage = (path: string, extensionIndex: number = 0): any => {
    try {
        const image = require(`../assets/${path}`);
        return image;
    } catch (e) {
        const [imageName] = path.split('.');
        const extensions = ['.jpeg', '.jpg'];
        const newPath = `${imageName}${extensions[extensionIndex]}`
        if (extensionIndex <= extensions.length - 1)
            return getImage(newPath, extensionIndex + 1);
        return null;
    }
}