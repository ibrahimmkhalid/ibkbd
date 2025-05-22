module.exports = {
  params: {
    designator: "S",
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    return `
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
      (pad "" thru_hole circle (at 3.81 5 0) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask))

      ${"" /* via */}
      (pad 1 thru_hole circle (at 5.842 -8) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.to})
      (pad "" thru_hole circle (at 7.085 -9) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2))

      ${"" /* traces */}
      (pad "" smd rect (at 5.842 -6.54 ${p.r}) (size 0.25 2.92) (layers "B.Cu"))
      (pad "" smd rect (at -5.842 -6.54 ${p.r}) (size 0.25 2.92) (layers "F.Cu"))
      (pad "" smd rect (at 0 -8 ${p.r}) (size 11.934 0.25) (layers "F.Cu"))

      (pad "" smd rect (at -7.085 -5.77 ${p.r}) (size 0.25 6.46) (layers "B.Cu"))
      (pad "" smd rect (at 0 -9 ${p.r}) (size 14.42 0.25) (layers "B.Cu"))
      (pad "" smd rect (at 7.085 -5.77 ${p.r}) (size 0.25 6.46) (layers "F.Cu"))
      (pad "" smd rect (at 7.085 1.23 ${p.r}) (size 0.25 7.54) (layers "F.Cu"))
      (pad "" smd rect (at 5.4475 5 ${p.r}) (size 3.525 0.25) (layers "F.Cu"))

      ${"" /* holes */}
      (pad "" np_thru_hole circle (at 2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
      ${"" /* net pads */}
      (pad "" smd rect (at -7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask))
      (pad "" smd rect (at 5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask))
      (pad "" smd rect (at 7.085 -2.54 ${p.r}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask))
      (pad "" smd rect (at -5.842 -5.08 ${p.r}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask))
      )`;
  },
};
