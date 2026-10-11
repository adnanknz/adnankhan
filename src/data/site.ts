export const SITE = {
  url: "https://adnan.co.nz",
  name: "Adnan Khan",
  careerStart: 2007,
  email: "adnan@adnan.co.nz",
  phone: "+64 27 513 0110",
  phoneTel: "+64275130110",
  city: "Auckland",
  country: "New Zealand",
  address: {
    street: "Ground Floor, 295 Parnell Road",
    suburb: "Parnell",
    city: "Auckland",
    postcode: "1052",
    country: "NZ",
  },
  linkedin: "https://www.linkedin.com/in/adnan2/",
  stitch: "https://stitchtech.co",
  stitchPredict: "https://stitchpredict.com",
  imanz: "https://www.imanz.co.nz/our-agencies/stitch",
  maHub: "https://marketing.org.nz/resource-hub/author/adnan-khan",
  iab: "https://www.iab.org.nz/",
  aboutMe: "https://about.me/adnank",
};

export const yearsExperience = (): number => new Date().getFullYear() - SITE.careerStart;
