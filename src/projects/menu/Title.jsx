/* eslint-disable react/prop-types */

const Title = ({menuTitle}) => {
    return (
        <div className="title">
            <h2>{menuTitle}</h2>
            <div className="title-underline"></div>
        </div>
    );
}

export default Title;