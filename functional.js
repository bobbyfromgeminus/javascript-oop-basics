"use strict";

/*
Construct a programming language
Define a function called constructProgrammingLanguage().
1. There is a function called constructProgrammingLanguage() in the functional.js file.
2. The function returns a new object with the following keys: name, isStaticallyTyped, and supportsOOP.
3. The function receives parameters for each key of the constructed object (so name, isStaticallyTyped, and supportsOOP).
4. If any of the keys are not provided as a function parameter or are not the desiredtype,
   the function throws a new error ( name is a string, isStaticallyTyped is aboolean, and supportsOOP is a boolean).
*/

function constructProgrammingLanguage(name, isStaticallyTyped, supportsOOP) {

    if (arguments.length !== 3) {
        throw 'Three parameters must be specified!';
    }

    if (typeof name !== 'string') {
        throw 'Name must be a string.';
    }
    if (typeof isStaticallyTyped !== 'boolean') {
        throw 'IsStaticallyTyped must be a boolean.';
    }
    if (typeof supportsOOP !== 'boolean') {
        throw 'SupportsOOP must be a boolean.';
    }

    this.name = name;
    this.isStaticallyTyped = isStaticallyTyped;
    this.supportsOOP = supportsOOP;
    this.show = function() {
        console.log(`\nPROGRAMMING LANGUAGE\n│ name:\t\t\t${this.name}\n│ isStaticallyTyped:\t${this.isStaticallyTyped}\n│ supportsOOP:\t\t${this.supportsOOP}`);
    }
}


/*
Construct a code editor
Define a function called constructCodeEditor().
1. There is a function called constructCodeEditor() in the functional.js file.
2. The function returns a new object with the following keys: name and supportedLanguages.
3. The supportedLanguages key has a default value that is an empty array.
4. The function receives a parameter with the name of the constructed object.
5. If the name is not provided as a function parameter or is not a string, the function throws a new error.
*/

function constructCodeEditor(name, supportedLanguages=[]) {

    if (arguments.length !== 1) {
        throw 'One parameter must be specified!';
    }

    if (typeof name !== 'string') {
        throw 'Name must be a string.';
    }

    this.name = name;
    this.supportedLanguages = supportedLanguages;
    this.show = function() {
        console.log(`\nCODE EDITOR\n│ name:\t\t\t${this.name}\n│ supportedLanguages:\t${this.supportedLanguages.map(item => item.name).join(', ')}`);
    }
}


/*
Add a programming language to an editor
Define a function called addProgrammingLanguageToEditor().
1. There is a function called addProgrammingLanguageToEditor() in the functional.js file.
2. The function receives two parameters, one is a programming language object, and the other is a code editor.
3. Both parameters must be objects (throws an error otherwise).
4. The code editor object must have a key called supportedLanguages.
5. The function adds the received programming language to the supportedLanguages key/array of the code editor object.
*/

function addProgrammingLanguageToEditor(language, editor) {
    if (typeof language !== 'object') {
        throw 'Language must be an object.';
    }

    if (typeof editor !== 'object') {
        throw 'Editor must be an object.';
    }

    editor.supportedLanguages.push(language);

}


/*
Remove a programming language from an editor
Define a function called removeProgrammingLanguageFromEditor().
1. There is a function called removeProgrammingLanguageFromEditor() in the functional.js file.
2. The function receives two parameters, one is a programming language object, andthe other is a code editor.
3. Both parameters must be objects (throws an error otherwise).
4. The code editor object must have a key called supportedLanguages.
5. The function removes the received programming language from the supportedLanguages key/array of the code editor object.
*/

function removeProgrammingLanguageFromEditor(language, editor) {
    if (typeof language !== 'object') {
        throw 'Language must be an object.';
    }

    if (typeof editor !== 'object') {
        throw 'Editor must be an object';
    }

    const index = editor.supportedLanguages.indexOf(language);
    if (index !== -1) {
        editor.supportedLanguages.splice(index, 1);
    }
}


// Instantiates and other function calls

try {
    // instantiate a Program Language: JavaScript
        let javascript = new constructProgrammingLanguage('JavaScript', false, true);   
        javascript.show();

    // instantiate a Program Language: C#
        let csharp = new constructProgrammingLanguage('C#', true, true);   
        csharp.show();

    // instantiate a Code Editor: Visual Studio Code
        let vscode = new constructCodeEditor('Visual Studio Code');   
        vscode.show();

    // added JavaScript and C# to Visual Studio Code
        addProgrammingLanguageToEditor(javascript, vscode);
        addProgrammingLanguageToEditor(csharp, vscode);
        vscode.show();

    // remove C# from Visual Studio Code
        removeProgrammingLanguageFromEditor(csharp, vscode);
        vscode.show();

    console.log('_______________________________________________\n');

} catch (e) {
    console.log(e);
}