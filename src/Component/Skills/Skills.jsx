import React, { useState } from "react";
import './Skills.css'
import { SKILLS } from "../Utils/data";
import Skillcard from "./Skillcard/Skillcard";
import Skillsinfocard from "./Skillsinfocard/Skillsinfocard";



const Skills = () => {
    const [selectedskill, setselectedskill] = useState(SKILLS[0]);
    const handleSelectskill = (data) => {
        setselectedskill(data);
    };
    return (
        <>
            <section className="skills-container">
                <h5>Technical Proficiency</h5>

                <div className="skills-content">
                    <div className="skills">
                        {SKILLS.map((item) => (
                            <Skillcard
                                key={item.title}
                                iconurl={item.icon}
                                title={item.title}
                                isActive={selectedskill.title === item.title}
                                onclick={() => {
                                    handleSelectskill(item);
                                }}
                            />

                        ))}
                    </div>

                    <div className="skills-info">
                        <Skillsinfocard
                            heading={selectedskill.title}
                            Skills={selectedskill.skills} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills