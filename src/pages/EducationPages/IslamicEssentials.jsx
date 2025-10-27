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
      <EducationHeroComponent imgeUrl="/Programs/IslamicEssentials.jpg" />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EducationCourseCurriculm />
      <EduationFaqSection />
    </>
  );
}

export default IslamicEssentials;
