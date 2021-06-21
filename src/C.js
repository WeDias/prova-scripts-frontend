import React, { useContext } from "react";
import Contexto from "./Contexto";
import { Button, Box, Typography } from "@material-ui/core";

const C = () => {
  const { salvar } = useContext(Contexto);

  return (
    <Box display="flex" flexDirection="row" alignItems="center" p={1} style={{backgroundColor:'#ffcc80'}}>
      <Box>
        <Typography variant="body2">Componente C:</Typography>
      </Box>
      <Box ml={1}>
        <Button onClick={() => salvar("C")} variant="contained" size="small">
          Clicar
        </Button>
      </Box>
    </Box>
  );
};

export default C;
