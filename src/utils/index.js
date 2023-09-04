export const makefirstLettUpp = (word = "") => {
    return word[0].toUpperCase() + word.slice(1);
};

export const setCssClass = (word) => {
    switch (word) {
        case "simple":
            return "orange";
        case "rugged":
            return "green";
        default:
            return "black";
    }
};

export const styleActiveLink = ({ isActive }) => {
    return isActive ? "active" : "";
};
