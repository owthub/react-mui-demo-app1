import { useContext } from 'react';
import { Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { AppGlobalContext } from '../contexts/AppGlobalState';

const SingleProductDialog = () => {

    const { open, setOpen, singleProductItem } = useContext(AppGlobalContext);

    // Function to handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };

    return <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Product Details</DialogTitle>
            <DialogContent>
            {
                singleProductItem ? (
                <>
                    <Typography variant="h6">{singleProductItem.title}</Typography>
                    {/* <img src={singleProductItem.thumbnail} alt={singleProductItem.title} style={{ width: '400px', height: '400px' }} /> */}
                    <Typography variant="body1"><strong>ID:</strong> {singleProductItem.id}</Typography>
                    <Typography variant="body1"><strong>Brand:</strong> {singleProductItem.brand}</Typography>
                    <Typography variant="body1"><strong>Category:</strong> {singleProductItem.category}</Typography>
                    <Typography variant="body1"><strong>Description:</strong> {singleProductItem.description}</Typography>
                    <Typography variant="body1"><strong>Discount %:</strong> {singleProductItem.discountPercentage}</Typography>
                    <Typography variant="body1"><strong>Price:</strong> {singleProductItem.price}</Typography>
                    <Typography variant="body1"><strong>Rating:</strong> {singleProductItem.rating}</Typography>
                </>
                ) : ""
            }
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
            </DialogActions>
        </Dialog>
    </>
}

export default SingleProductDialog