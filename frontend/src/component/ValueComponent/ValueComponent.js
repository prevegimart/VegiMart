import React, { useState ,useEffect} from "react";
import "./ValueComponent.css";
import personImage from "../../image/person1.avif";
import personImage2 from "../../image/chroimage.avif";
import personImage3 from "../../image/admin.avif";
import personImage4 from "../../image/manager.avif";
import personImage5 from "../../image/employee.avif";
import valuepic1 from "../../image/valuepic1.avif";
import valuepic2 from "../../image/valuepic2.avif";
import valuepic3 from "../../image/valuepic3.avif";
import valuepic4 from "../../image/valuepic4.avif";
import valuepic5 from "../../image/valuepic5.avif";

const ValueComponent = () => {
    const [selectedRole, setSelectedRole] = useState("CIO");

    const roles = [
        { name: "CIO", img: valuepic1 },
        { name: "CHRO", img: valuepic2 },
        { name: "Payroll Admin", img: valuepic3 },
        { name: "Managers", img: valuepic4 },
        { name: "Employees", img: valuepic5 },
    ];

    const currentIndex = roles.findIndex((role) => role.name === selectedRole);

    useEffect(() => {
        const interval = setInterval(() => {
          // Move to the next role, loop back to the start if at the last role
          const nextIndex = (currentIndex + 1) % roles.length;
          setSelectedRole(roles[nextIndex].name);
        }, 6000);
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [selectedRole]); 

    return (
        <div className="value-container">
            {/* Heading */}

            
            <h2>
                Everyone gets value from day 1
            </h2>
            <p className="subtitle">
                A platform loved by everyone in your company - by employers and employees
            </p>

            {/* Role Selector */}
            <div className="roles-container">
                {roles.map((role) => (
                    <div
                        key={role.name}
                        className={`role-card ${selectedRole === role.name ? "active" : ""}`}
                        onClick={() => setSelectedRole(role.name)}
                    >
                        <img src={role.img} alt={role.name} className="role-image" />
                        <p>{role.name}</p>
                    </div>
                ))}
            </div>

            {/* Conditionally Render the Correct Container */}
            {selectedRole === "CIO" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box without-greyhr">
                                <h3>Without greyHR</h3>
                                <ul>
                                    <li>Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                            </div>

                            <div className="info-box with-greyhr">
                                <h3>With greyHR</h3>
                                <p>
                                    ✅ No compliance nightmares! greyHR’s own implementation team works
                                    with your IT, ensuring seamless implementation and integration of HR
                                    tech, with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "CHRO" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box without-greyhr">
                                <h3>Without greyHR</h3>
                                <ul>
                                    <li>Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                            </div>

                            <div className="info-box with-greyhr">
                                <h3>With greyHR</h3>
                                <p>
                                    ✅ No compliance nightmares! greyHR’s own implementation team works
                                    with your IT, ensuring seamless implementation and integration of HR
                                    tech, with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage2} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Payroll Admin" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box without-greyhr">
                                <h3>Without greyHR</h3>
                                <ul>
                                    <li>Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                            </div>

                            <div className="info-box with-greyhr">
                                <h3>With greyHR</h3>
                                <p>
                                    ✅ No compliance nightmares! greyHR’s own implementation team works
                                    with your IT, ensuring seamless implementation and integration of HR
                                    tech, with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage3} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Managers" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box without-greyhr">
                                <h3>Without greyHR</h3>
                                <ul>
                                    <li>Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                            </div>

                            <div className="info-box with-greyhr">
                                <h3>With greyHR</h3>
                                <p>
                                    ✅ No compliance nightmares! greyHR’s own implementation team works
                                    with your IT, ensuring seamless implementation and integration of HR
                                    tech, with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage4} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}

            {selectedRole === "Employees" && (
                <div className="value-container">
                    <div className="content-container">
                        <div className="left-section">
                            <div className="info-box without-greyhr">
                                <h3>Without greyHR</h3>
                                <ul>
                                    <li>Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                            </div>

                            <div className="info-box with-greyhr">
                                <h3>With greyHR</h3>
                                <p>
                                    ✅ No compliance nightmares! greyHR’s own implementation team works
                                    with your IT, ensuring seamless implementation and integration of HR
                                    tech, with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>

                        <div className="task-container">
                            <img src={personImage5} alt="User" className="person-image" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ValueComponent;

