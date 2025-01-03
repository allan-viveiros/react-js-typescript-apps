/* eslint-disable react/prop-types */
import JobDuties from "./JobDuties";

const JobInfo = ({activeCompany, jobData}) => {
    return (
        <article className="job-info">
            <h3>{jobData[activeCompany].title}</h3>
            <span className="job-company">{jobData[activeCompany].company}</span>
            <p className="job-date">{jobData[activeCompany].dates}</p>

            <div>
                {
                    jobData[activeCompany].duties.map((duty, index) => {
                        return (
                            <JobDuties key={index} duty={duty} />
                        )
                    })
                }
            </div>
        </article>
    );
}

export default JobInfo;
