const fs=require('fs')

if(process.argv.length < 3) { 
  console.log("usage: day1.ts <input>")
}



contents = fs.readFileSync(process.argv[2],'utf8');
values = contents.split('\n').map((x) => { return parseInt(x, 10)}).filter(Number)

pairs=[]
for(let i=0; i<values.length-1; i++) {
  pairs.push([values[i], values[i+1]])
}

result = pairs.map((e) => e[0] < e[1] ? 1:0).reduce((a,m) => a+m, 0)
console.log(result)


// read file from input
// for each line, make number
// do a loop for each element -1 comparing last to first
// output sum
