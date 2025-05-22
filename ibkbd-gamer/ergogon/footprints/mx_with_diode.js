module.exports = {
  params: {
    designator: "S",
    from: undefined,
    to: undefined,
    colrow: undefined,
  },
  body: (p) => {
    const get_at_coordinates = () => {
      const pattern = /\(at (-?[\d\.]*) (-?[\d\.]*) (-?[\d\.]*)\)/;
      const matches = p.at.match(pattern);
      if (matches && matches.length == 4) {
        return [
          parseFloat(matches[1]),
          parseFloat(matches[2]),
          parseFloat(matches[3]),
        ];
      } else {
        return null;
      }
    };

    const adjust_point = (x, y) => {
      const at_l = get_at_coordinates();
      if (at_l == null) {
        throw new Error(`Could not get x and y coordinates from p.at: ${p.at}`);
      }
      const at_x = at_l[0];
      const at_y = at_l[1];
      const at_angle = at_l[2];
      const adj_x = at_x + x;
      const adj_y = at_y + y;

      const radians = (Math.PI / 180) * at_angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = cos * (adj_x - at_x) + sin * (adj_y - at_y) + at_x,
        ny = cos * (adj_y - at_y) - sin * (adj_x - at_x) + at_y;

      const point_str = `${nx.toFixed(2)} ${ny.toFixed(2)}`;
      return point_str;
    };

    const module = `
      (module MXWD (layer F.Cu) (tedit 5DD4F656)
      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${"" /* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))
    
      ${"" /* keycap marks */}
      (fp_line (start -9.5 -9.5) (end 9.5 -9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 -9.5) (end 9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.5 9.5) (end -9.5 9.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.5 9.5) (end -9.5 -9.5) (layer Dwgs.User) (width 0.15))

      ${"" /* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))

      ${"" /* stabilizers */}
      (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      ${"" /* diode symbols */}
      (fp_line (start 0.25 5) (end 0.75 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 5.4) (end -0.35 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 4.6) (end 0.25 5.4) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end 0.25 4.6) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 5.55) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 4.45) (layer F.SilkS) (width 0.1))
      (fp_line (start -0.75 5) (end -0.35 5) (layer F.SilkS) (width 0.1))
      (fp_line (start 0.25 5) (end 0.75 5) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 5.4) (end -0.35 5) (layer B.SilkS) (width 0.1))
      (fp_line (start 0.25 4.6) (end 0.25 5.4) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end 0.25 4.6) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 5.55) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.35 5) (end -0.35 4.45) (layer B.SilkS) (width 0.1))
      (fp_line (start -0.75 5) (end -0.35 5) (layer B.SilkS) (width 0.1))

      ${"" /* Diode THT terminals */}
      (pad 2 thru_hole rect (at -3.81 5 0) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.from})
      (pad "" thru_hole circle (at 3.81 5 0) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.colrow})

      ${"" /* via */}
      (pad 1 thru_hole circle (at 5.842 -8) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.to})

      ${"" /* holes */}
      (pad "" np_thru_hole circle (at 2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
      ${"" /* net pads */}
      (pad "" smd rect (at -7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.colrow})
      (pad "" smd rect (at 5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.to})
      (pad "" smd rect (at 7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask) ${p.colrow})
      (pad "" smd rect (at -5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask) ${p.to})
      )`;

    const cleanNetForTrace = (net) => {
      return net.str.replace(/\s+".*?"\)/, ")");
    };

    const traces = `
      (segment (start ${adjust_point(-5.842, -5.08)}) (end ${adjust_point(-2.922, -8)}) (width 0.25) (layer "F.Cu") ${cleanNetForTrace(p.to)})
      (segment (start ${adjust_point(-2.922, -8)}) (end ${adjust_point(5.842, -8)}) (width 0.25) (layer "F.Cu") ${cleanNetForTrace(p.to)})
      (segment (start ${adjust_point(5.842, -5.08)}) (end ${adjust_point(5.842, -8)}) (width 0.25) (layer "B.Cu") ${cleanNetForTrace(p.to)})
      (segment (start ${adjust_point(7.085, 1.725)}) (end ${adjust_point(3.81, 5)}) (width 0.25) (layer "F.Cu") ${cleanNetForTrace(p.colrow)})
      (segment (start ${adjust_point(7.085, -2.54)}) (end ${adjust_point(7.085, 1.725)}) (width 0.25) (layer "F.Cu") ${cleanNetForTrace(p.colrow)})
      (segment (start ${adjust_point(-7.085, 0.175)}) (end ${adjust_point(-4.28, 2.98)}) (width 0.25) (layer "B.Cu") ${cleanNetForTrace(p.colrow)})
      (segment (start ${adjust_point(-7.085, -2.54)}) (end ${adjust_point(-7.085, 0.175)}) (width 0.25) (layer "B.Cu") ${cleanNetForTrace(p.colrow)})
      (segment (start ${adjust_point(-4.28, 2.98)}) (end ${adjust_point(1.79, 2.98)}) (width 0.25) (layer "B.Cu") ${cleanNetForTrace(p.colrow)})
      (segment (start ${adjust_point(1.79, 2.98)}) (end ${adjust_point(3.81, 5)}) (width 0.25) (layer "B.Cu") ${cleanNetForTrace(p.colrow)})
    `;
    return `
    ${module}
    ${traces}
    `;
  },
};
