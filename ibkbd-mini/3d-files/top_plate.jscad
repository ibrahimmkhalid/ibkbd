function top_plate_outline_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[58.3332508,-127.6217513],[71.2140795,-75.9595689]]).appendArc([74.8507324,-73.7744474],{"radius":3,"clockwise":true,"large":false}).appendPoint([89.4051683,-77.4032758]).appendPoint([90.3728559,-73.5220929]).appendArc([94.0095088,-71.3369714],{"radius":3,"clockwise":true,"large":false}).appendPoint([108.5639447,-74.9657998]).appendPoint([109.5316322,-71.084617]).appendArc([113.1682851,-68.8994955],{"radius":3,"clockwise":true,"large":false}).appendPoint([132.38444,-73.690621]).appendPoint([164.0080607,-73.690621]).appendPoint([164.0080607,-110.8580139]).appendPoint([182.5080607,-110.8580139]).appendPoint([182.5080607,-73.690621]).appendPoint([214.1316818,-73.690621]).appendPoint([233.3478363,-68.8994955]).appendArc([236.9844892,-71.084617],{"radius":3,"clockwise":true,"large":false}).appendPoint([237.9521768,-74.9657999]).appendPoint([252.5066126,-71.3369714]).appendArc([256.1432655,-73.5220929],{"radius":3,"clockwise":true,"large":false}).appendPoint([257.1109531,-77.4032759]).appendPoint([271.665389,-73.7744474]).appendArc([275.3020419,-75.9595689],{"radius":3,"clockwise":true,"large":false}).appendPoint([288.1828706,-127.6217513]).appendArc([286.5986127,-131.038252],{"radius":3,"clockwise":true,"large":false}).appendPoint([236.3796402,-155.7980146]).appendArc([236.3786576,-155.7984988],{"radius":2,"clockwise":true,"large":false}).appendArc([236.2829563,-155.8435607],{"radius":3,"clockwise":true,"large":false}).appendPoint([185.0369153,-178.8784132]).appendArc([183.8069699,-179.1421321],{"radius":3,"clockwise":true,"large":false}).appendPoint([162.7091515,-179.1421321]).appendArc([161.4792061,-178.8784132],{"radius":3,"clockwise":true,"large":false}).appendPoint([110.2331651,-155.8435607]).appendArc([110.1374638,-155.7984988],{"radius":3,"clockwise":true,"large":false}).appendArc([110.1364812,-155.7980146],{"radius":2,"clockwise":true,"large":false}).appendPoint([59.9175087,-131.038252]).appendArc([59.9165263,-131.0377673],{"radius":2,"clockwise":true,"large":false}).appendArc([58.3332508,-127.6217513],{"radius":3,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[199.5468057,-84.3094463],"radius":1.1})
.union(
    CAG.circle({"center":[146.9693157,-84.3094463],"radius":1.1})
).union(
    CAG.circle({"center":[261.1962874,-108.3594755],"radius":1.1})
).union(
    CAG.circle({"center":[85.319834,-108.3594755],"radius":1.1})
).union(
    CAG.circle({"center":[173.2580607,-162.5310063],"radius":1.1})
).union(
    new CSG.Path2D([[184.9860796,-172.1792081],[196.5097019,-164.4064268]]).appendPoint([188.7369206,-152.8828045]).appendPoint([177.2132983,-160.6555858]).appendPoint([184.9860796,-172.1792081]).close().innerToCAG()
).union(
    new CSG.Path2D([[150.0064195,-164.4064268],[161.5300418,-172.1792081]]).appendPoint([169.3028231,-160.6555858]).appendPoint([157.7792008,-152.8828045]).appendPoint([150.0064195,-164.4064268]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.6584547,-154.7708466],[231.1455653,-151.4081322]]).appendPoint([227.7828509,-137.9210216]).appendPoint([214.2957403,-141.283736]).appendPoint([217.6584547,-154.7708466]).close().innerToCAG()
).union(
    new CSG.Path2D([[197.0617947,-140.2729811],[210.5489053,-136.9102667]]).appendPoint([207.1861909,-123.4231561]).appendPoint([193.6990803,-126.7858705]).appendPoint([197.0617947,-140.2729811]).close().innerToCAG()
).union(
    new CSG.Path2D([[214.5271177,-135.918387],[228.0142283,-132.5556726]]).appendPoint([224.6515139,-119.068562]).appendPoint([211.1644033,-122.4312764]).appendPoint([214.5271177,-135.918387]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.4577639,-127.2091987],[262.9448745,-123.8464843]]).appendPoint([259.5821601,-110.3593737]).appendPoint([246.0950495,-113.7220881]).appendPoint([249.4577639,-127.2091987]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.9672161,-136.9102667],[149.4543267,-140.2729811]]).appendPoint([152.8170411,-126.7858705]).appendPoint([139.3299305,-123.4231561]).appendPoint([135.9672161,-136.9102667]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.3705561,-151.4081322],[128.8576667,-154.7708466]]).appendPoint([132.2203811,-141.283736]).appendPoint([118.7332705,-137.9210216]).appendPoint([115.3705561,-151.4081322]).close().innerToCAG()
).union(
    new CSG.Path2D([[206.3017733,-102.9283323],[219.7888839,-99.5656179]]).appendPoint([216.4261695,-86.0785073]).appendPoint([202.9390589,-89.4412217]).appendPoint([206.3017733,-102.9283323]).close().innerToCAG()
).union(
    new CSG.Path2D([[210.4144455,-119.4233596],[223.9015561,-116.0606452]]).appendPoint([220.5388417,-102.5735346]).appendPoint([207.0517311,-105.936249]).appendPoint([210.4144455,-119.4233596]).close().innerToCAG()
).union(
    new CSG.Path2D([[222.0736431,-91.7816681],[235.5607537,-88.4189537]]).appendPoint([232.1980393,-74.9318431]).appendPoint([218.7109287,-78.2945575]).appendPoint([222.0736431,-91.7816681]).close().innerToCAG()
).union(
    new CSG.Path2D([[226.1863153,-108.2766954],[239.6734259,-104.913981]]).appendPoint([236.3107115,-91.4268704]).appendPoint([222.8236009,-94.7895848]).appendPoint([226.1863153,-108.2766954]).close().innerToCAG()
).union(
    new CSG.Path2D([[230.2989875,-124.7717228],[243.7860981,-121.4090084]]).appendPoint([240.4233837,-107.9218978]).appendPoint([226.9362731,-111.2846122]).appendPoint([230.2989875,-124.7717228]).close().innerToCAG()
).union(
    new CSG.Path2D([[268.6165402,-129.6466747],[282.1036508,-126.2839603]]).appendPoint([278.7409364,-112.7968497]).appendPoint([265.2538258,-116.1595641]).appendPoint([268.6165402,-129.6466747]).close().innerToCAG()
).union(
    new CSG.Path2D([[64.4124706,-126.2839603],[77.8995812,-129.6466747]]).appendPoint([81.2622956,-116.1595641]).appendPoint([67.775185,-112.7968497]).appendPoint([64.4124706,-126.2839603]).close().innerToCAG()
).union(
    new CSG.Path2D([[188.8364502,-107.2829264],[202.3235608,-103.920212]]).appendPoint([198.9608464,-90.4331014]).appendPoint([185.4737358,-93.7958158]).appendPoint([188.8364502,-107.2829264]).close().innerToCAG()
).union(
    new CSG.Path2D([[192.9491224,-123.7779537],[206.436233,-120.4152393]]).appendPoint([203.0735186,-106.9281287]).appendPoint([189.586408,-110.2908431]).appendPoint([192.9491224,-123.7779537]).close().innerToCAG()
).union(
    new CSG.Path2D([[241.2324194,-94.219144],[254.71953,-90.8564296]]).appendPoint([251.3568156,-77.369319]).appendPoint([237.869705,-80.7320334]).appendPoint([241.2324194,-94.219144]).close().innerToCAG()
).union(
    new CSG.Path2D([[144.1925606,-103.920212],[157.6796712,-107.2829264]]).appendPoint([161.0423856,-93.7958158]).appendPoint([147.555275,-90.4331014]).appendPoint([144.1925606,-103.920212]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.0798884,-120.4152393],[153.566999,-123.7779537]]).appendPoint([156.9297134,-110.2908431]).appendPoint([143.4426028,-106.9281287]).appendPoint([140.0798884,-120.4152393]).close().innerToCAG()
).union(
    new CSG.Path2D([[118.5018931,-132.5556726],[131.9890037,-135.918387]]).appendPoint([135.3517181,-122.4312764]).appendPoint([121.8646075,-119.068562]).appendPoint([118.5018931,-132.5556726]).close().innerToCAG()
).union(
    new CSG.Path2D([[126.7272375,-99.5656179],[140.2143481,-102.9283323]]).appendPoint([143.5770625,-89.4412217]).appendPoint([130.0899519,-86.0785073]).appendPoint([126.7272375,-99.5656179]).close().innerToCAG()
).union(
    new CSG.Path2D([[110.9553677,-88.4189537],[124.4424783,-91.7816681]]).appendPoint([127.8051927,-78.2945575]).appendPoint([114.3180821,-74.9318431]).appendPoint([110.9553677,-88.4189537]).close().innerToCAG()
).union(
    new CSG.Path2D([[260.3911958,-96.65662],[273.8783064,-93.2939056]]).appendPoint([270.515592,-79.806795]).appendPoint([257.0284814,-83.1695094]).appendPoint([260.3911958,-96.65662]).close().innerToCAG()
).union(
    new CSG.Path2D([[264.503868,-113.1516473],[277.9909786,-109.7889329]]).appendPoint([274.6282642,-96.3018223]).appendPoint([261.1411536,-99.6645367]).appendPoint([264.503868,-113.1516473]).close().innerToCAG()
).union(
    new CSG.Path2D([[122.6145653,-116.0606452],[136.1016759,-119.4233596]]).appendPoint([139.4643903,-105.936249]).appendPoint([125.9772797,-102.5735346]).appendPoint([122.6145653,-116.0606452]).close().innerToCAG()
).union(
    new CSG.Path2D([[106.8426955,-104.913981],[120.3298061,-108.2766954]]).appendPoint([123.6925205,-94.7895848]).appendPoint([110.2054099,-91.4268704]).appendPoint([106.8426955,-104.913981]).close().innerToCAG()
).union(
    new CSG.Path2D([[102.7300233,-121.4090084],[116.2171339,-124.7717228]]).appendPoint([119.5798483,-111.2846122]).appendPoint([106.0927377,-107.9218978]).appendPoint([102.7300233,-121.4090084]).close().innerToCAG()
).union(
    new CSG.Path2D([[91.7965914,-90.8564296],[105.283702,-94.219144]]).appendPoint([108.6464164,-80.7320334]).appendPoint([95.1593058,-77.369319]).appendPoint([91.7965914,-90.8564296]).close().innerToCAG()
).union(
    new CSG.Path2D([[83.5712469,-123.8464843],[97.0583575,-127.2091987]]).appendPoint([100.4210719,-113.7220881]).appendPoint([86.9339613,-110.3593737]).appendPoint([83.5712469,-123.8464843]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.6839191,-107.351457],[101.1710297,-110.7141714]]).appendPoint([104.5337441,-97.2270608]).appendPoint([91.0466335,-93.8643464]).appendPoint([87.6839191,-107.351457]).close().innerToCAG()
).union(
    new CSG.Path2D([[72.637815,-93.2939056],[86.1249256,-96.65662]]).appendPoint([89.48764,-83.1695094]).appendPoint([76.0005294,-79.806795]).appendPoint([72.637815,-93.2939056]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.5251428,-109.7889329],[82.0122534,-113.1516473]]).appendPoint([85.3749678,-99.6645367]).appendPoint([71.8878572,-96.3018223]).appendPoint([68.5251428,-109.7889329]).close().innerToCAG()
).union(
    new CSG.Path2D([[245.3450917,-110.7141714],[258.8322023,-107.351457]]).appendPoint([255.4694879,-93.8643464]).appendPoint([241.9823773,-97.2270608]).appendPoint([245.3450917,-110.7141714]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.5822574,-161.9849373],[213.2805393,-156.331298]]).appendPoint([207.6269,-143.6330161]).appendPoint([194.9286181,-149.2866554]).appendPoint([200.5822574,-161.9849373]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.2355821,-156.331298],[145.933864,-161.9849373]]).appendPoint([151.5875033,-149.2866554]).appendPoint([138.8892214,-143.6330161]).appendPoint([133.2355821,-156.331298]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] }).subtract(
new CSG.cylinder({  start: [199.5468057,-84.3094463,0.3999999999999999],  end: [199.5468057,-84.3094463,1.2],  radiusStart: 1.1,  radiusEnd: 1.95}).union(
new CSG.cylinder({  start: [146.9693157,-84.3094463,0.3999999999999999],  end: [146.9693157,-84.3094463,1.2],  radiusStart: 1.1,  radiusEnd: 1.95})).union(
new CSG.cylinder({  start: [261.1962874,-108.3594755,0.3999999999999999],  end: [261.1962874,-108.3594755,1.2],  radiusStart: 1.1,  radiusEnd: 1.95})).union(
new CSG.cylinder({  start: [85.319834,-108.3594755,0.3999999999999999],  end: [85.319834,-108.3594755,1.2],  radiusStart: 1.1,  radiusEnd: 1.95})).union(
new CSG.cylinder({  start: [173.2580607,-162.5310063,0.3999999999999999],  end: [173.2580607,-162.5310063,1.2],  radiusStart: 1.1,  radiusEnd: 1.95}))
);
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = top_plate_outline_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let top_plate__part_0_bounds = top_plate__part_0.getBounds();
                let top_plate__part_0_x = top_plate__part_0_bounds[0].x + (top_plate__part_0_bounds[1].x - top_plate__part_0_bounds[0].x) / 2
                let top_plate__part_0_y = top_plate__part_0_bounds[0].y + (top_plate__part_0_bounds[1].y - top_plate__part_0_bounds[0].y) / 2
                top_plate__part_0 = translate([-top_plate__part_0_x, -top_plate__part_0_y, 0], top_plate__part_0);
                top_plate__part_0 = rotate([0,0,0], top_plate__part_0);
                top_plate__part_0 = translate([top_plate__part_0_x, top_plate__part_0_y, 0], top_plate__part_0);

                top_plate__part_0 = translate([0,0,0], top_plate__part_0);
                let result = top_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_plate_case_fn();
            }

        