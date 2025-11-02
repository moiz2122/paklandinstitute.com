import React from "react";
import EducationHeroComponent from "../../Components/EducationComponents/EducationHeroComponent";
import EducationAbout from "../../Components/EducationComponents/EducationAbout";
import EducationClassSchedule from "../../Components/EducationComponents/EducationClassSchedule";
import EducationPricing from "../../Components/EducationComponents/EducationPricing";
import EduationFaqSection from "../../Components/EducationComponents/EduationFaqSection";
import EducationCourseCurriculm from "../../Components/EducationComponents/EducationCourseCurriculm";
function ArabicMastery() {
  return (
    <>
      <EducationHeroComponent
        imgeUrl="/Programs/ArabicMastery.jpg"
        ptext="Embark on a transformative 2-year journey to master the Arabic language and deepen your understanding of Islamic sciences. Our comprehensive program prepares you for Alimiyya."
        htextone="ARABIC"
        htexttwo="MASTERY"
      />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EducationCourseCurriculm />
      <EduationFaqSection />
    </>
  );
}

export default ArabicMastery;
