function z(){                     // will be replaced with eval

  p = "<" + "pre>";               // use <pre> tag for formatted output

  for (                           // loop though lines
    y in n = (                    // y - the line number
      "zw24"      +               // n - the encoded data
      "l6k4"      +               // every line holds encoded data
      "e3t4"      +
      "jnt4"      +               // string will be concated in build process
      "qj24"      +
      "xh2  4"    +               // data after spaces will be ignored but
      "2kty24"    +               // … is used to not break block comments
      "wrt4"      +               // … which will save some chars
      "13n24"     +
      "3n9h24"    +
      "3pdxt4"    +
      "1csb   4"  +
      "3iyb6k4"   +
      "3pk724"    +
      "3nmr24"
    ).split(4)                    // data will be split by (unused) 4

  ){
    for (                         // loop throug every char in line
      a in t = parseInt(          // numbers are encoded as string
        n[y],                     // … with a base of 36
        36
      ) + (                       // large number will be converted to string
        e =                       // e - holds the rendered globe
        x =                       // x - horizonal position
        r = []                    // r - bitmap flag if pixel is set
      )
    ){
      r = !r;                     // toggle binary flag

      for (                       // look though bitmap states
        i = 0;                 
        t[a] > i;                 // draw pixel t[a]-times
        i += .05
      )
        with (Math)               // refer to Math later
          x -= .05,
          0 > cos(                // prevent backface visibility
            o =
              new Date / 1e3 +    // get rotation based on current time
              x / PI
          ) && (
            e[                    // access matrix
              ~~(                 // convert float to integer
                sin(o) *          // rotate around y axis
                sin(.5 + y/7) *
                32                // scale up the globe
              ) + 60              // move to center
            ] = -~r               // store bitmap state in render matrix
          )
    }

    for (                         // loop through columns
      x = 0;
      122 > x;                    // break after char 122
    ) p += "   *#"[               // add space, asterisk or hash
        e[x++] +                  // … based pixel opacity
        e[x++]
      ] || (S = (                 // otherwise use the original code
        "eval(z='" +              // inception of missing "eval" statement
          z
            .split(B = "\\")      // escape \ with \\
            .join(B + B)
         
            .split(Q = "'")       // escape ' with \'
            .join(B + Q) +
         
          Q +                     // add missing ')
         
          ")////////"             // add extra chars to fill mapping
        )[
          x / 2 +                 // get character at current position
          61 * y-1
        ]

      ).fontcolor(                // colorize outpu
        /\w/.test(S) &&           // test for [0-9A-Z]
        "#03B"                    // render blue
                                  // otherwise pink (default)
      );
 
    document.body.innerHTML =     // render output
      p +=                        // append new line
      B +                         // add backspace
      "\n";                       // add new line
  }

  setTimeout(z)                   // render animation on next frame
}
z()