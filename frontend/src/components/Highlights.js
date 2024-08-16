import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Desempenho adaptável',
    description:
      'Nossa aplicação ajusta-se facilmente às suas necessidades, aumentando a eficiência e simplificando a gestão de dados.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Feito para durar',
    description:
      'Experimente a durabilidade excepcional que garante um investimento duradouro em seu sistema de gerenciamento.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Ótima experiência do usuário',
    description:
      'Integre nossa aplicação à sua rotina com uma interface intuitiva e fácil de usar, proporcionando uma experiência sem fricções.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Funcionalidade Inovadora',
    description:
      'Mantenha-se à frente com recursos inovadores que estabelecem novos padrões, atendendo às suas necessidades em constante evolução de forma superior.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Suporte confiável',
    description:
      'Conte com nosso suporte ao cliente ágil e especializado, oferecendo assistência que vai além da simples resolução de problemas.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precisão em cada detalhe',
    description:
      'Desfrute de uma aplicação meticulosamente desenvolvida, onde cada detalhe contribui significativamente para uma experiência eficiente e satisfatória.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Destaques
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Eis uma listagem dos motivos do produto se destacar: adaptabilidade, durabilidade, design amigável
           e inovação. Feito especialmente para você!.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}