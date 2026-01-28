/**
 * Swift Fit Events - Constants and Configuration
 */

export const CONTACT_INFO = {
    phone: "(512) 660-7746",
    email: {
        booking: "booking@swiftfitevents.com",
        info: "info@swiftfitevents.com",
    },
    address: {
        venue1: "918 Congress Ave, Austin, TX 78701",
        venue2: "920 Congress Ave, Austin, TX 78701",
    },
    social: {
        instagram: "https://instagram.com/swiftfitevents",
        facebook: "https://facebook.com/swiftfitevents",
        youtube: "https://youtube.com/@swiftfitevents",
    },
} as const;

export const EXTERNAL_LINKS = {
    eventbrite: {
        dogJog: "#", // TODO: Add actual Eventbrite URL
    },
    catalog: {
        pdf: "#", // TODO: Add actual PDF URL
    },
    goodpain: {
        instagram: "https://instagram.com/goodpainathletics",
    },
} as const;

export const LOCATIONS_SERVED = [
    "Austin",
    "Dallas",
    "Houston",
    "San Antonio",
    "Surrounding Areas",
] as const;
