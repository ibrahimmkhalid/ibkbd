function top_plate_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[87.475,-159.7927552],[87.475,-81.2]]).appendPoint([126.05,-81.2]).appendPoint([126.05,-59.975]).appendPoint([204.858541,-59.975]).appendPoint([209.4467794,-78.3774189]).appendPoint([219.1497366,-75.9581999]).appendPoint([215.1646773,-59.975]).appendPoint([223.742412,-59.975]).appendArc([226.6544685,-62.2539404],{"radius":3,"clockwise":true,"large":false}).appendPoint([256.9606516,-184.6478683]).appendArc([257.0485951,-185.3689279],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.0485951,-205.2969636]).appendArc([254.0485951,-208.2969636],{"radius":3,"clockwise":true,"large":false}).appendPoint([234.1531662,-208.2969636]).appendArc([233.2473804,-208.1569552],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.5692141,-162.6527468]).appendArc([87.475,-159.7927552],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[221.3,-66],"radius":1.1})
.union(
    CAG.circle({"center":[201.7,-66],"radius":1.1})
).union(
    CAG.circle({"center":[131,-66],"radius":1.1})
).union(
    CAG.circle({"center":[166.475,-152.525],"radius":1.1})
).union(
    CAG.circle({"center":[231.9522666,-188.0477839],"radius":1.1})
).union(
    CAG.circle({"center":[223.525,-124.475],"radius":1.1})
).union(
    CAG.circle({"center":[109.525,-83.475],"radius":1.1})
).union(
    CAG.circle({"center":[109.525,-140.475],"radius":1.1})
).union(
    new CSG.Path2D([[237.5735951,-188.8219636],[237.5735951,-202.7219636]]).appendPoint([251.4735951,-202.7219636]).appendPoint([251.4735951,-188.8219636]).appendPoint([237.5735951,-188.8219636]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.05,-169],[186.95,-169]]).appendPoint([186.95,-155.1]).appendPoint([173.05,-155.1]).appendPoint([173.05,-169]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.05,-102.95],[220.95,-102.95]]).appendPoint([220.95,-89.05]).appendPoint([207.05,-89.05]).appendPoint([207.05,-102.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.05,-121.95],[220.95,-121.95]]).appendPoint([220.95,-108.05]).appendPoint([207.05,-108.05]).appendPoint([207.05,-121.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[207.05,-140.95],[220.95,-140.95]]).appendPoint([220.95,-127.05]).appendPoint([207.05,-127.05]).appendPoint([207.05,-140.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.05,-92.95],[201.95,-92.95]]).appendPoint([201.95,-79.05]).appendPoint([188.05,-79.05]).appendPoint([188.05,-92.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.05,-111.95],[201.95,-111.95]]).appendPoint([201.95,-98.05]).appendPoint([188.05,-98.05]).appendPoint([188.05,-111.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.05,-130.95],[201.95,-130.95]]).appendPoint([201.95,-117.05]).appendPoint([188.05,-117.05]).appendPoint([188.05,-130.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.05,-149.95],[201.95,-149.95]]).appendPoint([201.95,-136.05]).appendPoint([188.05,-136.05]).appendPoint([188.05,-149.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.05,-92.95],[182.95,-92.95]]).appendPoint([182.95,-79.05]).appendPoint([169.05,-79.05]).appendPoint([169.05,-92.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.05,-111.95],[182.95,-111.95]]).appendPoint([182.95,-98.05]).appendPoint([169.05,-98.05]).appendPoint([169.05,-111.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.05,-130.95],[182.95,-130.95]]).appendPoint([182.95,-117.05]).appendPoint([169.05,-117.05]).appendPoint([169.05,-130.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[169.05,-149.95],[182.95,-149.95]]).appendPoint([182.95,-136.05]).appendPoint([169.05,-136.05]).appendPoint([169.05,-149.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.05,-85.95],[163.95,-85.95]]).appendPoint([163.95,-72.05]).appendPoint([150.05,-72.05]).appendPoint([150.05,-85.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.05,-104.95],[163.95,-104.95]]).appendPoint([163.95,-91.05]).appendPoint([150.05,-91.05]).appendPoint([150.05,-104.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.05,-123.95],[163.95,-123.95]]).appendPoint([163.95,-110.05]).appendPoint([150.05,-110.05]).appendPoint([150.05,-123.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.05,-142.95],[163.95,-142.95]]).appendPoint([163.95,-129.05]).appendPoint([150.05,-129.05]).appendPoint([150.05,-142.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.05,-92.95],[144.95,-92.95]]).appendPoint([144.95,-79.05]).appendPoint([131.05,-79.05]).appendPoint([131.05,-92.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.05,-111.95],[144.95,-111.95]]).appendPoint([144.95,-98.05]).appendPoint([131.05,-98.05]).appendPoint([131.05,-111.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.05,-130.95],[144.95,-130.95]]).appendPoint([144.95,-117.05]).appendPoint([131.05,-117.05]).appendPoint([131.05,-130.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[131.05,-149.95],[144.95,-149.95]]).appendPoint([144.95,-136.05]).appendPoint([131.05,-136.05]).appendPoint([131.05,-149.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-99.95],[125.95,-99.95]]).appendPoint([125.95,-86.05]).appendPoint([112.05,-86.05]).appendPoint([112.05,-99.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-118.95],[125.95,-118.95]]).appendPoint([125.95,-105.05]).appendPoint([112.05,-105.05]).appendPoint([112.05,-118.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-137.95],[125.95,-137.95]]).appendPoint([125.95,-124.05]).appendPoint([112.05,-124.05]).appendPoint([112.05,-137.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[112.05,-156.95],[125.95,-156.95]]).appendPoint([125.95,-143.05]).appendPoint([112.05,-143.05]).appendPoint([112.05,-156.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.05,-99.95],[106.95,-99.95]]).appendPoint([106.95,-86.05]).appendPoint([93.05,-86.05]).appendPoint([93.05,-99.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.05,-118.95],[106.95,-118.95]]).appendPoint([106.95,-105.05]).appendPoint([93.05,-105.05]).appendPoint([93.05,-118.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.05,-137.95],[106.95,-137.95]]).appendPoint([106.95,-124.05]).appendPoint([93.05,-124.05]).appendPoint([93.05,-137.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.05,-156.95],[106.95,-156.95]]).appendPoint([106.95,-143.05]).appendPoint([93.05,-143.05]).appendPoint([93.05,-156.95]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.5047185,-159.3013957],[224.5424717,-166.2513957]]).appendPoint([231.4924717,-154.2136425]).appendPoint([219.4547185,-147.2636425]).appendPoint([212.5047185,-159.3013957]).close().innerToCAG()
).union(
    new CSG.Path2D([[225.9447819,-172.4925153],[232.8947819,-184.5302685]]).appendPoint([244.9325351,-177.5802685]).appendPoint([237.9825351,-165.5425153]).appendPoint([225.9447819,-172.4925153]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.446998,-182.0175153],[216.396998,-194.0552685]]).appendPoint([228.4347512,-187.1052685]).appendPoint([221.4847512,-175.0675153]).appendPoint([209.446998,-182.0175153]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.9925154,-170.6324846],[205.0302686,-177.5824846]]).appendPoint([211.9802686,-165.5447314]).appendPoint([199.9425154,-158.5947314]).appendPoint([192.9925154,-170.6324846]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2] }).subtract(
new CSG.cylinder({start:[221.3,-66,1.2],end:[221.3,-66,2],radiusStart:1.1,radiusEnd:1.95}).union(
new CSG.cylinder({start:[201.7,-66,1.2],end:[201.7,-66,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[131,-66,1.2],end:[131,-66,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[166.475,-152.525,1.2],end:[166.475,-152.525,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[231.9522666,-188.0477839,1.2],end:[231.9522666,-188.0477839,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[223.525,-124.475,1.2],end:[223.525,-124.475,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[109.525,-83.475,1.2],end:[109.525,-83.475,2],radiusStart:1.1,radiusEnd:1.95})).union(
new CSG.cylinder({start:[109.525,-140.475,1.2],end:[109.525,-140.475,2],radiusStart:1.1,radiusEnd:1.95}))
);
}


function _keys_clip_extrude_0_8_outline_fn(){
    return new CSG.Path2D([[211.9583084,-159.4478058],[224.6888818,-166.7978058]]).appendPoint([232.0388818,-154.0672324]).appendPoint([219.3083084,-146.7172324]).appendPoint([211.9583084,-159.4478058]).close().innerToCAG()
.union(
    new CSG.Path2D([[225.3983718,-172.3461052],[232.7483718,-185.0766786]]).appendPoint([245.4789452,-177.7266786]).appendPoint([238.1289452,-164.9961052]).appendPoint([225.3983718,-172.3461052]).close().innerToCAG()
).union(
    new CSG.Path2D([[208.9005879,-181.8711052],[216.2505879,-194.6016786]]).appendPoint([228.9811613,-187.2516786]).appendPoint([221.6311613,-174.5211052]).appendPoint([208.9005879,-181.8711052]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.4461053,-170.7788947],[205.1766787,-178.1288947]]).appendPoint([212.5266787,-165.3983213]).appendPoint([199.7961053,-158.0483213]).appendPoint([192.4461053,-170.7788947]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.1735951,-188.4219636],[237.1735951,-203.1219636]]).appendPoint([251.8735951,-203.1219636]).appendPoint([251.8735951,-188.4219636]).appendPoint([237.1735951,-188.4219636]).close().innerToCAG()
).union(
    new CSG.Path2D([[172.65,-169.4],[187.35,-169.4]]).appendPoint([187.35,-154.7]).appendPoint([172.65,-154.7]).appendPoint([172.65,-169.4]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.65,-150.35],[202.35,-150.35]]).appendPoint([202.35,-135.65]).appendPoint([187.65,-135.65]).appendPoint([187.65,-150.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.65,-150.35],[183.35,-150.35]]).appendPoint([183.35,-135.65]).appendPoint([168.65,-135.65]).appendPoint([168.65,-150.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.65,-143.35],[164.35,-143.35]]).appendPoint([164.35,-128.65]).appendPoint([149.65,-128.65]).appendPoint([149.65,-143.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.65,-150.35],[145.35,-150.35]]).appendPoint([145.35,-135.65]).appendPoint([130.65,-135.65]).appendPoint([130.65,-150.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[206.65,-103.35],[221.35,-103.35]]).appendPoint([221.35,-88.65]).appendPoint([206.65,-88.65]).appendPoint([206.65,-103.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[206.65,-122.35],[221.35,-122.35]]).appendPoint([221.35,-107.65]).appendPoint([206.65,-107.65]).appendPoint([206.65,-122.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[206.65,-141.35],[221.35,-141.35]]).appendPoint([221.35,-126.65]).appendPoint([206.65,-126.65]).appendPoint([206.65,-141.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.65,-93.35],[202.35,-93.35]]).appendPoint([202.35,-78.65]).appendPoint([187.65,-78.65]).appendPoint([187.65,-93.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.65,-112.35],[202.35,-112.35]]).appendPoint([202.35,-97.65]).appendPoint([187.65,-97.65]).appendPoint([187.65,-112.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.65,-131.35],[202.35,-131.35]]).appendPoint([202.35,-116.65]).appendPoint([187.65,-116.65]).appendPoint([187.65,-131.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.65,-93.35],[183.35,-93.35]]).appendPoint([183.35,-78.65]).appendPoint([168.65,-78.65]).appendPoint([168.65,-93.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.65,-112.35],[183.35,-112.35]]).appendPoint([183.35,-97.65]).appendPoint([168.65,-97.65]).appendPoint([168.65,-112.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.65,-131.35],[183.35,-131.35]]).appendPoint([183.35,-116.65]).appendPoint([168.65,-116.65]).appendPoint([168.65,-131.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.65,-86.35],[164.35,-86.35]]).appendPoint([164.35,-71.65]).appendPoint([149.65,-71.65]).appendPoint([149.65,-86.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.65,-105.35],[164.35,-105.35]]).appendPoint([164.35,-90.65]).appendPoint([149.65,-90.65]).appendPoint([149.65,-105.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.65,-124.35],[164.35,-124.35]]).appendPoint([164.35,-109.65]).appendPoint([149.65,-109.65]).appendPoint([149.65,-124.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.65,-93.35],[145.35,-93.35]]).appendPoint([145.35,-78.65]).appendPoint([130.65,-78.65]).appendPoint([130.65,-93.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.65,-112.35],[145.35,-112.35]]).appendPoint([145.35,-97.65]).appendPoint([130.65,-97.65]).appendPoint([130.65,-112.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.65,-131.35],[145.35,-131.35]]).appendPoint([145.35,-116.65]).appendPoint([130.65,-116.65]).appendPoint([130.65,-131.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.65,-157.35],[126.35,-157.35]]).appendPoint([126.35,-142.65]).appendPoint([111.65,-142.65]).appendPoint([111.65,-157.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.65,-157.35],[107.35,-157.35]]).appendPoint([107.35,-142.65]).appendPoint([92.65,-142.65]).appendPoint([92.65,-157.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.65,-100.35],[126.35,-100.35]]).appendPoint([126.35,-85.65]).appendPoint([111.65,-85.65]).appendPoint([111.65,-100.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.65,-119.35],[126.35,-119.35]]).appendPoint([126.35,-104.65]).appendPoint([111.65,-104.65]).appendPoint([111.65,-119.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[111.65,-138.35],[126.35,-138.35]]).appendPoint([126.35,-123.65]).appendPoint([111.65,-123.65]).appendPoint([111.65,-138.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.65,-100.35],[107.35,-100.35]]).appendPoint([107.35,-85.65]).appendPoint([92.65,-85.65]).appendPoint([92.65,-100.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.65,-119.35],[107.35,-119.35]]).appendPoint([107.35,-104.65]).appendPoint([92.65,-104.65]).appendPoint([92.65,-119.35]).close().innerToCAG()
).union(
    new CSG.Path2D([[92.65,-138.35],[107.35,-138.35]]).appendPoint([107.35,-123.65]).appendPoint([92.65,-123.65]).appendPoint([92.65,-138.35]).close().innerToCAG()
).extrude({ offset: [0, 0, 0.8] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = top_plate_outline_extrude_2_outline_fn();

                // make sure that rotations are relative
                let top_plate__part_0_bounds = top_plate__part_0.getBounds();
                let top_plate__part_0_x = top_plate__part_0_bounds[0].x + (top_plate__part_0_bounds[1].x - top_plate__part_0_bounds[0].x) / 2
                let top_plate__part_0_y = top_plate__part_0_bounds[0].y + (top_plate__part_0_bounds[1].y - top_plate__part_0_bounds[0].y) / 2
                top_plate__part_0 = translate([-top_plate__part_0_x, -top_plate__part_0_y, 0], top_plate__part_0);
                top_plate__part_0 = rotate([0,0,0], top_plate__part_0);
                top_plate__part_0 = translate([top_plate__part_0_x, top_plate__part_0_y, 0], top_plate__part_0);

                top_plate__part_0 = translate([0,0,0], top_plate__part_0);
                let result = top_plate__part_0;
                
            

                // creating part 1 of case top_plate
                let top_plate__part_1 = _keys_clip_extrude_0_8_outline_fn();

                // make sure that rotations are relative
                let top_plate__part_1_bounds = top_plate__part_1.getBounds();
                let top_plate__part_1_x = top_plate__part_1_bounds[0].x + (top_plate__part_1_bounds[1].x - top_plate__part_1_bounds[0].x) / 2
                let top_plate__part_1_y = top_plate__part_1_bounds[0].y + (top_plate__part_1_bounds[1].y - top_plate__part_1_bounds[0].y) / 2
                top_plate__part_1 = translate([-top_plate__part_1_x, -top_plate__part_1_y, 0], top_plate__part_1);
                top_plate__part_1 = rotate([0,0,0], top_plate__part_1);
                top_plate__part_1 = translate([top_plate__part_1_x, top_plate__part_1_y, 0], top_plate__part_1);

                top_plate__part_1 = translate([0,0,0], top_plate__part_1);
                result = result.subtract(top_plate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_plate_case_fn();
            }

        