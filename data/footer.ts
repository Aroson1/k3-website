import { IFooter } from "@/types";

export const footerData: IFooter[] = [
    {
        title: "Contest",
        links: [
            { name: "Home", href: "/" },
            { name: "Contest Rounds", href: "#features" },
            { name: "Sponsorship", href: "#pricing" },
            { name: "Register", href: "#contact" },
        ]
    },
    {
        title: "About",
        links: [
            { name: "K³", href: "/" },
            { name: "Coders' Club", href: "/" },
            { name: "IIIT Kottayam", href: "https://iiitkottayam.ac.in" },
            { name: "Our Team", href: "#testimonials" },
        ]
    },
    {
        title: "Contact",
        links: [
            { name: "Email Us", href: "mailto:vibhaas23bcs37@iiitkottayam.ac.in" },
            { name: "Codeforces", href: "https://codeforces.com" },
        ]
    }
];