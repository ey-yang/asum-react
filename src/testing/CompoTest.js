import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Favorite from '../components/common/Favorite'
import styled from 'styled-components';

const TourListBlock = styled.div`
  display: flex;
  flex-direction: row;
  .card {
    height: 330px;
    width: 216px;
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem 0rem 0rem;
  }
  .cardMedia {
    padding-top: 80%; // 16:9
  }
  .cardContent {
    flex-grow: 1;
  }
  .tourHead {
    font-weight: bold;
    font-size: 0.95rem;
  }
  .rating {
    display: flex;
    flex-direction row;
    align-items: center;
    margin-left: -3%;
    color: #868e96;
    font-size: 0.85rem;
  }
  .tourPrice {
    font-weight: bold;
    font-size: 0.95rem;
    color: #495057;
  }
  .favorite {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: -10%;
    justify-content: space-between;
  }
`;

const TourList = () => {

  return (
      <main>
        <Container className="cardGrid" maxWidth="md">
          <TourListBlock>
                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="caption" style={{ color: "#868e96" }}>
                      #태그 #태그 #태그
                    </Typography>
                    <Typography gutterBottom  className="tourHead">
                      [제주/시내] 동문시장 투어+제주 전통 음식 쿠킹클래스
                    </Typography>
                    <div className="rating">
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                    </div>
                    <div className="favorite">
                      <Typography className="tourPrice">
                        58,000원
                      </Typography>
                      <Favorite />
                    </div>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="caption" style={{ color: "#868e96" }}>
                      #태그 #태그 #태그
                    </Typography>
                    <Typography gutterBottom  className="tourHead">
                      [제주/시내] 동문시장 투어+제주 전통 음식 쿠킹클래스
                    </Typography>
                    <div className="rating">
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                    </div>
                    <div className="favorite">
                      <Typography className="tourPrice">
                        58,000원
                      </Typography>
                      <Favorite />
                    </div>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="caption" style={{ color: "#868e96" }}>
                      #태그 #태그 #태그
                    </Typography>
                    <Typography gutterBottom  className="tourHead">
                      [제주/시내] 동문시장 투어+제주 전통 음식 쿠킹클래스
                    </Typography>
                    <div className="rating">
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                    </div>
                    <div className="favorite">
                      <Typography className="tourPrice">
                        58,000원
                      </Typography>
                      <Favorite />
                    </div>
                  </CardContent>
                </Card>

                <Card className="card">
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="caption" style={{ color: "#868e96" }}>
                      #태그 #태그 #태그
                    </Typography>
                    <Typography gutterBottom  className="tourHead">
                      [제주/시내] 동문시장 투어+제주 전통 음식 쿠킹클래스
                    </Typography>
                    <div className="rating">
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                    </div>
                    <div className="favorite">
                      <Typography className="tourPrice">
                        58,000원
                      </Typography>
                      <Favorite />
                    </div>
                  </CardContent>
                </Card>
                               
          </TourListBlock>
        </Container>
        
      </main>
    
    
  );
}

export default TourList;


 /* const tourlist = makeStyles(() => ({
 
  card: {
    height: '330px',
    width: '216px',
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

const TourList = () => {

  const classes = tourlist();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
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
        </Container>
      </main>
    </React.Fragment>
  );
}

export default TourList; */