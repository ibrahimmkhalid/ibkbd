function _case_outline_extrude_2_outline_fn(){
    return new CSG.Path2D([[87.475,-159.7927552],[87.475,-62.975]]).appendArc([90.475,-59.975],{"radius":3,"clockwise":true,"large":false}).appendPoint([223.742412,-59.975]).appendArc([226.6544685,-62.2539404],{"radius":3,"clockwise":true,"large":false}).appendPoint([256.9606516,-184.6478683]).appendArc([257.0485951,-185.3689279],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.0485951,-205.2969636]).appendArc([254.0485951,-208.2969636],{"radius":3,"clockwise":true,"large":false}).appendPoint([234.1531662,-208.2969636]).appendArc([233.2473804,-208.1569552],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.5692141,-162.6527468]).appendArc([87.475,-159.7927552],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_standoff_extrude_5_1000000000000005_outline_fn(){
    return CAG.circle({"center":[185.475,-95.525],"radius":2.2})
.union(
    CAG.circle({"center":[185.475,-152.525],"radius":2.2})
).union(
    CAG.circle({"center":[147.475,-88.525],"radius":2.2})
).union(
    CAG.circle({"center":[147.475,-145.525],"radius":2.2})
).union(
    CAG.circle({"center":[109.475,-102.525],"radius":2.2})
).union(
    CAG.circle({"center":[109.475,-159.525],"radius":2.2})
).union(
    CAG.circle({"center":[192.961392,-184.5863919],"radius":3.3})
).union(
    CAG.circle({"center":[221.3,-66],"radius":3.3})
).union(
    CAG.circle({"center":[201.7,-66],"radius":3.3})
).union(
    CAG.circle({"center":[131,-66],"radius":3.3})
).union(
    CAG.circle({"center":[166.475,-152.525],"radius":3.3})
).union(
    CAG.circle({"center":[231.9522666,-188.0477839],"radius":3.3})
).union(
    CAG.circle({"center":[223.525,-124.475],"radius":3.3})
).union(
    CAG.circle({"center":[109.525,-83.475],"radius":3.3})
).union(
    CAG.circle({"center":[109.525,-140.475],"radius":3.3})
).union(
    CAG.circle({"center":[231.5235951,-140.2597352],"radius":6.6})
).union(
    CAG.circle({"center":[160.95,-171.575],"radius":6.6})
).extrude({ offset: [0, 0, 5.1000000000000005] });
}


function _case_standoff_heat_inserts_extrude_5_1000000000000005_outline_fn(){
    return CAG.circle({"center":[221.3,-66],"radius":1.8})
.union(
    CAG.circle({"center":[201.7,-66],"radius":1.8})
).union(
    CAG.circle({"center":[131,-66],"radius":1.8})
).union(
    CAG.circle({"center":[166.475,-152.525],"radius":1.8})
).union(
    CAG.circle({"center":[231.9522666,-188.0477839],"radius":1.8})
).union(
    CAG.circle({"center":[223.525,-124.475],"radius":1.8})
).union(
    CAG.circle({"center":[109.525,-83.475],"radius":1.8})
).union(
    CAG.circle({"center":[109.525,-140.475],"radius":1.8})
).extrude({ offset: [0, 0, 5.1000000000000005] });
}


function _wall_outline_extrude_5_200000000000001_outline_fn(){
    return new CSG.Path2D([[87.475,-159.7927552],[87.475,-62.975]]).appendArc([90.475,-59.975],{"radius":3,"clockwise":true,"large":false}).appendPoint([223.742412,-59.975]).appendArc([226.6544685,-62.2539404],{"radius":3,"clockwise":true,"large":false}).appendPoint([256.9606516,-184.6478683]).appendArc([257.0485951,-185.3689279],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.0485951,-205.2969636]).appendArc([254.0485951,-208.2969636],{"radius":3,"clockwise":true,"large":false}).appendPoint([234.1531662,-208.2969636]).appendArc([233.2473804,-208.1569552],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.5692141,-162.6527468]).appendArc([87.475,-159.7927552],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[89.475,-159.7927552],[89.475,-62.975]]).appendArc([90.475,-61.975],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.742412,-61.975]).appendArc([224.7130975,-62.7346468],{"radius":1,"clockwise":true,"large":false}).appendPoint([255.0192806,-185.1285747]).appendArc([255.0485951,-185.3689279],{"radius":1,"clockwise":true,"large":false}).appendPoint([255.0485951,-205.2969636]).appendArc([254.0485951,-206.2969636],{"radius":1,"clockwise":true,"large":false}).appendPoint([234.1531662,-206.2969636]).appendArc([233.8512376,-206.2502941],{"radius":1,"clockwise":true,"large":false}).appendPoint([90.1730714,-160.7460857]).appendArc([89.475,-159.7927552],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.200000000000001] });
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
                let bottom_plate__part_1 = _case_standoff_extrude_5_1000000000000005_outline_fn();

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
                let bottom_plate__part_2 = _case_standoff_heat_inserts_extrude_5_1000000000000005_outline_fn();

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
                let bottom_plate__part_3 = _wall_outline_extrude_5_200000000000001_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_3_bounds = bottom_plate__part_3.getBounds();
                let bottom_plate__part_3_x = bottom_plate__part_3_bounds[0].x + (bottom_plate__part_3_bounds[1].x - bottom_plate__part_3_bounds[0].x) / 2
                let bottom_plate__part_3_y = bottom_plate__part_3_bounds[0].y + (bottom_plate__part_3_bounds[1].y - bottom_plate__part_3_bounds[0].y) / 2
                bottom_plate__part_3 = translate([-bottom_plate__part_3_x, -bottom_plate__part_3_y, 0], bottom_plate__part_3);
                bottom_plate__part_3 = rotate([0,0,0], bottom_plate__part_3);
                bottom_plate__part_3 = translate([bottom_plate__part_3_x, bottom_plate__part_3_y, 0], bottom_plate__part_3);

                bottom_plate__part_3 = translate([0,0,2], bottom_plate__part_3);
                result = result.union(bottom_plate__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        