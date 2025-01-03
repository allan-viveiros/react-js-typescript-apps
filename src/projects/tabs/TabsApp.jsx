import { useState, useEffect } from "react";
import BtnContainer from "./BtnContainer";
import JobInfo from "./JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const TabsApp = () => {
    const [loading, setLoading] = useState(true);
    const [jobData, setJobData] = useState([]);
    const [activeCompany, setActiveCompany] = useState(0);

    const fetchJobData = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setJobData(data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchJobData();

    }, []);

    const handleActiveCompany = (jobIndex) => {
        setActiveCompany(jobIndex);
    }

    if (loading) {
        return (
            <section className="jobs-center">
                <h2>Loading...</h2>
                <div className="loading"></div>
            </section>
        )
    }

    return (
        <section className="jobs-center">
            <div className="btn-container-tabs">
                <BtnContainer jobData={jobData} handleActiveCompany={handleActiveCompany} activeCompany={activeCompany} />
            </div>            
            
            <JobInfo activeCompany={activeCompany} jobData={jobData} />
        </section>
    )
}

export default TabsApp;