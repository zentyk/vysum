const fs = require('fs');
const sass = require('sass');

sass.compileAsync('./src/app.scss',{
    sourceMap:false,
    outputStyle : 'compressed',
})
    .then((result)=>{
        fs.writeFileSync('./dist/vysum.css',result.css);
    })
    .catch((err)=>{
        console.log(err);
        process.exit(1);
    });