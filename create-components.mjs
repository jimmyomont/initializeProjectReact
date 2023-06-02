import fs from 'node:fs';

process.argv.slice(2).forEach(componentName => {

    const componentPath = './src/components/' + componentName;
    const loweredName = componentName.toLowerCase();

    const componentContent = `import './style.scss';

function ${componentName}() {
  return (
    <div className="${loweredName}">
      ${componentName}
    </div>
  );
}

export default ${componentName};
`;

    const styleContent = `.${loweredName} {}`;

    fs.mkdirSync(componentPath);
    fs.writeFileSync(componentPath + '/index.js', componentContent);
    fs.writeFileSync(componentPath + '/style.scss', styleContent);

});
//commande => node create-components.mjs nomDuDossierACreer
