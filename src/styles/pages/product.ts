import { styled } from "@stitches/react";

export const ProductContainer = styled("main", {

  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const ImageContainer = styled("div", {
  backgroundImage: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0 0.25rem",

  width: '100%',
  maxWidth: 576,
  height: 656,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    height: '100%',
  },
});

export const ProductDetails = styled("div", {
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: '50%',

  fontSize: "$lg",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  h1:{
    fontSize: '$2xl',
    color: '$gray300',
  },

  p: {
    fontSize: "$md",
    color: "$gray300",
    wordBreak: "break-word",
  },

  span: {
    color: "$green500",
    fontSize: "$xl",
    fontWeight: "bolder",
  },

  button: {
    width: "100%",
    backgroundColor: "$green500",
    color: "$gray100",
    borderRadius: "8px",
    padding: "2rem 0.5rem",

    cursor:"pointer",

    fontSize: "$xl",
    fontWeight: "bold",

    '&:disabled': {
      opacity: 0.6,
      cursor: 'wait',
    },

    '&:not(:disabled):hover':{
      backgroundColor: "$green300",
    },
  },
  
});
