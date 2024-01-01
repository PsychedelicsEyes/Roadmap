# 👋Custom Roadmap


## 🔧Installation
Open a cmd in the project and run 
```bash
npm i
```

## ⚙️Settings
>You can custom the roadmap in ./src/App.js
>You can also add more roadmap. (2,3 maximum)
```
  const roadSteps = [
    { title: "Step 1 Title", description: "Description for Step 1" },
    { title: "Step 2 Title", description: "Description for Step 2" },
    { title: "Step 3 Title", description: "Description for Step 3" },
  ];

  <Roadmap name="roadname" roadmapSteps={roadSteps} totalProgress={0} />
```
>
>You can create your theme color in  ./src/assets/styles/data/theme.scss.
```
$primary-background-color: #0C0A09;
$text-color: white;
$secondary-background-color: #1C1917;
$tiertary-background-color: #292524;
$accent-color: #E11D48;
```
>>


## 🚧Launch the application
>In the project folder
```
npm start
```
## 🎉End of Readme
Made with ❤️
