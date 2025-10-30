import React from "react";
import EducationHeroComponent from "../../Components/EducationComponents/EducationHeroComponent";
import EducationAbout from "../../Components/EducationComponents/EducationAbout";
import EducationClassSchedule from "../../Components/EducationComponents/EducationClassSchedule";
import EducationPricing from "../../Components/EducationComponents/EducationPricing";
import EduationFaqSection from "../../Components/EducationComponents/EduationFaqSection";

function QuranAcademy() {
  return (
    <>
      <EducationHeroComponent
        imgeUrl="/Programs/QuranAcademy.jpg"
        ptext="Embark on a transformative journey to memorize the entire Quran. Our comprehensive 3-year program is designed for dedicated students who have completed Noorani Qaidah and basic Tajweed."
        htextone="Quran"
        htexttwo="Academy"
      />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EduationFaqSection />
    </>
  );
}

export default QuranAcademy;
