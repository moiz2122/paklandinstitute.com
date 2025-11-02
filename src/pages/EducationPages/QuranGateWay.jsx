import React from "react";
import EducationHeroComponent from "../../Components/EducationComponents/EducationHeroComponent";
import EducationAbout from "../../Components/EducationComponents/EducationAbout";
import EducationClassSchedule from "../../Components/EducationComponents/EducationClassSchedule";
import EducationPricing from "../../Components/EducationComponents/EducationPricing";
import EduationFaqSection from "../../Components/EducationComponents/EduationFaqSection";
// import EducationCourseCurriculm from "../../Components/EducationComponents/EducationCourseCurriculm";
function QuranGateWay() {
  return (
    <>
      <EducationHeroComponent
        imgeUrl="/Programs/QuranGateway.jpg"
        ptext="Embark on a transformative journey through our comprehensive Quran Gateway program. Master Tajweed, perfect your Makhraj, and memorize the last two Juz of the Quran."
        htextone="QURAN"
        htexttwo="GATEWAY"
      />
      <EducationAbout />
      <EducationClassSchedule />
      <EducationPricing />
      <EduationFaqSection />
      {/* <EducationCourseCurriculm /> */}
    </>
  );
}

export default QuranGateWay;
