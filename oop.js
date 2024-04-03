"use strict";

/*
Programming language class
Define a class called ProgrammingLanguage.
1. There is a class called ProgrammingLanguage in the oop.js file.
2. The class has a name, an isStaticallyTyped, and a supportsOOP property.
3. The class has a constructor method that receives parameters for each property (so name, isStaticallyTyped, and supportsOOP).
4. If any of the properties are not provided as a constructor parameter or are not thedesired type, 
   the method throws a new error (name is a string, isStaticallyTyped is a boolean, and supportsOOP is a boolean).
*/

class ProgrammingLanguage {
    constructor(name, isStaticallyTyped, supportsOOP) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string.');
        }
        if (typeof isStaticallyTyped !== 'boolean') {
            throw new Error('isStaticallyTyped must be a boolean.');
        }
        if (typeof supportsOOP !== 'boolean') {
            throw new Error('supportsOOP must be a boolean.');
        }

        this.name = name;
        this.isStaticallyTyped = isStaticallyTyped;
        this.supportsOOP = supportsOOP;
    }

    show() {
        console.log(`\nPROGRAMMING LANGUAGE\n│ name:\t\t\t${this.name}\n│ isStaticallyTyped:\t${this.isStaticallyTyped}\n│ supportsOOP:\t\t${this.supportsOOP}`);
    }
}


/*
Code editor class
Define a class called CodeEditor.
1. There is a class called CodeEditor in the oop.js file.
2. The class has two properties called name and supportedLanguages.
3. The class has a constructor method that receives a parameter for the name property.
4. If the name is not provided as a constructor parameter or is not a string, the methodthrows a new error.
5. The supportedLanguages property has an empty array as its default value.
*/

class Circle {
    #radius;
    constructor(value) {
      this.#radius = value;
    }
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  }

class CodeEditor {
    #supportedLanguages;
    constructor(name) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string.');
        }

        this.name = name;
        this.#supportedLanguages = [];
    }

    show() {
        console.log(`\nCODE EDITOR\n│ name:\t\t\t${this.name}\n│ supportedLanguages:\t${this.#supportedLanguages.map(item => item.name).join(', ')}`);
    }

    /*
    Add programming language method
    Define a method called addProgrammingLanguage() in the CodeEditor class.
    1. There is a method called addProgrammingLanguage() in the CodeEditor class.
    2. The method receives one parameter which is a programming language object.
    3. The passed programming language must be an instance of the ProgrammingLanguage class (throws an error otherwise).
    4. The method adds the received programming language to the supportedLanguages property/array of the class.
    */

    addProgrammingLanguage(language) {
        if (!(language instanceof ProgrammingLanguage)) {
            throw new Error('Passed language must be an instance of ProgrammingLanguage class.');
        }

        this.#supportedLanguages.push(language);
    }

    /*
    Remove programming language method
    Define a method called removeProgrammingLanguage() in the CodeEditor class.
    1. There is a method called removeProgrammingLanguage() in the CodeEditor class.
    2. The method receives one parameter which is a programming language object.
    3. The passed programming language must be an instance of the ProgrammingLanguage class (throws an error otherwise).
    4. The method removes the received programming language from the supportedLanguages property/array of the class.
    */

    removeProgrammingLanguage(language) {
        if (!(language instanceof ProgrammingLanguage)) {
            throw new Error('Passed language must be an instance of ProgrammingLanguage class.');
        }

        const index = this.#supportedLanguages.indexOf(language);
        if (index !== -1) {
            this.#supportedLanguages.splice(index, 1);
        }
    }


}




let javascript = new ProgrammingLanguage('JavaScript', false, true);
javascript.show();

let csharp = new ProgrammingLanguage('C#', true, true);
csharp.show();

let vscode = new CodeEditor('Visual Studio Code');   
vscode.show();

vscode.addProgrammingLanguage(javascript);
vscode.show();

vscode.addProgrammingLanguage(csharp);
vscode.show();

vscode.removeProgrammingLanguage(javascript);
vscode.show();

javascript.show();

console.log(JSON.stringify(vscode.supportedLanguages));

/*
OPTIONAL TASK:
Hide supported languages
Hide the supportedLanguages property of the CodeEditor class.
1. The supportedLanguages property of the CodeEditor class is not available from outside of the object.
*/