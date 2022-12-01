// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$16",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
import { styled as styled2 } from "@stitches/react";
var AvatarContainer = styled2(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$12",
  height: "$12",
  overflow: "hidden"
});
var AvatarImage = styled2(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled2(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, {
    children: [
      /* @__PURE__ */ jsx(AvatarImage, {}),
      /* @__PURE__ */ jsx(AvatarFallback, {
        delayMs: 600,
        children: /* @__PURE__ */ jsx(User, {})
      })
    ]
  });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
import { styled as styled3 } from "@stitches/react";
var Button = styled3("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "baseline",
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,
  width: "100%",
  "&:focus": {
    outline: 0
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput({ prefix, ...props }) {
  return /* @__PURE__ */ jsxs2(TextInputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ jsx2(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ jsx2(Input, {
        ...props
      })
    ]
  });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$ignite300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid $gray900",
  '&[data-state="checked"]': {
    backgroundColor: "$ignite300"
  },
  "&:focus": {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms case-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms case-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, {
    ...props,
    children: /* @__PURE__ */ jsx3(CheckboxIndicator, {
      asChild: true,
      children: /* @__PURE__ */ jsx3(Check, {
        weight: "bold"
      })
    })
  });
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, {
    children: [
      /* @__PURE__ */ jsxs3(Label, {
        children: [
          "Passo ",
          currentStep,
          " de ",
          size
        ]
      }),
      /* @__PURE__ */ jsx4(Steps, {
        css: { "--steps-size": size },
        children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return /* @__PURE__ */ jsx4(Step, {
            active: currentStep >= step
          }, step);
        })
      })
    ]
  });
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/index.tsx
import * as TooltipPrimitive2 from "@radix-ui/react-tooltip";

// src/components/Tooltip/styles.ts
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled as styled4 } from "@stitches/react";
var TooltipContent = styled4(TooltipPrimitive.Content, {
  padding: "$3 $4",
  background: "$gray900",
  color: "$gray100",
  fontFamily: "$default",
  fontSize: "$sm",
  borderRadius: "$xs",
  filter: "drop-shadow(4px 16px 24px rgba(0,0,0,0.2))"
});
var TooltipArrow = styled4(TooltipPrimitive.Arrow, {
  fill: "$gray900"
});

// src/components/Tooltip/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Tooltip({ content, children, ...props }) {
  return /* @__PURE__ */ jsx5(TooltipPrimitive2.Provider, {
    children: /* @__PURE__ */ jsxs4(TooltipPrimitive2.Root, {
      ...props,
      children: [
        /* @__PURE__ */ jsx5(TooltipPrimitive2.Trigger, {
          asChild: true,
          children
        }),
        /* @__PURE__ */ jsx5(TooltipPrimitive2.Portal, {
          children: /* @__PURE__ */ jsxs4(TooltipContent, {
            children: [
              /* @__PURE__ */ jsx5(TooltipArrow, {}),
              content
            ]
          })
        })
      ]
    })
  });
}
Tooltip.displayName = "Tooltip";

// src/components/Toast/index.tsx
import * as ToastPrimitive2 from "@radix-ui/react-toast";
import { X } from "phosphor-react";

// src/components/Toast/styles.ts
import { keyframes as keyframes2, styled as styled5 } from "@stitches/react";
import * as ToastPrimitive from "@radix-ui/react-toast";
var VIEWPORT_PADDING = 32;
var hide = keyframes2({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var slideIn2 = keyframes2({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" }
});
var swipeOut = keyframes2({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});
var ToastRoot = styled5(ToastPrimitive.Root, {
  padding: "$3 $4",
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  fontFamily: "$default",
  position: "relative",
  "@media (prefers-reduced-notion: no-preference": {
    '&[data-state="open"]': {
      animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))"
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out"
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  }
});
var ToastTitle = styled5(ToastPrimitive.Title, {
  color: "$white",
  fontWeight: "$bold",
  fontSize: "$xl",
  lineHeight: "$base"
});
var ToastDescription = styled5(ToastPrimitive.Description, {
  color: "$gray200",
  fontSize: "$sm",
  lineHeight: "$base",
  marginTop: "$1"
});
var ToastClose = styled5(ToastPrimitive.Close, {
  position: "absolute",
  top: "$4",
  right: "$4",
  background: "none",
  border: "none",
  color: "$gray200",
  cursor: "pointer"
});
var ToastViewport2 = styled5(ToastPrimitive.ToastViewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: VIEWPORT_PADDING,
  width: 390,
  maxWidth: "100vh",
  margin: 0,
  listStyle: "none",
  zIndex: 999999,
  outline: "none"
});

// src/components/Toast/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Toast({ title, description, ...props }) {
  return /* @__PURE__ */ jsxs5(ToastPrimitive2.Provider, {
    children: [
      /* @__PURE__ */ jsxs5(ToastRoot, {
        ...props,
        children: [
          /* @__PURE__ */ jsx6(ToastTitle, {
            children: title
          }),
          description && /* @__PURE__ */ jsx6(ToastDescription, {
            children: description
          }),
          /* @__PURE__ */ jsx6(ToastClose, {
            children: /* @__PURE__ */ jsx6(X, {
              weight: "light",
              size: 20
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx6(ToastViewport2, {})
    ]
  });
}
Toast.displayName = "Toast";
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip
};
