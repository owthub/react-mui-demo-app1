import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

const SingleProductItem = ({ product, btnEvent }) => (
    <Card sx={{ minWidth: 275, marginTop: "10px" }} key={product.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {product.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => btnEvent(product)} size="small">View Details</Button>
      </CardActions>
    </Card>
);

export default SingleProductItem;