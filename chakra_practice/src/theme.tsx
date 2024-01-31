import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig = {
  initialColorMode:"light",
  useSystemColorMode:false,
}

const theme = extendTheme({config,colors:{
  primary:{
    50:"#E3F2F9",
    51:"#F56565",
    52:"#63171B",
    53:"##F6AD55",
    54:"#5F370E",
    55:"#38A169",
    56:"#4FD1C5",
    57:"#4299E1",
    58:"#0BC5EA",
    59:"#9F7AEA",
    60:"#ED64A6"
  }
},
fonts:{
  body:"Times New Roman, sans-serif",
  heading: "Honk, system-ui"
}
});
export default theme;