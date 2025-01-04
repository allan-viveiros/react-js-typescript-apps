
const BtnContainer = ({jobData, handleActiveCompany, activeCompany}) => {

    return (
        jobData.map((job, index) => {
            return (
                <button key={job.id} className={activeCompany === index ? "job-btn active-btn" : "job-btn"} onClick={() => handleActiveCompany(index)}>
                    {job.company}
                </button>
            )
        })
    );
}

export default BtnContainer;
