import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import transEN from "./lng/en.json";
import transAR from "./lng/ar.json";

i18next.use(initReactI18next).init({
	resources: {
		English: {
			translation: transEN,
		},
		Arabic: {
			translation: transAR,
		},
	},
	lng: "English",
});

export default i18next;