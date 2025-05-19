#!/usr/bin/env node
const fs = require('fs');
const inpath = "./output/cases/top_plate.jscad";
const outpath = "../3d-files/"
const screwtop_radius = 1.95;
const screwtop_height = 0.8;
const screw_radius = 1.1;

const jscad_data = fs.readFileSync(inpath, 'utf8');
const lines = jscad_data.split('\n');

cylinders = [];

lines.forEach((line) => {
  if (line.includes("CAG.circle")) {
    let xy = line.match("center\":\\[(.*)\]")[1].split(",");
    let x = xy[0];
    let y = xy[1];
    let cyl = "new CSG.cylinder({" +
      "  start: [" + x + "," + y + ","+ (2 - screwtop_height) +"]," +
      "  end: [" + x + "," + y + "," + 2 + "]," +
      "  radiusStart: " + screw_radius + "," +
      "  radiusEnd: " + screwtop_radius + "" +
      "})";
    cylinders.push(cyl);
  }
});

let newlines = [];
lines.forEach((line) => {
  if (line.includes(")).extrude({ offset: [0, 0, 2] }")) {
    let str = "";
    str += ")).extrude({ offset: [0, 0, 2] }).subtract(\n";
    let first = true;
    cylinders.forEach((cyl) => {
      let unionstr = first ? ".union(\n" : ").union(\n";
      first = false;
      str += cyl + unionstr;
    });
    str = str.slice(0, -8) + "\n);";
    newlines.push(str);
  } else {
    newlines.push(line);
  }
});

const outdata = newlines.join('\n');

fs.writeFileSync(outpath + "top_plate.jscad", outdata);
fs.copyFileSync("./output/cases/bottom_plate.jscad", outpath + "bottom_plate.jscad");

