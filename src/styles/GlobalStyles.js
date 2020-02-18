import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'VisbyBold';
    src: url(${require("../fonts/VisbyCF-Bold.eot")});
    font-family:'VisbyBold';
    src: url(${require("../fonts/VisbyCF-Bold.woff")});
    font-family:'VisbyBold';
    src: url(${require("../fonts/VisbyCF-Bold.woff2")});
  }
  @font-face {
    font-family:'VisbyBoldOblique';
    src: url(${require("../fonts/VisbyCF-BoldOblique.eot")});
    font-family:'VisbyBoldOblique';
    src: url(${require("../fonts/VisbyCF-BoldOblique.woff")});
    font-family:'VisbyBoldOblique';
    src: url(${require("../fonts/VisbyCF-BoldOblique.woff2")});
  }
    @font-face {
    font-family:'VisbyDemiBold';
    src: url(${require("../fonts/VisbyCF-DemiBold.eot")});
    font-family:'VisbyDemiBold';
    src: url(${require("../fonts/VisbyCF-DemiBold.woff")});
    font-family:'VisbyDemiBold';
    src: url(${require("../fonts/VisbyCF-DemiBold.woff2")});
    }
    @font-face {
    font-family:'VisbyDemiBoldOblique';
    src: url(${require("../fonts/VisbyCF-DemiBoldOblique.eot")});
    font-family:'VisbyDemiBoldOblique';
    src: url(${require("../fonts/VisbyCF-DemiBoldOblique.woff")});
    font-family:'VisbyDemiBoldOblique';
    src: url(${require("../fonts/VisbyCF-DemiBoldOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyExtraBold';
    src: url(${require("../fonts/VisbyCF-ExtraBold.eot")});
    font-family:'VisbyExtraBold';
    src: url(${require("../fonts/VisbyCF-ExtraBold.woff")});
    font-family:'VisbyExtraBold';
    src: url(${require("../fonts/VisbyCF-ExtraBold.woff2")});
    }
    @font-face {
    font-family:'VisbyExtraBoldOblique';
    src: url(${require("../fonts/VisbyCF-ExtraBoldOblique.eot")});
    font-family:'VisbyExtraBoldOblique';
    src: url(${require("../fonts/VisbyCF-ExtraBoldOblique.woff")});
    font-family:'VisbyExtraBoldOblique';
    src: url(${require("../fonts/VisbyCF-ExtraBoldOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyHeavy';
    src: url(${require("../fonts/VisbyCF-Heavy.eot")});
    font-family:'VisbyHeavy';
    src: url(${require("../fonts/VisbyCF-Heavy.woff")});
    font-family:'VisbyHeavy';
    src: url(${require("../fonts/VisbyCF-Heavy.woff2")});
    }
    @font-face {
    font-family:'VisbyHeavyOblique';
    src: url(${require("../fonts/VisbyCF-HeavyOblique.eot")});
    font-family:'VisbyHeavyOblique';
    src: url(${require("../fonts/VisbyCF-HeavyOblique.woff")});
    font-family:'VisbyHeavyOblique';
    src: url(${require("../fonts/VisbyCF-HeavyOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyLight';
    src: url(${require("../fonts/VisbyCF-Light.eot")});
    font-family:'VisbyLight';
    src: url(${require("../fonts/VisbyCF-Light.woff")});
    font-family:'VisbyLight';
    src: url(${require("../fonts/VisbyCF-Light.woff2")});
    }
    @font-face {
    font-family:'VisbyLightOblique';
    src: url(${require("../fonts/VisbyCF-LightOblique.eot")});
    font-family:'VisbyLightOblique';
    src: url(${require("../fonts/VisbyCF-LightOblique.woff")});
    font-family:'VisbyLightOblique';
    src: url(${require("../fonts/VisbyCF-LightOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyMedium';
    src: url(${require("../fonts/VisbyCF-Medium.eot")});
    font-family:'VisbyMedium';
    src: url(${require("../fonts/VisbyCF-Medium.woff")});
    font-family:'VisbyMedium';
    src: url(${require("../fonts/VisbyCF-Medium.woff2")});
    }
    @font-face {
    font-family:'VisbyMediumOblique';
    src: url(${require("../fonts/VisbyCF-MediumOblique.eot")});
    font-family:'VisbyMediumOblique';
    src: url(${require("../fonts/VisbyCF-MediumOblique.woff")});
    font-family:'VisbyMediumOblique';
    src: url(${require("../fonts/VisbyCF-MediumOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyRegular';
    src: url(${require("../fonts/VisbyCF-Regular.eot")});
    font-family:'VisbyRegular';
    src: url(${require("../fonts/VisbyCF-Regular.woff")});
    font-family:'VisbyRegular';
    src: url(${require("../fonts/VisbyCF-Regular.woff2")});
    }
    @font-face {
    font-family:'VisbyRegularOblique';
    src: url(${require("../fonts/VisbyCF-RegularOblique.eot")});
    font-family:'VisbyRegularOblique';
    src: url(${require("../fonts/VisbyCF-RegularOblique.woff")});
    font-family:'VisbyRegularOblique';
    src: url(${require("../fonts/VisbyCF-RegularOblique.woff2")});
    }
    @font-face {
    font-family:'VisbyThin';
    src: url(${require("../fonts/VisbyCF-Thin.eot")});
    font-family:'VisbyThin';
    src: url(${require("../fonts/VisbyCF-Thin.woff")});
    font-family:'VisbyThin';
    src: url(${require("../fonts/VisbyCF-Thin.woff2")});
    }
    @font-face {
    font-family:'VisbyThinOblique';
    src: url(${require("../fonts/VisbyCF-ThinOblique.eot")});
    font-family:'VisbyThinOblique';
    src: url(${require("../fonts/VisbyCF-ThinOblique.woff")});
    font-family:'VisbyThinOblique';
    src: url(${require("../fonts/VisbyCF-ThinOblique.woff2")});
  }
  body {
    font-family: "VisbyBold", sans-serif;
  }
`;
