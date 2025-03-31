// Tile #7
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../lib/sanityConfig';
import ConditionalCardActionArea from '../cardActionArea/ConditionalCardActionArea';

function TileImageTitleSubtitleTextListing({ image, alt, link, title, text, subtitle }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card square elevation={link ? 8 : 0}>
      <ConditionalCardActionArea link={link}>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              width: { lg: '379px', md: '248px' },
              display: { md: 'block', xs: 'none' },
            }}
          >
            <GatsbyImage
              image={imageData}
              alt={alt || ''}
              style={{ width: '100%', height: '100%' }}
              imgStyle={{
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box
            sx={{
              marginLeft: { lg: '379px', md: '248px', xs: '0px' },
              padding: link ? { md: 3, xs: 2 } : 0,
              paddingLeft: link ? { md: 3, xs: 2 } : { md: 3, sm: 0 },
            }}
          >
            <Typography gutterBottom variant="h3" component="p">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="p" sx={{ fontStyle: 'italic' }}>
              {subtitle}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {text}
            </Typography>
          </Box>
        </Box>
      </ConditionalCardActionArea>
    </Card>
  );
}

export default TileImageTitleSubtitleTextListing;
