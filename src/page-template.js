// create the description section 
const generateDescription = descriptionText => {
    if(!descriptionText) {
        return '';
    }

    return `
    <section>
        <h2> ##Description </h2>
        <p>${descriptionText}</p>
    </section>
    `;
};

export default templateData => {
    const { projects, description, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ReadMe</title>
    </head>

    <body>
        <header>
            <h1>${header.name}</h1>
        </header>

        <main>
        ${generateDescription(description)}
        </main>
    </body>
    </html>
    `;
};