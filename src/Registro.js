import React, { useContext } from "react";
import Contexto from "./Contexto";
import { Grid, Box, Typography } from "@material-ui/core";

const Registro = () => {
  const { registros, excluir } = useContext(Contexto);

  return (
    <Grid container item>
      <Box mt={2} p={2} style={{ width: "100%", backgroundColor: "#e3f2fd" }}>
        <Typography variant="subtitle2">Registros:</Typography>
        <Box style={{maxHeight:'200px', overflow:'auto'}}>
          {registros.map((item) => (
            <Typography
              variant="subtitle2"
              key={item.idregistro}
              onContextMenu={(e) => excluir(e, item.idregistro)}
              style={{ cursor: 'pointer' }}
            >
              {item.origem} - {item.datahorario}
            </Typography>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default Registro;
