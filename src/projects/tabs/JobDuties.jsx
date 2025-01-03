/* eslint-disable react/prop-types */
import { FaAngleDoubleRight } from "react-icons/fa";

const JobDuties = ({index, duty}) => {
    return (
        <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
        </div>
    );
}

export default JobDuties;
