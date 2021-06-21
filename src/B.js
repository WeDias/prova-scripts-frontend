import React, {useContext} from "react"
import Contexto from './Contexto'
import D from './D'
import { Grid, Button, Box, Typography } from "@material-ui/core";

const B = () => {
  const {salvar} = useContext(Contexto)

  return (
    <Grid container item style={{ backgroundColor: "#dcedc8" }} sm={6}>
      <Box p={1} style={{width:'100%'}}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          pb={2}
        >
          <Box>
            <Typography variant="body2">Componente B:</Typography>
          </Box>
          <Box ml={1}>
            <Button
              onClick={() => salvar("B")}
              variant="contained"
              size="small"
            >
              Clicar
            </Button>
          </Box>
        </Box>
        <D />
      </Box>
    </Grid>
  );
}

export default B;