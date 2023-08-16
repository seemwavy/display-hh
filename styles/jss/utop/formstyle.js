// formstyle.js
const styles = {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
    },
    largerTextarea: {
      height: "300px",
      resize: "vertical",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
      width: "50%",
    },
    scrollableTextarea: {
      maxHeight: "300px",
      overflowY: "auto",
      resize: "vertical",
    },
    input: {
      width: "50%",
      height: "40px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
      resize: "vertical",
    },
    submissions: {
      backgroundColor: "green",
      color: "white",
      padding: "20px 20px",
      border: "1px solid orange", 
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
  };
  
  export default styles;
  