/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/comingSoon", destination: "/pages/comingSoon" },
      { source: "/services", destination: "/pages/services" },
      { source: "/contact", destination: "/pages/contactUs" },
      { source: "/about", destination: "/pages/aboutUs" },
      { source: "/who-we", destination: "/pages/whoWeAre" },
      { source: "/partners", destination: "/pages/partners" },
      { source: "/timeline", destination: "/pages/timeline" },
      { source: "/leader", destination: "/pages/leadershipTeam" },
      { source: "/partner-with-us", destination: "/pages/partnerWithUs" },
      { source: "/career", destination: "/pages/careers" },
      { source: "/award", destination: "/pages/award" },
      { source: "/news", destination: "/pages/news&press" },
      { source: "/privacy", destination: "/pages/privacy" },
      { source: "/events", destination: "/pages/events" },
      { source: "/singleEvent", destination: "/pages/singleEvent" },
      { source: "/blogs", destination: "/pages/blogs" },
      { source: "/singleBlog", destination: "/pages/singleBlog" },
      { source: "/personalizedUniversity", destination: "/pages/ServicesPages/personalizedUniversity" },
      { source: "/applicationAssistance", destination: "/pages/ServicesPages/applicationAssistance" },
      { source: "/aidGuidance", destination: "/pages/ServicesPages/aidGuidance" },
      { source: "/immigrationSupport", destination: "/pages/ServicesPages/immigrationSupport" },
      { source: "/travelAssistance", destination: "/pages/ServicesPages/travelAssistance" },
      { source: "/postGraduationAid", destination: "/pages/ServicesPages/postGraduationAid" },
      { source: "/admissionProcess", destination: "/pages/ServicesPages/admissionProcess" },
      { source: "/studentGuidance", destination: "/pages/ServicesPages/studentGuidance" },
      { source: "/globalNetwork", destination: "/pages/ServicesPages/globalNetwork" },
      { source: "/studentSuccess", destination: "/pages/ServicesPages/studentSuccess" },
      { source: "/recruitmentSupport", destination: "/pages/ServicesPages/recruitmentSupport" },
      { source: "/collaboration", destination: "/pages/ServicesPages/collaboration" },
      { source: "/logIn", destination: "/pages/logIn" },
      { source: "/registration", destination: "/pages/registration" },
      { source: "/UK", destination: "/pages/studyDestinations/UK" },
      { source: "/USA", destination: "/pages/studyDestinations/USA" },
      { source: "/Australia", destination: "/pages/studyDestinations/Australia" },
      { source: "/Canada", destination: "/pages/studyDestinations/Canada" },
      { source: "/Germany", destination: "/pages/studyDestinations/Germany" },
      { source: "/New-Zealand", destination: "/pages/studyDestinations/NewZealand" },
      { source: "/UAE", destination: "/pages/studyDestinations/UAE" },
      { source: "/Georgia", destination: "/pages/studyDestinations/Georgia" },
      { source: "/Finland", destination: "/pages/studyDestinations/Finland" },
      { source: "/Cyprus", destination: "/pages/studyDestinations/Cyprus" },
      { source: "/Switzerland", destination: "/pages/studyDestinations/Switzerland" },
      { source: "/France", destination: "/pages/studyDestinations/France" },
      { source: "/West-Indies", destination: "/pages/studyDestinations/West-Indies" },
      { source: "/singleUniversity/:Name", destination: "/pages/singleUniversity/:Name" },
    ];
  },

  images: {
    domains: ["i.ibb.co", "i.ibb.co.com"],
    unoptimized: true,
  },

};

// Corrected export syntax
export default nextConfig;
