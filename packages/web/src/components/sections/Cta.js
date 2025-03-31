import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from 'gatsby-theme-material-ui';

function Cta({ id }) {
  const btnTheme = (theme) =>
    createTheme({
      palette: {
        primary: {
          main: theme.palette.common.white,
          dark: '#E0E0E0',
          contrastText: theme.palette.primary.main,
        },
      },
      shape: {
        borderRadius: '4px',
      },
      typography: {
        button: {
          fontFamily: theme.typography.fontFamily,
          fontWeight: 900,
          fontSize: '20px',
          lineHeight: '1.2',
          textTransform: 'none',
        },
      },
    });

  return (
    <Box
      component="section"
      id={id}
      sx={[
        (theme) => ({
          padding: {
            lg: theme.customSpacing.sectionOuter.padding.desktop,
            md: theme.customSpacing.sectionOuter.padding.tablet,
            sm: theme.customSpacing.sectionOuter.padding.tabletMobile,
            xs: theme.customSpacing.sectionOuter.padding.mobile,
          },
        }),
      ]}
    >
      <Container
        maxWidth="lg"
        sx={[
          (theme) => ({
            padding: {
              lg: theme.customSpacing.sectionInner.padding.desktop,
              md: theme.customSpacing.sectionInner.padding.tablet,
              sm: theme.customSpacing.sectionInner.padding.tabletMobile,
              xs: theme.customSpacing.sectionInner.padding.mobile,
            },
          }),
        ]}
      >
        <Box
          sx={{
            padding: '1.5rem',
            color: 'common.white',
            backgroundColor: 'primary.main',
            borderRadius: '8px',
          }}
        >
          <Typography
            paragraph
            variant="h4"
            sx={{
              textAlign: 'center',
            }}
          >
            CONTACT US TODAY FOR A FREE QUOTE
          </Typography>
          <Typography
            component="a"
            paragraph
            variant="h3"
            href="tel:647-237-6900"
            sx={{
              textAlign: 'center',
              display: 'block',
              color: 'common.white',
              textDecoration: 'none',
            }}
          >
            Call us at 647-237-6900
          </Typography>
          <ThemeProvider theme={(theme) => btnTheme(theme)}>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                to="/contact-us"
                disableElevation
                disableFocusRipple
                disableRipple
                sx={{ padding: '12px 24px', textAlign: 'center' }}
                className="btn-cta-banner"
              >
                Request a quote
              </Button>
            </Box>
          </ThemeProvider>
        </Box>
      </Container>
    </Box>
  );
}

export default Cta;
