import React, { useContext } from "react";
import Contexto from "./Contexto";
import C from "./C";
import { Grid, Button, Box, Typography } from "@material-ui/core";

const A = () => {
  const { salvar } = useContext(Contexto);

  return (
    <Grid container item style={{ backgroundColor: "#f4ff81" }} sm={6}>
      <Box p={1} style={{width:'100%'}}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          pb={2}
        >
          <Box>
            <Typography variant="body2">Componente A:</Typography>
          </Box>
          <Box ml={1}>
            <Button
              onClick={() => salvar("A")}
              variant="contained"
              size="small"
            >
              Clicar
            </Button>
          </Box>
        </Box>
        <C />
      </Box>
    </Grid>
  );
};

export default A;
