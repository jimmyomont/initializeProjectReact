import fs from 'node:fs';

process.argv.slice(2).forEach((projetName) => {

    const src ="./src"
    fs.mkdirSync(src);

    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="./index.js" defer type="module"></script>
    
<title>${projetName}</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>`
    fs.writeFileSync(src + '/index.html', htmlContent);
    
    const jsContent = `import { createRoot } from "react-dom/client";
    
    import   App  from "./components/App";
    
    const domElement = document.getElementById('app');
    const root = createRoot(domElement);
    root.render(<App />);`
    fs.writeFileSync(src + '/index.js', jsContent);
    //crée un dossier components
    const component = "./src/components"
    fs.mkdirSync(component);
    //Avec dossier App 
    const app = "./src/components/App"
    fs.mkdirSync(app);
    const appContent = `
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import './style.scss'
                
    function App(){
        return(
            <>
            <Header />
            <Main />
            <Footer />
            </>
            );
        }
    export default App;`
    fs.writeFileSync(app + '/index.js', appContent);
    const scssContent = `body{
        margin: 0;
        padding: 0;
        border: 0;
    }`
    fs.writeFileSync(app + '/style.scss', scssContent);
    
    const header = "./src/components/Header"
    fs.mkdirSync(header);
    const headerContent = `
import './style.scss';

    function Header() {
        return (
        <div className="header">
        Header
        </div>
        );
    }
    
    export default Header;
    `;
    fs.writeFileSync(header + '/index.js', headerContent);
    const headerScss= `.header{
    }`
    fs.writeFileSync(header + '/style.scss', headerScss);

    const main = "./src/components/Main"
    fs.mkdirSync(main);
    const mainContent = `
    import './style.scss';
    
    function Main() {
        return (
            <div className="main">
            Main
            </div>
            );
        }
        
        export default Main;
        `;
        fs.writeFileSync(main + '/index.js', mainContent);
    const mainScss= `.main{
    }`
    fs.writeFileSync(main + '/style.scss', mainScss);

    const footer = "./src/components/Footer"
    fs.mkdirSync(footer);
    const footerContent = `
import './style.scss';

    function Footer() {
        return (
        <div className="footer">
            Footer
        </div>
        );
    }
    
    export default Footer;
    `;
    fs.writeFileSync(footer + '/index.js', footerContent);
    const footerScss= `.footer{
    }`
    fs.writeFileSync(footer + '/style.scss', footerScss);
});


//commande => node create-components.mjs nomDuDossierACreer