function _case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[58.3332508,-127.6217513],[71.2140795,-75.9595689]]).appendArc([74.8507324,-73.7744474],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.4051683,-77.4032758]).appendPoint([90.3728559,-73.5220929]).appendArc([94.0095088,-71.3369714],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.5639447,-74.9657998]).appendPoint([109.5316322,-71.084617]).appendArc([113.1682851,-68.8994955],{"radius":3,"clockwise":true,"large":false}).appendPoint([132.38444,-73.690621]).appendPoint([214.1316818,-73.690621]).appendPoint([233.3478363,-68.8994955]).appendArc([236.9844892,-71.084617],{"radius":3,"clockwise":true,"large":false}).appendPoint([237.9521768,-74.9657999]).appendPoint([252.5066126,-71.3369714]).appendArc([256.1432655,-73.5220929],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.1109531,-77.4032759]).appendPoint([271.665389,-73.7744474]).appendArc([275.3020419,-75.9595689],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.1828706,-127.6217513]).appendArc([286.5986127,-131.038252],{"radius":3,"clockwise":true,"large":false}).appendPoint([236.3796402,-155.7980146]).appendArc([236.3786576,-155.7984988],{"radius":2,"clockwise":true,"large":false}).appendArc([236.2829563,-155.8435607],{"radius":3,"clockwise":true,"large":false}).appendPoint([185.0369153,-178.8784132]).appendArc([183.8069699,-179.1421321],{"radius":3,"clockwise":true,"large":false}).appendPoint([162.7091515,-179.1421321]).appendArc([161.4792061,-178.8784132],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.2331651,-155.8435607]).appendArc([110.1374638,-155.7984988],{"radius":3,"clockwise":true,"large":false}).appendArc([110.1364812,-155.7980146],{"radius":2,"clockwise":true,"large":false}).appendPoint([59.9175087,-131.038252]).appendArc([59.9165263,-131.0377673],{"radius":2,"clockwise":true,"large":false}).appendArc([58.3332508,-127.6217513],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_standoff_extrude_4_800000000000001_outline_fn(){
    return CAG.circle({"center":[199.5468057,-84.3094463],"radius":4.1})
.union(
    CAG.circle({"center":[146.9693157,-84.3094463],"radius":4.1})
).union(
    CAG.circle({"center":[261.1962874,-108.3594755],"radius":4.1})
).union(
    CAG.circle({"center":[85.319834,-108.3594755],"radius":4.1})
).union(
    CAG.circle({"center":[173.2580607,-162.5310063],"radius":4.1})
).extrude({ offset: [0, 0, 4.800000000000001] });
}


function _case_standoff_heat_inserts_extrude_4_800000000000001_outline_fn(){
    return CAG.circle({"center":[199.5468057,-84.3094463],"radius":2.1})
.union(
    CAG.circle({"center":[146.9693157,-84.3094463],"radius":2.1})
).union(
    CAG.circle({"center":[261.1962874,-108.3594755],"radius":2.1})
).union(
    CAG.circle({"center":[85.319834,-108.3594755],"radius":2.1})
).union(
    CAG.circle({"center":[173.2580607,-162.5310063],"radius":2.1})
).extrude({ offset: [0, 0, 4.800000000000001] });
}


function _wall_outline_extrude_3_2000000000000006_outline_fn(){
    return new CSG.Path2D([[58.3332508,-127.6217513],[71.2140795,-75.9595689]]).appendArc([74.8507324,-73.7744474],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.4051683,-77.4032758]).appendPoint([90.3728559,-73.5220929]).appendArc([94.0095088,-71.3369714],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.5639447,-74.9657998]).appendPoint([109.5316322,-71.084617]).appendArc([113.1682851,-68.8994955],{"radius":3,"clockwise":true,"large":false}).appendPoint([132.38444,-73.690621]).appendPoint([214.1316818,-73.690621]).appendPoint([233.3478363,-68.8994955]).appendArc([236.9844892,-71.084617],{"radius":3,"clockwise":true,"large":false}).appendPoint([237.9521768,-74.9657999]).appendPoint([252.5066126,-71.3369714]).appendArc([256.1432655,-73.5220929],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.1109531,-77.4032759]).appendPoint([271.665389,-73.7744474]).appendArc([275.3020419,-75.9595689],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.1828706,-127.6217513]).appendArc([286.5986127,-131.038252],{"radius":3,"clockwise":true,"large":false}).appendPoint([236.3796402,-155.7980146]).appendArc([236.3786576,-155.7984988],{"radius":2,"clockwise":true,"large":false}).appendArc([236.2829563,-155.8435607],{"radius":3,"clockwise":true,"large":false}).appendPoint([185.0369153,-178.8784132]).appendArc([183.8069699,-179.1421321],{"radius":3,"clockwise":true,"large":false}).appendPoint([162.7091515,-179.1421321]).appendArc([161.4792061,-178.8784132],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.2331651,-155.8435607]).appendArc([110.1374638,-155.7984988],{"radius":3,"clockwise":true,"large":false}).appendArc([110.1364812,-155.7980146],{"radius":2,"clockwise":true,"large":false}).appendPoint([59.9175087,-131.038252]).appendArc([59.9165263,-131.0377673],{"radius":2,"clockwise":true,"large":false}).appendArc([58.3332508,-127.6217513],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[60.2738423,-128.1055951],[73.154671,-76.4434127]]).appendArc([74.3668886,-75.7150389],{"radius":1,"clockwise":true,"large":false}).appendPoint([89.8916203,-79.5857892]).appendArc([91.1038379,-78.8574154],{"radius":1,"clockwise":false,"large":false}).appendPoint([92.3134474,-74.0059367]).appendArc([93.525665,-73.2775629],{"radius":1,"clockwise":true,"large":false}).appendPoint([109.0503966,-77.1483132]).appendArc([110.2626142,-76.4199394],{"radius":1,"clockwise":false,"large":false}).appendPoint([111.4722237,-71.5684608]).appendArc([112.6844413,-70.840087],{"radius":1,"clockwise":true,"large":false}).appendPoint([132.0197333,-75.6609167]).appendArc([132.2616552,-75.690621],{"radius":1,"clockwise":false,"large":false}).appendPoint([214.2544662,-75.690621]).appendArc([214.4963881,-75.6609167],{"radius":1,"clockwise":false,"large":false}).appendPoint([233.8316801,-70.840087]).appendArc([235.0438977,-71.5684608],{"radius":1,"clockwise":true,"large":false}).appendPoint([236.2535072,-76.4199394]).appendArc([237.4657248,-77.1483132],{"radius":1,"clockwise":false,"large":false}).appendPoint([252.9904564,-73.2775629]).appendArc([254.202674,-74.0059367],{"radius":1,"clockwise":true,"large":false}).appendPoint([255.4122835,-78.8574154]).appendArc([256.6245011,-79.5857892],{"radius":1,"clockwise":false,"large":false}).appendPoint([272.1492328,-75.7150389]).appendArc([273.3614504,-76.4434127],{"radius":1,"clockwise":true,"large":false}).appendPoint([286.2422791,-128.1055951]).appendArc([285.7141932,-129.2444287],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.4952207,-154.0041913]).appendArc([235.4629927,-154.0193733],{"radius":1,"clockwise":true,"large":false}).appendPoint([184.2169517,-177.0542258]).appendArc([183.8069699,-177.1421321],{"radius":1,"clockwise":true,"large":false}).appendPoint([162.7091515,-177.1421321]).appendArc([162.2991697,-177.0542258],{"radius":1,"clockwise":true,"large":false}).appendPoint([111.0531287,-154.0193733]).appendArc([111.0209007,-154.0041913],{"radius":1,"clockwise":true,"large":false}).appendPoint([60.8019282,-129.2444287]).appendArc([60.2738423,-128.1055951],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 3.2000000000000006] });
}


