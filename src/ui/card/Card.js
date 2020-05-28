import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	}
});

export default function BirthdatBoyCard(props) {
	const classes = useStyles();

	return (
		<Card component="li" className={classes.root} onClick={() => props.handleClick(props)}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Gift"
					height="140"
					image="https://cdn.myshoptet.com/usr/www.mapcards.net/user/shop/big/638_mps06-maine-coon-kittens.jpg?5c3d89a8"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.birthdayBoyName}
					</Typography>
					{/* <Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
						continents except Antarctica
					</Typography> */}
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary" onClick={() => props.handleClick(props)}>
					show wish
				</Button>
			</CardActions>
		</Card>
	);
}
