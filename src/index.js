import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import resumeLngDe from "./translations/de/resume_lng.json";
import resumeLngEn from "./translations/en/resume_lng.json";

import resumeDataDe from './translations/de/resume_data.json';
import resumeDataEn from './translations/en/resume_data.json';

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            resume: resumeLngEn,
            cv: resumeDataEn
        },
        de: {
            resume: resumeLngDe,
            cv: resumeDataDe
        },
    },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
		<App/>
	</I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
