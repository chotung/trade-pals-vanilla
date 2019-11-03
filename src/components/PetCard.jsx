import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



// const PetCard = (props) => {
//   const {pet} = props
//   return (
//     <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m ">
//       <form onSubmit={props.addToCart} id={pet.name} data={pet}>
//         <img src={pet.imgUrl} alt="Pet"/>
//         <h2 className="uk-card-title">{pet.name}</h2>
//         <ul>
//           <li>{pet.age}</li>
//           <li>{pet.breed}</li>
//           <li>{pet.location}</li>
//           <li>{pet.price}</li>
//           <li>{pet.sex}</li>
//         </ul>
//         <button type="submit" value="Submit">Add to Cart</button>
//       </form>
//     </div>
//   );
// }

// export default PetCard;
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PetCard = (props) => {
  const classes = useStyles();

  const {pet} = props
  return (
    <Card className={classes.card} >
      <form onSubmit={props.addToCart} id={pet.name} data={pet}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={pet.imgUrl}
            title={pet.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {pet.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam quae delectus, atque asperiores ratione quas accusamus eos. Dolore totam consequuntur aspernatur rem voluptate officia!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" type="submit" value="Submit">
            Add To Cart
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}

export default PetCard;

/**
 * import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

 */