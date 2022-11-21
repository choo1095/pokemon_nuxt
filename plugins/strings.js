export default ({ app }, inject) => {
    function capitalizeFirstLetter(string) {
        if (string.length === 0) {
            return "";
        } else if (string.length === 1) {
            return string.charAt(0).toUpperCase()
        }

        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function replaceDashesWithSpaces(string) {
        return string.replace("-", " ");
    }
    
    inject('capitalizeFirstLetter', (string) => capitalizeFirstLetter(string));
    inject('replaceDashesWithSpaces', (string) => replaceDashesWithSpaces(string));
}