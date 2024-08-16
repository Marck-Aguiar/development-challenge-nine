import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Marck © '}
      <Link href="https://www.linkedin.com/in/marckaguiar/">Marck&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Notícias!
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Inscreva-se para receber notícias MedCloud.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Insira seu e-mail"
                placeholder="Seu e-mail"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Insire seu endereço de e-mail',
                }}
              />
              <Button variant="contained" color="primary" sx={{ flexShrink: 0, fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                Inscrever-se!
              </Button>

            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Produtos
          </Typography>
          <Link color="text.secondary" href="#">
            Produto 1
          </Link>
          <Link color="text.secondary" href="#">
            Produto 2
          </Link>
          <Link color="text.secondary" href="#">
            Produto 3
          </Link>
          <Link color="text.secondary" href="#">
            Produto 4
          </Link>
          <Link color="text.secondary" href="#">
            Produto 5
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Empresa
          </Typography>
          <Link color="text.secondary" href="#">
            Sobre nós
          </Link>
          <Link color="text.secondary" href="#">
            Oportunidades
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Informações Legais
          </Typography>
          <Link color="text.secondary" href="#">
            Termos
          </Link>
          <Link color="text.secondary" href="#">
            Privacidade e LGPD
          </Link>
          <Link color="text.secondary" href="#">
            Contatos
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Politica de Privacidade
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Termos de Serviço
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/Marck-Aguiar/"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/marckaguiar/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}