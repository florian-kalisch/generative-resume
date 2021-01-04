# Generative Resume

## Project motivation
After discovering the awesome JSONResume project on GitHub, which defines a data format for a resume, I was looking for a way to generate an online resume / portfolio from it. After not finding a satisfactory solution, I developed one using React.js.

My main criteria were:
- a clear and not overloaded responsive design
- a good looking print design
- multilingualism
- a high level of detail in the competence levels
- usage of a modern web framework so that a more detailed personal web presence can be built later on

## Defining the JSON
You can quickly export your LinkedIn Profile with this [JSON Resume Exporter](https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec)

You can take my data file as an example (src/translations/en/resume_data.json).

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). After defining a translated resume file for every defined language under src/translations/.../resume_data.json where ... matches the code attribute

```javascript
{
	"language": "English",
	"fluency": "fluent",
	"code": "en"
}
```

You can view / build the app as described in the following sections.

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Limitations
The following limitations exist and heven't been fixed / developed yet:
* in print / pdf preview under Safari bullet points aren't displayed correctly and the sidebar isn't grey (this should fix someone with a mac)
* in print / pdf preview with multiple pages the page hight needs manual adjustment
* only the JSONResume schema subset I need has been developed
* in profiles.fa only the following fontawesome icons are supported: linkedin, twitter, globe, kaggle, github
* i18n translations are only provided for german (code de) and english (code en) (feel free to provide some more)


## Open source projects used
For the main HTML structure and print-css design I used html-resume from [Min-Zhong "John" Lu](https://github.com/mnjul/html-resume). I din't fork it, because of the refactoring into React.js and the dynamic JSONResume functionality which is way more than the original intention of a neat, print optimized one page resume.

The main file structure is based on the [JSONResume Schema](https://github.com/jsonresume/resume-schema), but with some additions:
* added attribut fa (fontawesome) to profile objects so that I can handle them dynamically
* added skillEvaluationSchemaReference
* added levelNumeric to skills objects
* added basics.photo that holds the image name of the profile picture
* added basics.banner that holds the image name of a banner picture
* added the code attribute, [ISO-639-1-Codes](https://de.wikipedia.org/wiki/Liste_der_ISO-639-1-Codes), to languages 