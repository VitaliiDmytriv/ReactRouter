/* eslint-disable react/prop-types */
function MyModal({ children }) {
    return (
        <div className="myModal">
            <div className="myModal__container">{children}</div>
        </div>
    );
}

export default MyModal;
