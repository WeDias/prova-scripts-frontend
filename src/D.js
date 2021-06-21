import React, { useContext } from "react";
import Contexto from "./Contexto";
import { Button, Box, Typography } from "@material-ui/core";

const D = () => {
  const { salvar } = useContext(Contexto);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      p={1}
      style={{ backgroundColor: "#84ffff" }}
    >
      <Box>
        <Typography variant="body2">Componente D:</Typography>
      </Box>
      <Box ml={1}>
        <Button onClick={() => salvar("D")} variant="contained" size="small">
          Clicar
        </Button>
      </Box>
    </Box>
  );
};

export default D;
