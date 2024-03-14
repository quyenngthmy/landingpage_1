const defaultColors = require("tailwindcss/colors");
const COLORS = {
  info: {
    100: "#E2F1FF",
    200: "#ADD9FF",
    300: "#72B7FB",
    400: "#2B88FB",
    500: "#006EEF",
  },
  success: {
    100: "#DEF5D9",
    200: "#AEE4AD",
    300: "#73C686",
    400: "#28A745",
    500: "#008E39",
  },
  warning: {
    100: "#FFF6D9",
    200: "#FFE1A8",
    300: "#FDC66E",
    400: "#F0A328",
    500: "#E99208",
  },
  error: {
    100: "#FDECEF",
    200: "#FFABB5",
    300: "#FA8091",
    400: "#EA3E53",
    500: "#DA072D",
  },
  primary: {
    1: '#000000',
    2: '#555555',
    3: '#666666',
  },
  secondary: {
    1: '#696969',
    2: '#808080',
    3: '#A9A9A9',
    4: '#C0C0C0',
    5: '#D3D3D3',
    6: '#DCDCDC',
  },
  neutral: {
    1: {
      900: '#2C333A',
      800: '#424752',
      700: '#5A6271',
      600: '#6B7280',
      500: '#858F9B',
      400: '#929DAA',
      300: '#A1ACB8',
      200: '#CDD3DB',
      100: '#D2D8E0',
      50: '#DDE2E9',
    },
    2: {
      300: '#DAE0E6',
      200: '#E2E7ED',
      100: '#E9EDF2',
      50: '#F2F4F7',
    },
    3: {
      300: '#E3E6E9',
      200: '#EBEDEF',
      100: '#F0F1F3',
      50: '#F8F9FB',
    },
  },
  gradient: {
    start: "#A68A64",
    end: "#DEB37C",
  },
}

function genarateColorTDS() {
  var colors = [];
  for (const colorName in COLORS) {
    for (const colorOpacity in COLORS[colorName]) {
      colors.push(`${colorName}-${colorOpacity}`);
    }
  }
  if (COLORTAIWIND.length > 0) {
    for (let index = 0; index < COLORTAIWIND.length; index++) {
      const colorName = COLORTAIWIND[index];
      if (defaultColors[colorName])
        for (const colorOpacity in defaultColors[colorName]) {
          colors.push(`${colorName}-${colorOpacity}`);
        }
    }
  }
  var prefixs = [
    "ring",
    "bg",
    "border",
    "text",
    "focus:bg",
    "focus:border",
    "hover:border",
    "hover:bg",
    "disabled:bg",
    "disabled:border",
    "dark:bg",
    "dark:text",
    "dark:border",
    "dark:group-hover:text",
    "dark:hover:bg",
    "dark:hover:text",
  ];

  var result = [];
  for (let index = 0; index < prefixs.length; index++) {
    const prefix = prefixs[index];
    for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      const color = colors[colorIndex];
      result.push(prefix + "-" + color);
    }
  }

  return result;
}

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        ...COLORS
      },
      ringColor: {
        ...COLORS,
      },
      borderColor: {
        ...COLORS,
      },
      placeholderColor: {
        ...COLORS,
      },
      fontSize: {
        'caption-1': ['13px', '16px'], 
        'caption-2': ['12px', '20px'], 
        'body-1': ['18px', '24px'],
        'body-2': ['16px', '22px'],
        'header-1': ['20px', '28px'],
        'header-2': ['18px', '28px'],
        'heading-1': ['40px', '58px'],
        'heading-2': ['36px', '52px'],
        'heading-3': ['32px', '46px'],
        'heading-4': ['28px', '40px'],
        'heading-5': ['24px', '34px'],
        'heading-6': ['20px', '30px'],
        'display-1': ['80px', 'auto'],
        'display-2': ['72px', 'auto'],
        'display-3': ['64px', 'auto'],
        'display-4': ['56px', 'auto'],
        'display-5': ['48px', 'auto'],
        'display-6': ['40px', 'auto'],
      },
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
      },
      backgroundImage: {
        'social': "url('/src/image/background/social.png')",
        'social-container': "url('/src/image/background/social-container.png')",
        'footer': "url('/src/image/background/footer.png')",
      },
      boxShadow:{
        dropdown : '0px 4px 4px rgba(0, 0, 0, 0.08)',
        popup : '0px 10px 40px rgba(0, 0, 0, 0.08)',
        navmenu : '0px 10px 40px 0px #00000014',
      },
      maxWidth: {
        'screen-3xl': '1920px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
