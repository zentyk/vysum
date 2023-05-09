const fs = require('fs');
const sass = require('sass');

console.log('⏱️ Building vysum.css');
sass.compileAsync('./src/app.scss',{
    sourceMap:false,
    outputStyle : 'compressed',
})
    .then((result)=>{
        fs.writeFileSync('./dist/vysum.css',result.css);
        console.log('✅ vysum.css created');
    })
    .catch((err)=>{
        console.log("⛔ ",err);
        process.exit(1);
    });