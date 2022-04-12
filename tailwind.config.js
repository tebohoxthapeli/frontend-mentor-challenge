const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/index.html"],
    theme: {
        fontWeight: {
            "400": "500",
            "700": "700",
            "900": "900",
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
        fontSize: {
            "300": ["0.875rem", { lineHeight: "1.25rem" }],
            "400": ["1rem", { lineHeight: "1.6rem" }],
            "700": ["1.75rem", { lineHeight: "1.1rem" }],
        },
        colors: {
            neutral: {
                "100": "hsl(0, 0%, 100%)",
                "200": "hsl(225, 100%, 98%)", // very-pale-blue
                "400": "hsl(224, 23%, 55%)", // desaturated-blue
                "800": "hsl(223, 47%, 23%)", // dark-blue
            },
            primary: {
                "200": "hsl(225, 100%, 94%)", // pale-blue
                "300": "hsla(245, 83%, 68%, 1)",
                "400": "hsl(245, 75%, 52%)", // bright-blue
            },
        },
    },
    plugins: [
        plugin(({ addUtilities, addVariant }) => {
            addUtilities({
                ".grid-flow": {
                    "display": "grid",
                    "gap": "1rem",
                },
            });
            addVariant("hocus", ["&:hover", "&:focus"]);
        }),
    ],
};
