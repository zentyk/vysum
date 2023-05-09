const fs = require('fs');
const sass = require('sass');

sass.compileAsync('./samples/app.scss',{
    sourceMap:false,
    outputStyle : 'compressed',
})
    .then((result)=>{
        fs.writeFileSync('./dist/samples/app.css',result.css);
        console.log('vysum.css created');
    })
    .catch((err)=>{
        console.log(err);
        process.exit(1);
    });