function _wall_cutout_for_slider_extrude_7_300000000000001_outline_fn(){
    return new CSG.Path2D([[58.3332508,-127.6217513],[71.2140795,-75.9595689]]).appendArc([74.8507324,-73.7744474],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.4051683,-77.4032758]).appendPoint([90.3728559,-73.5220929]).appendArc([94.0095088,-71.3369714],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.5639447,-74.9657998]).appendPoint([109.5316322,-71.084617]).appendArc([113.1682851,-68.8994955],{"radius":3,"clockwise":true,"large":false}).appendPoint([132.38444,-73.690621]).appendPoint([184.0080607,-73.690621]).appendPoint([184.0080607,-75.690621]).appendPoint([132.2616552,-75.690621]).appendArc([132.0197333,-75.6609167],{"radius":1,"clockwise":true,"large":false}).appendPoint([112.6844413,-70.840087]).appendArc([111.4722237,-71.5684608],{"radius":1,"clockwise":false,"large":false}).appendPoint([110.2626142,-76.4199394]).appendArc([109.0503966,-77.1483132],{"radius":1,"clockwise":true,"large":false}).appendPoint([93.525665,-73.2775629]).appendArc([92.3134474,-74.0059367],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.1038379,-78.8574154]).appendArc([89.8916203,-79.5857892],{"radius":1,"clockwise":true,"large":false}).appendPoint([74.3668886,-75.7150389]).appendArc([73.154671,-76.4434127],{"radius":1,"clockwise":false,"large":false}).appendPoint([60.2738423,-128.1055951]).appendArc([60.8019282,-129.2444287],{"radius":1,"clockwise":false,"large":false}).appendPoint([111.0209007,-154.0041913]).appendArc([111.0531287,-154.0193733],{"radius":1,"clockwise":false,"large":false}).appendPoint([162.2991697,-177.0542258]).appendArc([162.7091515,-177.1421321],{"radius":1,"clockwise":false,"large":false}).appendPoint([183.8069699,-177.1421321]).appendArc([184.2169517,-177.0542258],{"radius":1,"clockwise":false,"large":false}).appendPoint([235.4629927,-154.0193733]).appendArc([235.4952207,-154.0041913],{"radius":1,"clockwise":false,"large":false}).appendPoint([285.7141932,-129.2444287]).appendArc([286.2422791,-128.1055951],{"radius":1,"clockwise":false,"large":false}).appendPoint([273.3614504,-76.4434127]).appendArc([272.1492328,-75.7150389],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.6245011,-79.5857892]).appendArc([255.4122835,-78.8574154],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.202674,-74.0059367]).appendArc([252.9904564,-73.2775629],{"radius":1,"clockwise":false,"large":false}).appendPoint([237.4657248,-77.1483132]).appendArc([236.2535072,-76.4199394],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.0438977,-71.5684608]).appendArc([233.8316801,-70.840087],{"radius":1,"clockwise":false,"large":false}).appendPoint([214.4963881,-75.6609167]).appendArc([214.2544662,-75.690621],{"radius":1,"clockwise":true,"large":false}).appendPoint([192.5080607,-75.690621]).appendPoint([192.5080607,-73.690621]).appendPoint([214.1316818,-73.690621]).appendPoint([233.3478363,-68.8994955]).appendArc([236.9844892,-71.084617],{"radius":3,"clockwise":true,"large":false}).appendPoint([237.9521768,-74.9657999]).appendPoint([252.5066126,-71.3369714]).appendArc([256.1432655,-73.5220929],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.1109531,-77.4032759]).appendPoint([271.665389,-73.7744474]).appendArc([275.3020419,-75.9595689],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.1828706,-127.6217513]).appendArc([286.5986127,-131.038252],{"radius":3,"clockwise":true,"large":false}).appendPoint([236.3796402,-155.7980146]).appendArc([236.3786576,-155.7984988],{"radius":2,"clockwise":true,"large":false}).appendArc([236.2829563,-155.8435607],{"radius":3,"clockwise":true,"large":false}).appendPoint([185.0369153,-178.8784132]).appendArc([183.8069699,-179.1421321],{"radius":3,"clockwise":true,"large":false}).appendPoint([162.7091515,-179.1421321]).appendArc([161.4792061,-178.8784132],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.2331651,-155.8435607]).appendArc([110.1374638,-155.7984988],{"radius":3,"clockwise":true,"large":false}).appendArc([110.1364812,-155.7980146],{"radius":2,"clockwise":true,"large":false}).appendPoint([59.9175087,-131.038252]).appendArc([59.9165263,-131.0377673],{"radius":2,"clockwise":true,"large":false}).appendArc([58.3332508,-127.6217513],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 7.300000000000001] });
}




                function bottom_plate_case_fn() {
                    

                // creating part 0 of case bottom_plate
                let bottom_plate__part_0 = _case_outline_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_0_bounds = bottom_plate__part_0.getBounds();
                let bottom_plate__part_0_x = bottom_plate__part_0_bounds[0].x + (bottom_plate__part_0_bounds[1].x - bottom_plate__part_0_bounds[0].x) / 2
                let bottom_plate__part_0_y = bottom_plate__part_0_bounds[0].y + (bottom_plate__part_0_bounds[1].y - bottom_plate__part_0_bounds[0].y) / 2
                bottom_plate__part_0 = translate([-bottom_plate__part_0_x, -bottom_plate__part_0_y, 0], bottom_plate__part_0);
                bottom_plate__part_0 = rotate([0,0,0], bottom_plate__part_0);
                bottom_plate__part_0 = translate([bottom_plate__part_0_x, bottom_plate__part_0_y, 0], bottom_plate__part_0);

                bottom_plate__part_0 = translate([0,0,0], bottom_plate__part_0);
                let result = bottom_plate__part_0;
                
            

                // creating part 1 of case bottom_plate
                let bottom_plate__part_1 = _case_standoff_extrude_4_800000000000001_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_1_bounds = bottom_plate__part_1.getBounds();
                let bottom_plate__part_1_x = bottom_plate__part_1_bounds[0].x + (bottom_plate__part_1_bounds[1].x - bottom_plate__part_1_bounds[0].x) / 2
                let bottom_plate__part_1_y = bottom_plate__part_1_bounds[0].y + (bottom_plate__part_1_bounds[1].y - bottom_plate__part_1_bounds[0].y) / 2
                bottom_plate__part_1 = translate([-bottom_plate__part_1_x, -bottom_plate__part_1_y, 0], bottom_plate__part_1);
                bottom_plate__part_1 = rotate([0,0,0], bottom_plate__part_1);
                bottom_plate__part_1 = translate([bottom_plate__part_1_x, bottom_plate__part_1_y, 0], bottom_plate__part_1);

                bottom_plate__part_1 = translate([0,0,2], bottom_plate__part_1);
                result = result.union(bottom_plate__part_1);
                
            

                // creating part 2 of case bottom_plate
                let bottom_plate__part_2 = _case_standoff_heat_inserts_extrude_4_800000000000001_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_2_bounds = bottom_plate__part_2.getBounds();
                let bottom_plate__part_2_x = bottom_plate__part_2_bounds[0].x + (bottom_plate__part_2_bounds[1].x - bottom_plate__part_2_bounds[0].x) / 2
                let bottom_plate__part_2_y = bottom_plate__part_2_bounds[0].y + (bottom_plate__part_2_bounds[1].y - bottom_plate__part_2_bounds[0].y) / 2
                bottom_plate__part_2 = translate([-bottom_plate__part_2_x, -bottom_plate__part_2_y, 0], bottom_plate__part_2);
                bottom_plate__part_2 = rotate([0,0,0], bottom_plate__part_2);
                bottom_plate__part_2 = translate([bottom_plate__part_2_x, bottom_plate__part_2_y, 0], bottom_plate__part_2);

                bottom_plate__part_2 = translate([0,0,2], bottom_plate__part_2);
                result = result.subtract(bottom_plate__part_2);
                
            

                // creating part 3 of case bottom_plate
                let bottom_plate__part_3 = _wall_outline_extrude_3_2000000000000006_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_3_bounds = bottom_plate__part_3.getBounds();
                let bottom_plate__part_3_x = bottom_plate__part_3_bounds[0].x + (bottom_plate__part_3_bounds[1].x - bottom_plate__part_3_bounds[0].x) / 2
                let bottom_plate__part_3_y = bottom_plate__part_3_bounds[0].y + (bottom_plate__part_3_bounds[1].y - bottom_plate__part_3_bounds[0].y) / 2
                bottom_plate__part_3 = translate([-bottom_plate__part_3_x, -bottom_plate__part_3_y, 0], bottom_plate__part_3);
                bottom_plate__part_3 = rotate([0,0,0], bottom_plate__part_3);
                bottom_plate__part_3 = translate([bottom_plate__part_3_x, bottom_plate__part_3_y, 0], bottom_plate__part_3);

                bottom_plate__part_3 = translate([0,0,2], bottom_plate__part_3);
                result = result.union(bottom_plate__part_3);
                
            

                // creating part 4 of case bottom_plate
                let bottom_plate__part_4 = _wall_cutout_for_slider_extrude_7_300000000000001_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_4_bounds = bottom_plate__part_4.getBounds();
                let bottom_plate__part_4_x = bottom_plate__part_4_bounds[0].x + (bottom_plate__part_4_bounds[1].x - bottom_plate__part_4_bounds[0].x) / 2
                let bottom_plate__part_4_y = bottom_plate__part_4_bounds[0].y + (bottom_plate__part_4_bounds[1].y - bottom_plate__part_4_bounds[0].y) / 2
                bottom_plate__part_4 = translate([-bottom_plate__part_4_x, -bottom_plate__part_4_y, 0], bottom_plate__part_4);
                bottom_plate__part_4 = rotate([0,0,0], bottom_plate__part_4);
                bottom_plate__part_4 = translate([bottom_plate__part_4_x, bottom_plate__part_4_y, 0], bottom_plate__part_4);

                bottom_plate__part_4 = translate([0,0,2], bottom_plate__part_4);
                result = result.union(bottom_plate__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        