
// "use client";
// import jsPDF from "jspdf";
// import { useState } from "react";
// import Link from "next/link";

// export default function Resume() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     institute: "",
//     degree: "",
//     educationDuration: "",
//     company: "",
//     jobTitle: "",
//     workDuration: "",
//     skills: ["", "", "", "", "", ""], // Array for multiple skills
//   });

//   const [isResumeGenerated, setIsResumeGenerated] = useState(false);
//   const [sharableLink, setSharableLink] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
//     if (index !== undefined) {
//       const updatedSkills = [...formData.skills];
//       updatedSkills[index] = e.target.value;
//       setFormData({ ...formData, skills: updatedSkills });
//     } else {
//       setFormData({ ...formData, [field]: e.target.value });
//     }
//   };

//   const handleGenerate = () => {
//     setIsResumeGenerated(true);

//     // Generate a shareable link with only firstName
//     const link = `${window.location.origin}?data=${encodeURIComponent(
//       JSON.stringify({ firstName: formData.firstName })
//     )}`;
//     setSharableLink(link);
//   };

//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 50, 10);
//     doc.text(`Email: ${formData.email}`, 10, 20);
//     doc.text(`Phone: ${formData.phone}`, 10, 30);
//     doc.text(`Education: ${formData.institute} - ${formData.degree}`, 10, 40);
//     doc.text(`Work: ${formData.company} - ${formData.jobTitle}`, 10, 50);
//     doc.text("Skills:", 10, 60);
    
//     formData.skills.forEach((skill, index) => {
//       if (skill) doc.text(`- ${skill}`, 15, 70 + index * 10);
//     });
//     doc.save("Resume.pdf");
//   };

//   return (
//     <div className="resume">
//       <div className="resume-holder">
//         {!isResumeGenerated && (
//           <div className="resume-top">
//             <h1>Dynamic Resume Builder</h1>
//           </div>
//         )}

//         {!isResumeGenerated ? (
//           <div className="resume-body">
//             <form className="resume-section1">
//               <legend>Personal Information</legend>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={(e) => handleChange(e, "firstName")}
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={(e) => handleChange(e, "lastName")}
//               />
//               <input
//                 type="text"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleChange(e, "email")}
//               />
//               <input
//                 type="number"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={(e) => handleChange(e, "phone")}
//               />
//             </form>

//             <form className="resume-section2">
//               <legend>Education</legend>
//               <input
//                 type="text"
//                 placeholder="Institute Name"
//                 value={formData.institute}
//                 onChange={(e) => handleChange(e, "institute")}
//               />
//               <input
//                 type="text"
//                 placeholder="Degree"
//                 value={formData.degree}
//                 onChange={(e) => handleChange(e, "degree")}
//               />
//               <input
//                 type="text"
//                 placeholder="Duration"
//                 value={formData.educationDuration}
//                 onChange={(e) => handleChange(e, "educationDuration")}
//               />
//             </form>

//             <form className="resume-section3">
//               <legend>Work Experience</legend>
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 value={formData.company}
//                 onChange={(e) => handleChange(e, "company")}
//               />
//               <input
//                 type="text"
//                 placeholder="Job Title"
//                 value={formData.jobTitle}
//                 onChange={(e) => handleChange(e, "jobTitle")}
//               />
//               <input
//                 type="text"
//                 placeholder="Work Duration"
//                 value={formData.workDuration}
//                 onChange={(e) => handleChange(e, "workDuration")}
//               />
//             </form>

//             <form className="resume-section4">
//               <legend>Skills</legend>
//               {formData.skills.map((skill, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   placeholder={`Skill ${index + 1}`}
//                   value={skill}
//                   onChange={(e) => handleChange(e, "skills", index)}
//                 />
//               ))}
//             </form>

//             <button type="button" onClick={handleGenerate}>
//               Generate Resume
//             </button>
//           </div>
//         ) : (
//           <div className="generated-resume">
//             <h2>
//               {formData.firstName} {formData.lastName}
//             </h2>
//             <p>Email: {formData.email}</p>
//             <p>Phone: {formData.phone}</p>
//             <h3>Education</h3>
//             <p>
//               {formData.institute} - {formData.degree} ({formData.educationDuration})
//             </p>
//             <h3>Work Experience</h3>
//             <p>
//               {formData.company} - {formData.jobTitle} ({formData.workDuration})
//             </p>
//             <h3>Skills</h3>
//             <ul>
//               {formData.skills
//                 .filter((skill) => skill)
//                 .map((skill, index) => (
//                   <li key={index}>{skill}</li>
//                 ))}
//             </ul>
//             <button type="button" onClick={() => setIsResumeGenerated(false)}>
//               Edit Information
//             </button>
//             <button type="button" onClick={handleDownloadPDF}>
//               Download Resume
//             </button>

