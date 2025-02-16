import baseConfig, { withOpacity } from "./TailwindBase.js"

const config = {
    presets: [
        baseConfig
    ],
    theme: {
        extend: {
            colors: {
                custom: {
                    color1: "#eed484",
                    color2: "#222221",
                    color21: "#EDEDED",
                    color22: "#727272",
                    color23: "#f9fafb",
                    color24: "#e5e7eb",
                    color25: "#eeeff1",
                    color3: "#002144",
                    color31: "#004b82",
                    color32: "#2e90e5",
                    color4: "#F62E2E",
                    color5: "#065F46",
                }
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0.0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10.0deg)" },
                    "60%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
                bounce: {
                    "0%": { transform: "translateY(0)" },
                    "40%": { transform: "translateY(-20px)" },
                    "60%": { transform: "translateY(-10px)" },
                },
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1) rotate(0deg)",
                    },
                    "25%": {
                        transform: "translate(10px, -10px) scale(1.1) rotate(90deg)",
                    },
                    "50%": {
                        transform: "translate(-20px, 20px) scale(0.9) rotate(180deg)",
                    },
                    "75%": {
                        transform: "translate(0px, 0px) scale(1) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1) rotate(360deg)",
                    },
                },
                shine: {
                    "0%": {
                        visibility: "visible !important",
                        opacity: "0%",
                        "inset-inline-start": "0%"
                    },
                    "50%": {
                        visibility: "visible !important",
                        opacity: "100%",
                    },
                    "100%": {
                        visibility: "visible !important",
                        opacity: "0%",
                        "inset-inline-start": "100%"
                    },
                },
            },
            animation: {
                "wave": "wave 1s linear infinite",
                "bounce": "bounce 2s infinite",
                "ping": "ping 1s linear infinite",
                "blob": "blob 5s infinite",
                "shine": "shine 5s linear infinite",
            }
        }
    }
}

export default config
