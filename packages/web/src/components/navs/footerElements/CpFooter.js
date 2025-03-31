import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Link } from 'gatsby-theme-material-ui';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { styled } from '@mui/material/styles';
import fb from './fb.png';
import insta from './insta.png';
import homeStars from './homeStars.png';
import linkedIn from './linkedIn.png';

const MenuHeading = styled(Box)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.1,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  padding: '10px 0',
}));

const MenuText = styled(Box)({
  textDecoration: 'none',
  fontWeight: 500,
  display: 'flex',
  // alignItems: 'center',
  lineHeight: 1.4,
  margin: '0 0 16px 0',
});

const MenuItem = styled('li')({
  marginBottom: '8px',
});

const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontWeight: 500,
  lineHeight: 'normal',
  color: '#f1f1f1',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

function CpFooter() {
  return (
    <Box component="footer">
      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          fontFamily: 'Inter, Arial, sans-serif',
          color: '#f1f1f1',
          paddingY: '24px',
          fontSize: '16px',
          fontWeight: 300,
          textDecoration: 'none',
        }}
      >
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={6}>
              <MenuHeading component="p">CONTACT INFO</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuText component="p">
                    <LocationOnIcon color="primary" sx={{ mr: '8px' }} />
                    10 Navy Wharf Ct, Toronto, ON M5V 3V2, Canada
                  </MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText component="p">
                    <PhoneIcon color="primary" sx={{ mr: '8px' }} />
                    <MenuLink href="tel:647-580-9479">647-237-6900</MenuLink>
                  </MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText component="p">
                    <MailOutlineIcon color="primary" sx={{ mr: '8px' }} />
                    <MenuLink href="mailto:info@thecitypainters.com">
                      info@thecitypainters.com
                    </MenuLink>
                  </MenuText>
                </MenuItem>
              </Box>
              <br />
              <Grid container spacing={3}>
                <Grid>
                  <a
                    href="https://www.facebook.com/thecitypainters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={fb} alt="facebook" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.instagram.com/citypainters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} alt="instagram" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://homestars.com/companies/2795419-the-city-painters?service_area=1857483"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={homeStars} alt="homestars" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
                <Grid>
                  <a
                    href="https://www.linkedin.com/company/the-city-painters"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedIn} alt="linkedin" width="48" height="48" loading="lazy" />
                  </a>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">SERVICES</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuLink to="/commercial-painting-services">Commercial Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/industrial-painting-services">Industrial Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/facility-painting">Facility Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/residential-painting-services">Residential Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/interior-painting">House Interior Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/exterior-painting">House Exterior Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/condo-painters-toronto">Condo Painting</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/epoxy-flooring">Epoxy Flooring</MenuLink>
                </MenuItem>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3} lg={3}>
              <MenuHeading component="p">IMPORTANT LINKS</MenuHeading>
              <Box component="ul" sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                <MenuItem>
                  <MenuLink to="/">Home</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/resources">Learning Center</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/locations">Service Areas</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/contact-us">Contact Us</MenuLink>
                </MenuItem>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: 'common.black',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 300,
          color: '#848484',
          lineHeight: 0,
          padding: '20px 0',
          borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Container
          maxWidth="lg"
          component="nav"
          role="menubar"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <p>
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener"
              sx={{
                textDecoration: 'none',
                fontWeight: 300,
                fontSize: '13px',
                color: '#f1f1f1',
                '&:hover, &:focus, &:active': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
            &nbsp; - Copyright {new Date().getFullYear()} The City Painters
          </p>
        </Container>
      </Box>
    </Box>
  );
}
export default CpFooter;
