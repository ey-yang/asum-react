import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Favorite from './Favorite'



const TourList = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '94.5%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  tourHead: {
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '-3%',
    color: '#868e96',
    fontSize: '0.85rem'
  },
  tourPrice: {
    fontWeight: 'bold',
    fontSize: '0.95rem',
    color: '#495057',
  },
  favorite: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '-10%',
    justifyContent: 'space-between'
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Album() {
  const classes = TourList();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="caption" style={{ color: "#868e96" }}>
                      #태그 #태그 #태그
                    </Typography>
                    <Typography gutterBottom  className={classes.tourHead}>
                      [제주/시내] 동문시장 투어+제주 전통 음식 쿠킹클래스
                    </Typography>
                    <div className={classes.rating}>
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                    </div>
                    <div className={classes.favorite}>
                      <Typography className={classes.tourPrice}>
                        58,000원
                      </Typography>
                      <Favorite />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  );
}