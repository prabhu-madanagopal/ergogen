module.exports = {
  params: {
    designator: 'LED',
    side: 'F',
    reverse: false,
    rotate: false,
    din: undefined,
    dout: undefined,
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'}
  },
  body: p => {
    const common = `

                        (module SK6812 (layer F.Cu) (tedit 5B24D78F)
                        ${p.at /* parametric position */}
                       (fp_text reference "${p.ref}" (at 0 -2.6 180) (layer "F.SilkS") ${p.ref_hide}
                          (effects (font (size 1 1) (thickness 0.15)))
                        (tstamp ${p.ref}c13c340-5506-47b0-bd88-0ff788695ebb))
                       (fp_text value "LED_choc_6028R" (at -9.425 3.85) (layer "F.Fab") hide
                          (effects (font (size 1 1) (thickness 0.15)) (justify left))
                        (tstamp ${p.ref}8974115-1ec4-404e-a8d3-4a67e510f9a5))

                        (fp_text user "18x17 spacing" (at 0 12.3 -180) (layer "Dwgs.User") hide
                            (effects (font (size 1 1) (thickness 0.15)))
                          (tstamp ${p.ref}01f2dd-879c-4cca-bd99-30cf242e78bc)
                        )
                        (fp_text user "offset: 4.7" (at 0 3 -180) (layer "Dwgs.User") hide
                            (effects (font (size 1 1) (thickness 0.15)))
                          (tstamp ${p.ref}320270-5fee-471c-bbf7-cd8ea985f0d2)
                        )
                        (fp_text user "switch center" (at 0 6.25 -180) (layer "Cmts.User") hide
                            (effects (font (size 1 1) (thickness 0.15)))
                          (tstamp ${p.ref}5b9fdc-3a40-4e7c-9ab7-111b2db7927b)
                        )
                        (fp_text user "19.05 spacing" (at 0 13.4 -180) (layer "Eco1.User") hide
                            (effects (font (size 1 1) (thickness 0.15)))
                          (tstamp ${p.ref}046f6c-db09-4c13-bea3-acf3a1fc169e)
                        )
                        (fp_line (start -9 -3.8) (end -9 13.2)
                         (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}0e7d69a-464c-4cb3-9fa1-5fda1f9fb8ef))
                        (fp_line (start -9 13.2) (end 9 13.2)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}827b15-c871-4e33-b71f-907c9af918ca))
                        (fp_line (start -1.6 -1.399999) (end 1.1 -1.399999)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}043b67-dafd-4848-8bd8-f76d6f3d7e42))
                        (fp_line (start -1.6 1.400001) (end -1.6 -1.399999)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}4220fd-0769-4698-a3a0-065036578841))
                        (fp_line (start 1.6 -0.899999) (end 1.1 -1.399999)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}8c9bfe-26ab-4e74-93ba-9b76c8f0cf2e))
                        (fp_line (start 1.6 -0.899999) (end 1.6 1.400001)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}ba0fbb-d610-4ac0-ba89-17f5e26448f1))
                        (fp_line (start 1.6 1.400001) (end -1.6 1.400001)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}41ee4b-2aef-420f-9903-7e98fb6e540e))
                        (fp_line (start 9 -3.8) (end -9 -3.8)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}244996-f3f3-4c34-bede-648653970949))
                        (fp_line (start 9 13.2) (end 9 -3.8)
                          (stroke (width 0.12) (type solid)) (layer "Dwgs.User") (tstamp ${p.ref}99589a-e2f7-4a9d-a3aa-1f8d0d0d18d8))
                        (fp_line (start -0.25 4.45) (end 0 4.7)
                          (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp ${p.ref}12bee9-8bd5-4ce7-9321-c3f43efd6330))
                        (fp_line (start 0 4.7) (end -0.25 4.95)
                          (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp ${p.ref}414bd3-1027-4413-b6e5-cdf941534aa8))
                        (fp_line (start 0 4.7) (end 0.25 4.95)
                          (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp ${p.ref}891d57-dd7d-4e8e-87bd-b49044a6139b))
                        (fp_line (start 0.25 4.45) (end 0 4.7)
                          (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp ${p.ref}529aa0-28ab-4c7c-81ca-f748c62cc975))
                        (fp_line (start -9.525 -4.825) (end 9.525 -4.825)
                          (stroke (width 0.12) (type solid)) (layer "Eco1.User") (tstamp ${p.ref}be25d9-7ea4-4876-94d8-e664466fa8db))
                        (fp_line (start -9.525 14.225) (end -9.525 -4.825)
                          (stroke (width 0.12) (type solid)) (layer "Eco1.User") (tstamp ${p.ref}9fa5f4-82dd-487b-ae85-c5f8ea858761))
                        (fp_line (start 9.525 -4.825) (end 9.525 14.225)
                          (stroke (width 0.12) (type solid)) (layer "Eco1.User") (tstamp ${p.ref}82b907-74b3-46b1-bb14-3ba7b01efb45))
                        (fp_line (start 9.525 14.225) (end -9.525 14.225)
                          (stroke (width 0.12) (type solid)) (layer "Eco1.User") (tstamp ${p.ref}7da748-04dd-4dd1-826b-3e69c868e8d1))
                        (fp_line (start -1.699999 -0.702841) (end -1.699999 0.702843)
                          (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}76f8df-3c8c-4e0b-bc8d-603fedd50061))
                        (fp_line (start -0.794452 1.5) (end 0.794453 1.5)
                          (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}bc5801-937b-41c7-9911-51a80871509b))
                        (fp_line (start 0.794452 -1.499999) (end -0.794452 -1.499999)
                          (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}dc4918-2732-4a8e-b1f3-71962b9c6040))
                        (fp_line (start 1.699999 0.702843) (end 1.699999 -0.702841)
                          (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}bedbf2-e9fa-415c-9c65-3cc8f2c915bd))
                       (fp_line (start -3.8 -1.999999) (end 3.8 -1.999999)
                         (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ${p.ref}1336064-d3c5-43f6-8e7a-4f2a19e27b46))
                       (fp_line (start -3.8 2.000001) (end -3.8 -1.999999)
                         (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ${p.ref}b7cc06e-5c6b-4b5b-9788-59d0c1a429ca))
                       (fp_line (start 3.8 -1.999999) (end 3.8 2.000001)
                         (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ${p.ref}4814bb0-b66a-4b0f-99cf-ca60db64c47d))
                       (fp_line (start 3.8 2.000001) (end -3.8 2.000001)
                         (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ${p.ref}1dcacc4-1763-4d73-97da-53316175bc94))

                `
    /*
      (fp_arc (start -1.749484 -0.919719) (mid -1.712527 -0.814067) (end -1.699999 -0.702842)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}7583bc-a9e3-47e8-971f-a1f59c46318a))
      (fp_arc (start -1.749484 -0.919719) (mid -1.63807 -1.504033) (end -1.046711 -1.568296)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}460bae-d789-4d1b-bbcd-22be04ead7e1))
      (fp_arc (start -1.699999 0.702843) (mid -1.712527 0.814069) (end -1.749484 0.919721)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}83b8b4-62cb-44a0-a8b9-535fda73085e))
      (fp_arc (start -1.046711 1.5683) (mid -1.638071 1.504036) (end -1.749484 0.919721)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}a54be1-d326-4ccf-ad5d-6fbe12460296))
      (fp_arc (start -1.046711 1.5683) (mid -0.925123 1.517378) (end -0.794453 1.500001)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}273278-6735-4092-89f8-87178d61a1bb))
      (fp_arc (start -0.794452 -1.499999) (mid -0.925122 -1.517376) (end -1.04671 -1.568298)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}c3f646-98f9-457c-a426-e7be438a4533))
      (fp_arc (start 0.794453 1.5) (mid 0.925123 1.517377) (end 1.046711 1.568299)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}f04445-3aab-4c59-bf4b-421a8aa610d7))
      (fp_arc (start 1.046711 -1.568298) (mid 0.925123 -1.517376) (end 0.794452 -1.499999)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}80b2de-db66-422e-abdb-7433c88d0063))
      (fp_arc (start 1.046711 -1.568298) (mid 1.638072 -1.504034) (end 1.749484 -0.919718)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}d461c3-44bb-4452-8821-445cf00579e2))
      (fp_arc (start 1.699999 -0.702841) (mid 1.712527 -0.814067) (end 1.749484 -0.919719)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}bb5aef-acfb-454a-9899-2c0b70ba6bff))
      (fp_arc (start 1.749484 0.919721) (mid 1.638071 1.504035) (end 1.046711 1.568299)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}56d8b9-8ce0-4b24-9436-015f4244eab6))
      (fp_arc (start 1.749484 0.919721) (mid 1.712527 0.814069) (end 1.699999 0.702844)
      (stroke (width 0.1) (type solid)) (layer "Edge.Cuts") (tstamp ${p.ref}18c93f-0b69-4048-aecb-e1f20f9dc571))

    */
    function side(def_side) {
      if (def_side == 'B') {
        if (p.rotate) {
          return `
                       (pad "1" smd roundrect (at -2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}aeb38a2-f11c-44cf-9844-0dab5893e184) ${p.VCC.str})
                       (pad "2" smd roundrect (at -2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}51eb277-d4c2-4166-8742-58c4b0d88f85) ${p.dout.str})
                       (pad "3" smd roundrect (at 2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}743bc4c-ef8b-4216-96a5-e4e95f8c7445) ${p.din.str})
                       (pad "4" smd roundrect (at 2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1)
                         (chamfer_ratio 0.5) (chamfer top_right) (tstamp ${def_side}188d1cd-b0c7-4af4-b538-00c68eac0bf0) ${p.GND.str})

                        `
        }
        return `
                       (pad "1" smd roundrect (at 2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}aeb38a2-f11c-44cf-9844-0dab5893e184) ${p.VCC.str})
                       (pad "2" smd roundrect (at 2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}51eb277-d4c2-4166-8742-58c4b0d88f85) ${p.dout.str})
                       (pad "3" smd roundrect (at -2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}743bc4c-ef8b-4216-96a5-e4e95f8c7445) ${p.din.str})
                       (pad "4" smd roundrect (at -2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1)
                         (chamfer_ratio 0.5) (chamfer bottom_left) (tstamp ${def_side}188d1cd-b0c7-4af4-b538-00c68eac0bf0) ${p.GND.str})

                        `
      }

      if (p.rotate) {
        return `
                       (pad "1" smd roundrect (at -2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}aeb38a2-f11c-44cf-9844-0dab5893e184) ${p.VCC.str})
                       (pad "2" smd roundrect (at -2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}51eb277-d4c2-4166-8742-58c4b0d88f85) ${p.dout.str})
                       (pad "3" smd roundrect (at 2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}743bc4c-ef8b-4216-96a5-e4e95f8c7445) ${p.din.str})
                       (pad "4" smd roundrect (at 2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1)
                         (chamfer_ratio 0.5) (chamfer top_left) (tstamp ${def_side}188d1cd-b0c7-4af4-b538-00c68eac0bf0) ${p.GND.str})

                        `
      }
      return `
                       (pad "1" smd roundrect (at 2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}aeb38a2-f11c-44cf-9844-0dab5893e184) ${p.VCC.str})
                       (pad "2" smd roundrect (at 2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}51eb277-d4c2-4166-8742-58c4b0d88f85) ${p.dout.str})
                       (pad "3" smd roundrect (at -2.725 -0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1) (tstamp ${def_side}743bc4c-ef8b-4216-96a5-e4e95f8c7445) ${p.din.str})
                       (pad "4" smd roundrect (at -2.725 0.75 ${p.rot - 90}) (size 0.82 1.35) (layers "${def_side}.Cu" "${def_side}.Paste" "${def_side}.Mask") (roundrect_rratio 0.1)
                         (chamfer_ratio 0.5) (chamfer bottom_right) (tstamp ${def_side}188d1cd-b0c7-4af4-b538-00c68eac0bf0) ${p.GND.str})

                        `
    }


  if(p.reverse) {
    return `
                    ${common}
                    ${side('B')}
                    ${side('F')}
)
                    `
  } else {
    return `
                    ${common}
                    ${side('F')}
)
                    `
  }
}

}
