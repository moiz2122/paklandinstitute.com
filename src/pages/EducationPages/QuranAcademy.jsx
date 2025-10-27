import React from "react";
import EducationHeroComponent from "../../Components/EducationComponents/EducationHeroComponent";
import EducationAbout from "../../Components/EducationComponents/EducationAbout";
import EducationClassSchedule from "../../Components/EducationComponents/EducationClassSchedule";
import EducationPricing from "../../Components/EducationComponents/EducationPricing";
import EduationFaqSection from "../../Components/EducationComponents/EduationFaqSection";

function QuranAcademy() {
  return (
    <>
      <EducationHeroComponent imgeUrl="/Programs/QuranAcademy.jpg" />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EduationFaqSection />
    </>
  );
}

export default QuranAcademy;
