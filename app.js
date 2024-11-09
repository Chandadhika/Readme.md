// (step: 1)
const fs = require('fs');
const inquirer = require('inquirer');


// step 2: readmeFile Function to prompt user for README details
const readmeFile = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please, enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title', 
            message: 'What is the title of your project?',
            
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How to use your project?'
        },
        {
            type: 'input',
            name: 'License',
            message: 'What is Your license?'
        },
       
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'date',
            message: 'please enter your date of operation!'
        },
    
    ]);
};

// step 3: Function to format the README content
const ReadMeContent = (data) => {
    return `
${data.name}

# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.License}

## language
${data.languages}

## github 
${data.github}

### date
${data.date}
    `;
};

// const ReadMeContent = (data) => {
//     let readmeContent = '';
  
//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         readmeContent += `\n## ${key.toUpperCase()}\n${data[key]}\n`;
//       }
//     }
  
//     return readmeContent;
// };

// step 4: Run the readmeFile function and generate README file
readmeFile()
  .then(readmeData => {
    // pageContent for ReadMeContent <69>
    const textContent = ReadMeContent(readmeData);

    // Write content to README.md file
    fs.writeFile('./README.md', textContent, err => {
      if (err) throw new Error(err);

      console.log('README file created! Check out README.md in this directory to see it!');

      // This operator is frequently used as a shortcut for the if statement.
    //   err ? console.log(err) : console.log('README file created!');
      console.log('Thanks!')
    });
  });