//             {/* Display the sharable link */}
//             {sharableLink && (
//               <div className="sharable-link">
//                 <h1>Your Shareable Link:</h1>
//                 <a href={sharableLink} target="_blank" rel="noopener noreferrer">
//                   {sharableLink}
//                 </a>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import jsPDF from "jspdf";
import { useState } from "react";
import Link from "next/link";

export default function Resume() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institute: "",
    degree: "",
    educationDuration: "",
    company: "",
    jobTitle: "",
    workDuration: "",
    skills: ["", "", "", "", "", ""], // Array for multiple skills
  });

  const [isResumeGenerated, setIsResumeGenerated] = useState(false);
  const [sharableLink, setSharableLink] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
    if (index !== undefined) {
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = e.target.value;
      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleGenerate = () => {
    setIsResumeGenerated(true);

    // Generate a shareable link with only firstName
    const link = `${window.location.origin}?data=${encodeURIComponent(
      JSON.stringify({ firstName: formData.firstName })
    )}`;
    setSharableLink(link);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont('timesnewroman');
    doc.setFontSize(20);
    doc.text(`${formData.firstName} ${formData.lastName}`, 80, 10,);
    doc.setFontSize(15);
    doc.setFont('sans-serif');
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Phone: ${formData.phone}`, 10, 30);
    doc.text(`Education: ${formData.institute} - ${formData.degree}`, 10, 40);
    doc.text(`Work: ${formData.company} - ${formData.jobTitle}`, 10, 50);
    doc.text("Skills:", 10, 60);
    
    formData.skills.forEach((skill, index) => {
      if (skill) doc.text(`- ${skill}`, 15, 70 + index * 10);
    });
    doc.save("Resume.pdf");
  };

  return (
    <div className="resume">
      <div className="resume-holder">
        {!isResumeGenerated && (
          <div className="resume-top">
            <h1>Dynamic Resume Builder</h1>
          </div>
        )}

        {!isResumeGenerated ? (
          <div className="resume-body">
            <form className="resume-section1">
              <legend>Personal Information</legend>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleChange(e, "firstName")}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange(e, "lastName")}
              />
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <input
                type="number"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange(e, "phone")}
              />
            </form>

            <form className="resume-section2">
              <legend>Education</legend>
              <input
                type="text"
                placeholder="Institute Name"
                value={formData.institute}
                onChange={(e) => handleChange(e, "institute")}
              />
              <input
                type="text"
                placeholder="Degree"
                value={formData.degree}
                onChange={(e) => handleChange(e, "degree")}
              />
              <input
                type="text"
                placeholder="Duration"
                value={formData.educationDuration}
                onChange={(e) => handleChange(e, "educationDuration")}
              />
            </form>

            <form className="resume-section3">
              <legend>Work Experience</legend>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => handleChange(e, "company")}
              />
              <input
                type="text"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={(e) => handleChange(e, "jobTitle")}
              />
              <input
                type="text"
                placeholder="Work Duration"
                value={formData.workDuration}
                onChange={(e) => handleChange(e, "workDuration")}
              />
            </form>

            <form className="resume-section4">
              <legend>Skills</legend>
              {formData.skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => handleChange(e, "skills", index)}
                />
              ))}
            </form>

            <button type="button" onClick={handleGenerate}>
              Generate Resume
            </button>
          </div>
        ) : (
          <div className="generated-resume">
            <h2>
              {formData.firstName} {formData.lastName}
            </h2>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <h3>Education</h3>
            <p>
              {formData.institute} - {formData.degree} ({formData.educationDuration})
            </p>
            <h3>Work Experience</h3>
            <p>
              {formData.company} - {formData.jobTitle} ({formData.workDuration})
            </p>
            <h3>Skills</h3>
            <ul>
              {formData.skills
                .filter((skill) => skill)
                .map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
            </ul>
            <button type="button" onClick={() => setIsResumeGenerated(false)}>
              Edit Information
            </button>
            <button type="button" onClick={handleDownloadPDF}>
              Download Resume
            </button>

            {/* Display the sharable link */}
            {sharableLink && (
              <div className="sharable-link">
                <h1>Your Shareable Link:</h1>
                <a href={sharableLink} target="_blank" rel="noopener noreferrer">
                  {sharableLink}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
