import React, { useEffect, useState } from "react";
import A from "./A";
import B from "./B";
import Registro from "./Registro";
import Contexto from "./Contexto";
import api from "./api";
import { Grid, Button, Box, Typography } from "@material-ui/core";

const App = () => {
  const [registros, setRegistros] = useState([]);
  console.log('ENV:' + process.env.REACT_APP_SERVER_URL)

  useEffect(() => {
    carregar();
  }, []);

  const salvar = (origem) => {
    api
      .get(`/insert/${origem}`)
      .then((response) => {
        if (response.data.error) console.log(response.data.message);
        else {
          if (response.data.rowCount === 1) carregar();
        }
      })
      .catch((e) => console.log(e.message));
  };

  const excluir = (e, id) => {
    e.preventDefault();
    api
      .get(`/del/${id}`)
      .then((response) => {
        if (response.data.error) console.log(response.data.message);
        else {
          if (response.data.rowCount === 1) carregar();
        }
      })
      .catch((e) => console.log(e.message));
  };

  const carregar = () => {
    api
      .get("/select")
      .then((response) => {
        if (response.data.error) console.log(response.data.error);
        else {
          setRegistros(response.data.rows);
        }
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Contexto.Provider value={{ salvar, registros, excluir }}>
      <Grid container justify="center">
        <Grid
          container
          item
          style={{ backgroundColor: "#ffcdd2" }}
          xs={12}
          sm={9}
          md={6}
          lg={4}
        >
          <Box p={2} style={{ width: "100%" }}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              pb={1}
              pt={1}
            >
              <Box>
                <Typography variant="body2">Componente App:</Typography>
              </Box>
              <Box ml={1}>
                <Button
                  onClick={() => salvar("X")}
                  variant="contained"
                  size="small"
                >
                  Clicar
                </Button>
              </Box>
            </Box>
            <Grid
              container
              wrap="nowrap"
              style={{ backgroundColor: "magenta" }}
            >
              <A />
              <B />
            </Grid>
            <Registro />
          </Box>
        </Grid>
      </Grid>
    </Contexto.Provider>
  );
};

export default App;
