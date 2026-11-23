import portfolioData from './portfolio.json';

const resolveBasePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const personalInfo = {
  ...portfolioData.personalInfo,
  resumeUrl: resolveBasePath(portfolioData.personalInfo.resumeUrl),
  profileImage: resolveBasePath(portfolioData.personalInfo.profileImage),
  certificationBadge: resolveBasePath(portfolioData.personalInfo.certificationBadge)
};

export const aboutContent = portfolioData.aboutContent;
export const experience = portfolioData.experience;
export const certifications = portfolioData.certifications;
export const awards = portfolioData.awards;
export const skills = portfolioData.skills;
export const education = portfolioData.education;
export const navLinks = portfolioData.navLinks;
export const services = portfolioData.services || [];

export default portfolioData;
