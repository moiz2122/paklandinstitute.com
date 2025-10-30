import React from "react";
import EducationHeroComponent from "../../Components/EducationComponents/EducationHeroComponent";
import EducationAbout from "../../Components/EducationComponents/EducationAbout";
import EducationClassSchedule from "../../Components/EducationComponents/EducationClassSchedule";
import EducationPricing from "../../Components/EducationComponents/EducationPricing";
import EduationFaqSection from "../../Components/EducationComponents/EduationFaqSection";
import EducationCourseCurriculm from "../../Components/EducationComponents/EducationCourseCurriculm";
function IslamicEssentials() {
  return (
    <>
      <EducationHeroComponent
        imgeUrl="/Programs/IslamicEssentials.jpg"
        ptext="Embark on a transformative journey through our comprehensive 2-year program, designed in English, to deepen your understanding of important topics in Islam and enrich your spiritual life."
        htextone="Islamic"
        htexttwo="Essentials"
      />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EducationCourseCurriculm />
      <EduationFaqSection />
    </>
  );
}

export default IslamicEssentials;
