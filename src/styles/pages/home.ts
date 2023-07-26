import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  backgroundImage: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0 0.25rem",
  cursor: "pointer",
  overflow: 'hidden',

  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: 'column',
  gap: '0rem',

  
  img: {
    objectFit: "cover",
  },
  
  footer: {
    width: "100%",
    borderRadius: 6,
    
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    
    transform: "translateY(110%)",
    transition: "all 0.2s ease-in-out",
    opacity: 0,
    
    div: {
      padding: "2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    
    strong: {
      textDecoration: 'none',
      fontSize: "$lg",
      color: '$gray100'
    },
    
    span: {
      textDecoration: 'none',
      color: "$green500",
      fontWeight: "bold",
      fontSize: "$xl",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(15%)",
      opacity: 1,
    },
  },

});
